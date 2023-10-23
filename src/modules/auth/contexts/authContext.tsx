import {
  ReactNode,
  createContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import EUnauthenticatedPath from '@/core/Router/enums/EUnauthenticatedPath';

import useLocalStorage from '@/shared/hooks/useLocalStorage';

import { loginData } from '../domain/schemas/login';

import SignUpDTO from '../domain/dtos/SignUpDTO';
import EAuthAction from '../domain/enums/EAuthAction';
import IAuth from '../domain/interfaces/IAuth';
import IAuthAction from '../domain/interfaces/IAuthAction';
import IUseAuth from '../domain/interfaces/IUseAuth';
import AuthRepository from '../repositories/AuthRepository';

interface Props {
  children: ReactNode;
}

export const AuthContext = createContext<IUseAuth>({} as IUseAuth);

function authReducer(state: IAuth, action: IAuthAction) {
  const { type, user } = action;

  switch (type) {
    case EAuthAction.LOGIN:
      if (user)
        return {
          ...state,
          authenticated: true,
          user: user,
        } as IAuth;
    case EAuthAction.LOGOUT:
      return {
        ...state,
        authenticated: false,
        user: null,
      } as IAuth;
    default:
      throw new Error('Tipo de autenticação inválida.');
  }
}

export function AuthProvider({ children }: Props) {
  const navigate = useNavigate();
  const location = useLocation();


  const repository = new AuthRepository();

  const { storeValue, clearStorage } = useLocalStorage('token', {
    token: '',
  });

  const [state, dispatch] = useReducer(authReducer, {
    authenticated: false,
    user: null,
  } as IAuth);

  const [loading, setLoading] = useState<boolean>(true);

  async function checkAuthentication() {
    if (state.authenticated) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const user = await repository.check();
      dispatch({ type: EAuthAction.LOGIN, user });


      navigate(location ?? '/');
    } catch (error) {
      dispatch({ type: EAuthAction.LOGOUT });
      clearStorage();
    } finally {
      setLoading(false);
    }
  }

  async function signUp(data: SignUpDTO) {
    try {
      setLoading(true);

      await repository.signUp(data);

      return 'Cadastro realizado com sucesso!';
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function login(data: loginData) {
    try {
      setLoading(true);

      const { token, user } = await repository.login(data);

      dispatch({ type: EAuthAction.LOGIN, user });

      storeValue({ token });

      navigate(location.state?.from ?? '/', {
        state: {
          origin: 'login',
          loggedIn: true
        }
      });
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    setLoading(true);

    dispatch({ type: EAuthAction.LOGOUT });
    clearStorage();

    navigate(`/${EUnauthenticatedPath.LOGIN}`);

    setLoading(false);
  }

  async function refreshUser() {
    const user = await repository.check();
    dispatch({ type: EAuthAction.LOGIN, user });
  }

  useEffect(() => {
    checkAuthentication();
  }, []);

  useEffect(() => {
    if (state.authenticated) setLoading(false);
  }, [state]);

  const value = useMemo(
    () => ({
      signUp,
      login,
      logout,
      loading,
      refreshUser,
      ...state,
    }),
    [loading, state]
  );

  return (
    <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
  );
}

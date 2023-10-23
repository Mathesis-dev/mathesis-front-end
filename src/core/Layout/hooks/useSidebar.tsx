import { createContext, ReactNode, useContext, useState } from 'react';

export const SidebarContext = createContext({
  open: false,
  setOpen: (value: boolean) => {},
});

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);

  function handleOpen(value: boolean) {
    setOpen(value);
  }

  return (
    <SidebarContext.Provider
      value={{
        open,
        setOpen: handleOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const { open, setOpen } = useContext(SidebarContext);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleToggle() {
    setOpen(!open);
  }

  return {
    isOpen: open,
    open: handleOpen,
    close: handleClose,
    toggle: handleToggle,
  };
}

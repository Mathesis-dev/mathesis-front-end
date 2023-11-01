import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Search } from '@mui/icons-material';
import { Grid } from '@mui/material';

import ControlledCity from '@/shared/components/Fields/Controlled/City';
import ControlledDebounce from '@/shared/components/Fields/Controlled/Debounce';
import ControlledEnum from '@/shared/components/Fields/Controlled/Enum';
import ControlledUF from '@/shared/components/Fields/Controlled/UF';

import ESubject, { ESubjectTranslate } from '@/shared/domain/enums/ESubject';

import TeacherListFilterDTO from '@/modules/home/domain/dtos/TeacherListFilterDTO';
import ITeacherListFilter from '@/modules/home/domain/interfaces/ITeacherListFilter';

interface Props {
  onFilter: (filter: TeacherListFilterDTO) => void;
}

export default function HomeListFilter({ onFilter }: Props) {
  const methods = useForm<ITeacherListFilter>({
    defaultValues: { search: '' },
  });

  const { control, handleSubmit, watch } = methods;

  const search: string | undefined = watch('search');
  const state: string | undefined = watch('state');
  const city: string | undefined = watch('city');
  const subject: ESubject | undefined = watch('subject');

  function submit(data: TeacherListFilterDTO) {
    onFilter(data);
  }

  useEffect(() => {
    submit({
      search: !!search ? search : undefined,
      state: !!state ? state : undefined,
      city: !!city ? city : undefined,
      subject: !!subject ? subject : undefined,
    });
  }, [search]);

  return (
    <Grid
      container
      spacing={2}
      component="form"
      onSubmit={handleSubmit(submit)}
    >
      <Grid item xl={6} md={6} sm={6} xs={12}>
        <ControlledDebounce
          label="Procurar"
          name="search"
          control={control}
          icon={<Search />}
        />
      </Grid>

      <Grid item xl={2} md={4} sm={6} xs={12}>
        <ControlledUF label="Estado" name="state" control={control} />
      </Grid>

      <FormProvider {...methods}>
        <Grid item xl={2} md={4} sm={6} xs={12}>
          <ControlledCity
            label="Cidade"
            name="city"
            control={control}
            uf={state}
          />
        </Grid>
      </FormProvider>

      <Grid item xl={2} md={4} sm={6} xs={12}>
        <ControlledEnum
          label="Matéria"
          name="subject"
          control={control}
          options={ESubject}
          translate={ESubjectTranslate}
        />
      </Grid>
    </Grid>
  );
}

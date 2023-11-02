import IPaginationRequest from '@/shared/domain/interfaces/IPaginationRequest';
import { Pagination as MUIPagination, Stack } from '@mui/material';

interface Props {
  total?: number;
  page?: number;
  onChange: (
    pagination: Omit<IPaginationRequest, 'orderBy' | 'ordering'>
  ) => void;
}

export default function Pagination({ total, page, onChange }: Props) {
  function handleChangePage(_: unknown, value: number) {
    onChange({ page: value });
  }

  return (
    <Stack alignItems="center">
      <MUIPagination
        page={page ?? 1}
        count={Math.ceil((total ?? 8) / 8)}
        onChange={handleChangePage}
      />
    </Stack>
  );
}

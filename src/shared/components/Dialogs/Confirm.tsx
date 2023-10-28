import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { Close, InfoOutlined } from '@mui/icons-material';
import useConfirmDialog from '../../hooks/useConfirmDialog';

export default function ConfirmDialog() {
  const { confirmDialog, resolveConfirmDialog, cancelConfirmDialog } =
    useConfirmDialog();

  const { open, title, description, continueLabel, cancelLabel, onlyCancel } =
    confirmDialog;

  return (
    <Dialog
      open={open}
      onClose={cancelConfirmDialog}
      fullWidth
      sx={{ '& .MuiPaper-root': { maxWidth: '450px' } }}
    >
      <DialogTitle
        display="flex"
        flexDirection="column"
        gap="12px"
        sx={{ padding: '24px' }}
      >
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="12px"
        >
          <Stack flexDirection="row" alignItems="center" gap={1}>
            <InfoOutlined fontSize="large" color="primary" />

            <Typography fontWeight="bold" color="primary.main" variant="h5">
              {title}
            </Typography>
          </Stack>

          <IconButton color="primary" onClick={cancelConfirmDialog}>
            <Close />
          </IconButton>
        </Stack>

        <Divider />
      </DialogTitle>

      <DialogContent sx={{ padding: '0 24px' }}>
        {typeof description === 'string' ? (
          <Typography
            variant="h6"
            component="p"
            fontWeight="normal"
            color="text.secondary"
            sx={{ whiteSpace: 'pre-line' }}
          >
            {description}
          </Typography>
        ) : (
          description
        )}
      </DialogContent>

      <DialogActions
        sx={{
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <Divider flexItem />

        <Stack
          width="100%"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="12px"
        >
          <Button
            onClick={() => resolveConfirmDialog(false)}
            color="secondary"
            variant="outlined"
            size="large"
            fullWidth
          >
            {cancelLabel ?? 'Cancelar'}
          </Button>
          {!onlyCancel && (
            <Button
              onClick={() => resolveConfirmDialog(true)}
              color="primary"
              variant="contained"
              size="large"
              fullWidth
            >
              {continueLabel ?? 'Continuar'}
            </Button>
          )}
        </Stack>
      </DialogActions>
    </Dialog>
  );
}

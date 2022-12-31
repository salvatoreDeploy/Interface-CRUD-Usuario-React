import { Close } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogProps,
  IconButton,
} from "@mui/material";
import { EditUserForm } from "./EditUserForm";
import ModalEditUser from "./ModalEditUser";
import ModalNewUser from "./ModalNewUser";
import { NewUserForm } from "./NewUserForm";

type CloseReason = "backdropClick" | "escapeKeyDown" | "closeButtonClick";

interface Props extends DialogProps {
  onClose: (reason: CloseReason) => void;
}

export function Popup({ title, open, onClose, children, ...props }: Props) {
  return (
    <Dialog
      sx={{ m: 0, p: 2 }}
      open={open}
      onClose={(_, reason) => onClose(reason)}
    >
      <DialogTitle
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        {title}
        <IconButton
          aria-label="close"
          onClick={() => onClose("closeButtonClick")}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {title === "Editar Usuario" ? <ModalEditUser /> : <ModalNewUser />}
        {children}
      </DialogContent>
    </Dialog>
  );
}

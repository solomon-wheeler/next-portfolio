import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../../ui/dialog';
import { PopupDialogProp } from './popupDialog.props';

export default function PopupDialog({
  dialogOpen,
  setDialogOpen,
  dialogDescription,
  dialogTitle,
}: Readonly<PopupDialogProp>) {
  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

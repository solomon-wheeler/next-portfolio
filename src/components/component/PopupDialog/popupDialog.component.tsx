import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../../ui/dialog';

type DialogDemoProps = {
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
  dialogDescription: string;
  dialogTitle: string;
};

export default function PopupDialog({
  dialogOpen,
  setDialogOpen,
  dialogDescription,
  dialogTitle,
}: Readonly<DialogDemoProps>) {
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

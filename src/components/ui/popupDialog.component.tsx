import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./dialog";

type DialogDemoProps = {
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
  dialogDescription: string;
  dialogTitle: string;
};

export function PopupDialog({
  dialogOpen,
  setDialogOpen,
  dialogDescription,
  dialogTitle,
}: DialogDemoProps) {
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

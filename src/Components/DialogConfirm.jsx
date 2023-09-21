import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

const DialogConfirm = ({ stateDialog, setStateDialog }) => {
  const handleClose = () => {
    setStateDialog({
      open: false,
      title: "",
      question: "",
      choiceYes: "",
      choiceNo: "",
      actionOk: null,
    });
  };

  return (
    <Dialog
      open={stateDialog.open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{stateDialog.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {stateDialog.question}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            stateDialog.actionOk();
            handleClose();
          }}
          variant="outlined"
          color="success"
        >
          {stateDialog.choiceYes}
        </Button>
        <Button onClick={handleClose} variant="contained" color="error">
          {stateDialog.choiceNo}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogConfirm;

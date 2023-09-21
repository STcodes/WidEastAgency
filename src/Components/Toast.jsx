import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Toast = ({ stateStack, setStateStack }) => {
  //   const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setStateStack((prev) => {
      return {
        ...prev,
        open: false,
      };
    });
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <Snackbar
      open={stateStack.open}
      autoHideDuration={stateStack.duration}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      key="bottomcenter"
    >
      <Alert
        onClose={handleClose}
        severity={stateStack.severity}
        sx={{ width: "100%" }}
      >
        {stateStack.message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;

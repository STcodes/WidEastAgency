import React from "react";
import { useNavigate } from "react-router-dom";
import DialogConfirm from "./DialogConfirm";
import "../style/Navbar.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import LogoutIcon from "@mui/icons-material/Logout";
import UserIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const Navbar = ({ user, logOut }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [stateDialog, setStateDialog] = React.useState({
    open: false,
    title: "",
    question: "",
    choiceYes: "",
    choiceNo: "",
    actionOk: null,
  });
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section class="nav-section">
      <div onClick={handleClick}>
        <div>
          <img src={user.imageUrl} alt="profil" />
        </div>
        <h1>{user.message}</h1>
      </div>
      <Menu
        anchorEl={isOpen}
        id="account-menu"
        open={isOpen}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            background: "#11101d",
            color: "white",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 7,
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 79,
              width: 12,
              height: 12,
              bgcolor: "#11101d",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <MenuItem
          onClick={() => {
            navigate("./profil");
          }}
          sx={{
            fontFamily: "Poppins",
            transition: "0.3s ease",
            ":hover": { color: "red" },
          }}
        >
          <UserIcon sx={{ color: "red", mr: 1, ml: -0.5 }} />
          Mon profil
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("./profil/edit");
          }}
          sx={{
            fontFamily: "Poppins",
            transition: "0.3s ease",
            ":hover": { color: "red" },
          }}
        >
          <ManageAccountsIcon sx={{ color: "red", mr: 1, ml: -0.5 }} />
          Modifier
        </MenuItem>
        <Divider
          sx={{
            background: "white",
          }}
        />
        <MenuItem
          onClick={() => {
            setStateDialog({
              open: true,
              title: "Déconnexion",
              question: "Etes-vous sûr de vouloir vous déconnecter ?",
              choiceYes: "Oui",
              choiceNo: "Non",
              actionOk: () => {
                logOut();
              },
            });
          }}
          sx={{
            fontFamily: "Poppins",
            transition: "0.3s ease",
            ":hover": { color: "red" },
          }}
        >
          <LogoutIcon
            fontSize="small"
            sx={{ color: "red", mr: 1.3, ml: -0.5 }}
          />
          Déconnexion
        </MenuItem>
      </Menu>
      <DialogConfirm
        stateDialog={stateDialog}
        setStateDialog={setStateDialog}
      />
    </section>
  );
};

export default Navbar;

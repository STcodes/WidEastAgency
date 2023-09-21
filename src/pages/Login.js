import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import UserProfil from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/VerifiedUserRounded";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import Toast from "../Components/Toast";
import "../style/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [stateStack, setStateStack] = React.useState({
    severity: "",
    message: "",
    duration: 0,
    open: false,
  });
  const [dataInput, setDataInput] = React.useState({
    userName: "",
    password: "",
  });
  const [dataInputEmpty, setDataInputEmpty] = React.useState({
    userName: false,
    password: false,
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const checkDataInput = () => {
    for (const [cle, valeur] of Object.entries(dataInput)) {
      if (valeur === "") {
        setDataInputEmpty((prev) => {
          return {
            ...prev,
            [cle]: true,
          };
        });
        setStateStack({
          severity: "error",
          message: "Veuillez entrer tous les champs",
          duration: 3500,
          open: true,
        });
        return false;
      } else {
        setDataInputEmpty((prev) => {
          return {
            ...prev,
            [cle]: false,
          };
        });
      }
    }
    return true;
  };
  const submitData = () => {
    if (checkDataInput()) {
      // API
      setIsLoading(true);
      axios({
        method: "POST",
        url: "https://wideastagency.camencorp.com//API/AUTH/st_login.php",
        responseType: "json",
        headers: { "Access-Control-Allow-Origin": "*" },
        data: dataInput,
      })
        .then((response) => {
          if (response.data.status === "ERROR") {
            setStateStack({
              severity: "error",
              message: response.data.message,
              duration: 3500,
              open: true,
            });
          } else if (response.data.status === "OK") {
            setStateStack({
              severity: "success",
              message: response.data.message,
              duration: 3500,
              open: true,
            });
            setUser(response.data.data);
            setTimeout(() => {
              navigate("/admin");
            }, 1500);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          setStateStack({
            severity: "error",
            message: "Erreur lors de la connexion. Veuillez reessayer",
            duration: 3500,
            open: true,
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className="container_login_back">
      <div className="container_login">
        <img src="./images/logo.png" alt="logo" />
        <h2>
          <span style={{ fontSize: "1.2em", color: "red" }}>C</span>
          onnectez-vous
        </h2>
        <br />
        <div className="container1_login">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <InputAdornment position="start">
              <UserProfil
                sx={{ color: "red", my: 0.5, mt: 2.5 }}
                fontSize="medium"
              />
            </InputAdornment>
            <TextField
              required
              name="userName"
              onChange={(event) => {
                setDataInput((prev) => {
                  return {
                    ...prev,
                    userName: event.target.value,
                  };
                });
              }}
              label="Nom d'utilisateur"
              type="text"
              variant="standard"
              size="small"
              error={dataInputEmpty.userName}
              fullWidth={true}
            />
          </Box>
          <br />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <InputAdornment position="start">
              <PasswordIcon
                sx={{ color: "red", my: 0.5, mt: 2.5 }}
                fontSize="medium"
              />
            </InputAdornment>

            <TextField
              required
              name="userName"
              onChange={(event) => {
                setDataInput((prev) => {
                  return {
                    ...prev,
                    password: event.target.value,
                  };
                });
              }}
              label="Mot de passe"
              type={showPassword ? "text" : "password"}
              variant="standard"
              size="small"
              fullWidth={true}
              error={dataInputEmpty.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {!showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <br />
          <br />
          <LoadingButton
            color="error"
            variant="contained"
            sx={{ width: "100%", background: "black" }}
            onClick={() => {
              submitData();
            }}
            loading={isLoading}
            disabled={isLoading}
          >
            Se connecter
          </LoadingButton>
          <Toast stateStack={stateStack} setStateStack={setStateStack} />
        </div>
      </div>
    </div>
  );
};

export default Login;

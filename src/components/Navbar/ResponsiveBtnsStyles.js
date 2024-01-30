import styled from "@emotion/styled";
import { Button, IconButton } from "@mui/material";
import AbButton from "../AbButton/AbButton";

export const ButtonWrapper = styled.section`
  .res-btn {
    padding-inline: 30px;
    background-color: #618264;
    color: #fff;
    border-radius: 0.7rem;
    margin-right: 0.5rem;
    font-size: 0.8rem;
    font-family: "Nunito";
  }

  .res-btn:hover {
    background-color: #618264;
    color: #fff;
  }

  @media (max-width: 600px) {
    .res-btn {
      width: 30px;
      height: 25px;
      font-size: 0.5rem;
      border-radius: 0.6rem;
      margin-right: 0.5rem;
      position: relative;
      left: 1.3rem;
    }
  }

  @media (max-width: 600px) {
    .icon-btn {
      width: 25px;
      height: 25px;
      font-size: 0.5rem;
      border-radius: 0.8rem;
      left: 1.3rem;
    }

    .notification {
      font-size: 1rem;
    }
  }

  .login {
    @media (max-width: 600px) {
      width: 20px;
      height: 25px;
      font-size: 0.5rem;
      border-radius: 0.8rem;
    }
  }
  .signup {
    @media (max-width: 600px) {
      width: 20px;
      height: 25px;
      font-size: 0.5rem;
      border-radius: 0.8rem;
      margin-right: 10px;
    }
  }
`;

export const IconButtonStyles = styled(IconButton)(({ theme }) => ({
  background: "#618264",
  p: -2,
  color: "#fff",
  marginRight: "10px",
  ":hover": { backgroundColor: "#618264" },
}));

export const LoginButtonStyles = styled(AbButton)(({ authActive }) => ({
    color: authActive === 0 ? "#FFFFFF" : "#618264",
    backgroundColor: authActive === 0 ? "#618264" : "#D0E7D2",
    borderRadius: "0.7rem",
    height: "2.5rem",
    textTransform: "none",
    fontSize: "16px",
    padding: "0px 1rem",
    position: "relative",
    left: "30px",
    zIndex: authActive ? "" : 9,
}));

export const SignupButtonStyles = styled(AbButton)(({ authActive }) => ({
    color: authActive === 1 ? "#FFFFFF" : "#618264",
    backgroundColor: authActive === 1 ? "#618264" : "#D0E7D2",
    borderRadius: "0.7rem",
    height: "2.5rem",
    textTransform: "none",
    fontSize: "16px",
    marginLeft: "1.1rem",
}));


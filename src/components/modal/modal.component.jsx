import { useState } from "react";
import {
  auth,
  signInWithGoogle,
  createUserProfileDocument,
} from "../../utils/firebase.utils";
import { useDispatch } from "react-redux";
import { login } from "../../store/store";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Grid } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "inherit",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  const logGoogleUser = async () => {
    const { user } = await signInWithGoogle();
    if (user) {
      const userDocRef = await createUserProfileDocument(user);
      const userData = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      };
      dispatch(login(userData));
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} style={{ color: "#fff" }}>
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Sign up with your email and password
            </Typography>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <Grid item xs={6}>
                <label htmlFor="username">Username</label>
                <input required type="text" placeholder="Username" />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="email">Email</label>
                <input required type="text" placeholder="Email" />
              </Grid>
              <Grid xs={6}>
                <label htmlFor="password">Password</label>
                <input required type="text" placeholder="Password" />
              </Grid>
              <Grid item xs={6}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input required type="text" placeholder="Confirm Password" />
              </Grid>
            </form>
          </Grid>
          <button>Sign up</button>
          <FacebookIcon />
          <GoogleIcon onClick={logGoogleUser} />
        </Box>
      </Modal>
    </div>
  );
};
export default BasicModal;

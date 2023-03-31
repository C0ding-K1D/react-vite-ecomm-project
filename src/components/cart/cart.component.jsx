import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Cart = () => {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={0} color="warning" showZero>
        <ShoppingCartIcon style={{ fill: "#eee" }} />
      </StyledBadge>
    </IconButton>
  );
};

export default Cart;

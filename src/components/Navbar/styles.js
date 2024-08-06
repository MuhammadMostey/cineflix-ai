
import { useTheme } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
// export const NavbarStyles = () => {
//   const theme = useTheme();
//   return {
//     toolbar: {
//       height: "80px",
//       display: "flex",
//       justifyContent: "space-between",
//       marginLeft: "240px",
//       [theme.breakpoints.down("sm")]: {
//         marginLeft: "0",
//         flexWrap: "wrap",
//       },
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//       [theme.breakpoints.up("sm")]: {
//         display: "none",
//       },
//     },
//     linkButton: {},
//   };
// };

const theme = useTheme();

export const NavbarStyles = createTheme({
  toolbar: {
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "240px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0",
      flexWrap: "wrap",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  linkButton: {},
});
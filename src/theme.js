import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "poppins-semibold,poppins,sans-serif",
    color: "#303842",
    h2: {
      fontWeight: 600,
      fontSize: 40
    },
    h4: {
        fontSize: 16,
    }
  },
});

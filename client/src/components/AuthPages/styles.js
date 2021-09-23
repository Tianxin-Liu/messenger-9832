import { makeStyles } from '@material-ui/core/styles';

import { theme } from "../../themes/theme";

export const useAuthStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        height: "100vh",
      },
      side: {
        height: '100%',
        width: '100%',
      },
      mainContent: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: "0px",
      },
      headerContent: {
        position: "absolute",
        top: 0,
      },
      formWrapper: {
        justifyContent: "center",
        display: "flex",
        width: "60%",
      },
      formHeader: {
        fontWeight: theme.typography.button.fontWeight,
        marginBottom: theme.spacing(5),
        textAlign: "left",
        width: "100%",
      },
      submitButton: {
        width: "180px",
        height: "60px",
        borderRadius: "3px",
        fontWeight: theme.typography.button.fontWeight,
      },
      inputForm: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      },
      input: {
        marginBottom: theme.spacing(4),
        width: "100%",
        paddingTop: "15px",
        fontWeight: "bold",
        fontSize: theme.typography.fontSizeSmall,
      },
}));
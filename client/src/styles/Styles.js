import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // Dashboard
  dashboardActionsContainer: {
    [theme.breakpoints.up("xs")]: {
      margin: "10% 0",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
    [theme.breakpoints.up("sm")]: {
      margin: "0",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  dashboardActionsButtons: {
    [theme.breakpoints.up("lg")]: {
      height: "200px",
      width: "200px",
    },
    [theme.breakpoints.down("md")]: {
      height: "75px",
      width: "150px",
      fontSize: "0.75rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "50px",
      width: "100px",
      fontSize: "0.6rem",
    },
  },
  dashboardHeaderContainer: {
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
      marginRight: "0",
      textAlign: "center",
    },
  },

  // Edit Mode - Generic
  editModePaperContainers: {
    height: "100%",
  },

  editModeContainers: {
    [theme.breakpoints.up("xs")]: {
      margin: "2% 3%",
    },
    [theme.breakpoints.up("md")]: {
      margin: "2% 5% 0% 5%",
    },
  },

  editModeHeadersContainers: {
    [theme.breakpoints.up("xs")]: {
      "& h4": {
        fontSize: "1.75rem",
      },
      textAlign: "center",
      margin: "3% 0%",
    },
    [theme.breakpoints.up("md")]: {
      "& h4": {
        fontSize: "2.125rem",
      },
      textAlign: "left",
      margin: "0% 0% 1% 1%",
    },
  },

  editModeTextInputContainers: {
    [theme.breakpoints.up("xs")]: {
      padding: "1% 0%",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2% 0% 2% 0%",
    },
  },

  editModeDateInputContainers: {
    [theme.breakpoints.up("xs")]: {
      padding: "2% 0%",
    },
    [theme.breakpoints.up("md")]: {
      padding: "3% 0% 3% 0%",
    },
  },

  // Edit Mode - Experience Table
  editModeExperienceTableItemCompanyIcon: {
    [theme.breakpoints.up("xs")]: {
      width: "50px",
      height: "50px",
    },
    [theme.breakpoints.up("md")]: {
      width: "75px",
      height: "75px",
    },
  },

  editModeExperienceTableHeaderCell: {
    whiteSpace: "nowrap",
    textTransform: "uppercase",
  },

  editModeExperienceTableItemCell: {
    whiteSpace: "normal",
    wordBreak: "break-word",
    overflowWrap: "break-word",
  },
}));

export default useStyles;

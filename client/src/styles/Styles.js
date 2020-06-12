import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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

  // Experience Table
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

  // rootDiv: {
  //   flexGrow: 1,
  // },
  // root: {
  //   background: "#222222", //"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  //   //border: 0,
  //   //borderRadius: 3,
  //   //boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  //   //color: "white",
  //   //height: 48,
  //   //padding: "0 30px",
  // },
  // editLabel: {
  //   padding: "5% 5% 5% 15%",
  //   textTransform: "uppercase",
  //   //textShadow: "1px 1px 1px #B9B9B9",
  //   color: "#B9B9B9",
  // },
  // editContainer: {
  //   padding: "0 5% 0 15%",
  // },
  // textFieldBox: {
  //   padding: "0 0 5% 0",
  // },
  // bodyTextField: {
  //   color: "#B9B9B9",
  // },
}));

export default useStyles;

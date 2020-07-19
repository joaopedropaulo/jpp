import { makeStyles } from "@material-ui/core";
import Image from "../img/test.jpg"; // Import using relative path

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

  // Edit Mode - Education Table
  editModeEducationTableItemCell: {
    whiteSpace: "normal",
    wordBreak: "break-word",
    overflowWrap: "break-word",
  },

  editModeEducationTableHeaderCell: {
    whiteSpace: "nowrap",
    textTransform: "uppercase",
  },

  // Edit Mode - Generic Sections
  editModeGenericSectionsTableItemCell: {
    whiteSpace: "normal",
    wordBreak: "break-word",
    overflowWrap: "break-word",
  },

  editModeGenericSectionsTableHeaderCell: {
    whiteSpace: "nowrap",
    textTransform: "uppercase",
  },

  editModeGenericSectionsTableItemMediaContainer: {
    [theme.breakpoints.up("xs")]: {
      width: "75px",
    },
    [theme.breakpoints.up("md")]: {
      width: "400px",
      padding: "4px 4px",
    },
  },

  editModeGenericSectionsTableItemMediaCardActionsContainer: {
    justifyContent: "center",
  },

  editModeGenericSectionsTableItemMediaCard: {
    height: "100px",
    maxWidth: "400px",
    display: "flex",
    margin: "6px 0px",
  },

  editModeGenericSectionsTableItemMediaCardContent: {
    maxWidth: "300px",
    width: "100%",
    "& p": {
      fontSize: "0.8rem",
    },
  },

  editModeGenericSectionsTableItemMediaCardMedia: {
    height: "100px",
    width: "100px",
    display: "inline",
  },

  editModeGenericSectionsAddMediaItemFormContainer: {
    borderStyle: "dashed",
    borderWidth: "2px",
    borderColor: "#5DB7DE",
    borderRadius: "5px",

    [theme.breakpoints.up("xs")]: {
      padding: "1% 2%",
    },
    [theme.breakpoints.up("md")]: {
      padding: "3% 3%",
    },
  },

  editModeGenericSectionsAddMediaItemFormGridItem: {
    width: "100%",
  },

  editModeGenericSectionsAddMediaItemFormAddButton: {
    alignSelf: "center",
    textAlign: "center",
  },

  editModeGenericSectionsMediaListContainer: {
    borderStyle: "dashed",
    borderRadius: "5px",
    borderWidth: "2px",
    margin: "2% 0 0 0",
    padding: "1% 1%",
  },

  editModeGenericSectionsMediaListItemRemoveButton: {
    alignSelf: "center",
    textAlign: "center",
  },

  // Main page - Sections
  landingTopDiv: {
    height: "100vh",
    backgroundImage: `url(${Image})`,
  },
  sectionContainer: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
  sectionHeaderDiv: {
    margin: "5% 0%",
  },
  sectionHeaderTypography: {
    fontWeight: "700",
  },
  sectionSubHeaderDiv: {
    margin: "5% 0% 2% 0%",
  },
  sectionSubHeaderTypography: {
    fontWeight: "700",
  },
  sectionBodyDiv: {
    alignSelf: "center",
  },
  sectionImageDiv: {
    alignSelf: "center",
    textAlign: "center",
  },

  // Main page - buttons and actions
  backToTopButtonBox: {
    position: "fixed",
    right: "50%",
    bottom: "30px",
    zIndex: "118",
  },
  backToTopButton: {
    backgroundColor: "transparent",
  },
  backToTopButtonIcon: {
    color: "white",
  },

  // Main page - Education
  educationItemBox: {
    padding: "1% 3%",
  },
  educationItemDegree: {
    fontWeight: "600",
    color: theme.palette.secondary.dark,
    //color: theme.palette.primary.main,
  },
  educationItemSchoolDates: {
    fontStyle: "italic",
    color: theme.palette.primary.light,
  },
  educationItemDescription: {},

  // Main page - Experience
  experienceItemBox: {
    padding: "1% 3%",
  },
  experienceItemCompanyIcon: {
    borderRadius: "5px",
    [theme.breakpoints.up("xs")]: {
      width: "50px",
      height: "50px",
    },
    [theme.breakpoints.up("md")]: {
      width: "75px",
      height: "75px",
    },
  },
  experienceItemJobTitleCompanyLocation: {
    fontWeight: "600",
    //color: theme.palette.primary.main,
    color: theme.palette.secondary.dark,
  },
  experienceItemDates: {
    fontStyle: "italic",
    //textTransform: ""
    color: theme.palette.primary.light,
  },
  experienceItemDescription: {},

  // Main page - Skills
  skillsItemBox: {
    padding: "1% 3%",
  },
  skillsGridContainer: {
    textAlign: "center",
    alignItems: "center",
  },
  skillsGridItemSkillName: {
    textAlign: "end",
  },
  skillsGridItemExperienceLevel: {
    textAlign: "start",
  },
  skillsItemName: {
    padding: "0 5%",
    margin: "0 5%",
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.background.default,
    //borderColor: theme.palette.primary.dark,
    borderWidth: "1px",
    fontWeight: "600",
  },
  skillsItemExperienceLevel: {
    margin: "0 1%",
  },

  // Main page - Contact Section
  contactSectionBox: {
    textAlign: "center",
    paddingTop: "1%",
  },

  contactIconButton: {
    color: theme.palette.primary.main,
  },

  contactIconButtonIcon: {
    fontSize: "3rem",
  },
}));

export default useStyles;

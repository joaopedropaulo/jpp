import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const CustomLevelDisplayBar = withStyles((theme) => ({
  root: {
    height: 20,
    borderRadius: 5,
  },
  colorSecondary: {
    backgroundColor: theme.palette.secondary.dark,
  },
  colorPrimary: {
    backgroundColor: theme.palette.primary.main,
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.dark,
  },
}))(LinearProgress);

export default CustomLevelDisplayBar;

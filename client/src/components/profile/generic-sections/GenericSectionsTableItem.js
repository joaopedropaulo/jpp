import React, { useState } from "react";
import {
  Button,
  TableRow,
  TableCell,
  Box,
  CardActions,
  Collapse,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MediaItem from "./media/MediaItem";
//import useStyles from "../../../styles/Styles";
import { makeStyles } from "@material-ui/core";
import styles from "../../../styles/Styles";
const useStyles = makeStyles((theme) => styles(theme));

const GenericSectionsTableItem = (props) => {
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <TableRow>
      <TableCell className={classes.editModeGenericSectionsTableItemCell}>
        {props.value.title}
      </TableCell>
      <TableCell className={classes.editModeGenericSectionsTableItemCell}>
        {props.value.subtitle}
      </TableCell>
      <TableCell className={classes.editModeGenericSectionsTableItemCell}>
        {props.value.body}
      </TableCell>
      <TableCell className={classes.editModeGenericSectionsTableItemCell}>
        <Box className={classes.editModeGenericSectionsTableItemMediaContainer}>
          <CardActions
            disableSpacing
            className={
              classes.editModeGenericSectionsTableItemMediaCardActionsContainer
            }
          >
            <Button
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              color="secondary"
            >
              Show Media
              <ExpandMoreIcon />
            </Button>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {props.value.media.map((mediaItem, index) => {
              return (
                <MediaItem
                  key={`${index}-${mediaItem}`}
                  index={index}
                  value={mediaItem}
                />
              );
            })}
          </Collapse>
        </Box>
      </TableCell>
      <TableCell>
        <Button
          variant="outlined"
          color="secondary"
          href="#"
          onClick={(e) => props.onRemoveGenericSection(props.index)}
        >
          X
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default GenericSectionsTableItem;

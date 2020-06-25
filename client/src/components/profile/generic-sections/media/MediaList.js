import React, { Fragment } from "react";
import { Box, List } from "@material-ui/core";
import MediaListItem from "./MediaListItem";
import useStyles from "../../../../styles/Styles";
const MediaList = (props) => {
  const classes = useStyles();
  return (
    <Box
      className={`${
        props.mediaList.length > 0
          ? classes.editModeGenericSectionsMediaListContainer
          : "none"
      } `}
    >
      {props.mediaList.length > 0 ? (
        <List dense={false}>
          {props.mediaList.map((mediaObjValue, index) => {
            return (
              <MediaListItem
                key={`${index}-${mediaObjValue}`}
                index={index}
                value={mediaObjValue}
                onRemoveMedia={props.onRemoveMediaItem}
              />
            );
          })}
        </List>
      ) : (
        <Fragment></Fragment>
      )}
    </Box>
  );
};

export default MediaList;

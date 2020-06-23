import React, { Fragment } from "react";
import { Typography, List } from "@material-ui/core";
import MediaListItem from "./MediaListItem";
import useStyles from "../../../../styles/Styles";
const MediaList = (props) => {
  return (
    <div>
      {/* <Typography variant="subtitle1">Media</Typography> */}
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
    </div>
  );
};

export default MediaList;

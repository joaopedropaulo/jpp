import React, { Fragment } from 'react';
import { List } from '@material-ui/core';
import InterestListItem from './InterestListItem';

const InterestList = (props) => {
  return (
    <div>
      {props.interestList.length > 0 ? (
        <List dense={false}>
          {props.interestList.map((interestValue, index) => {
            return (
              <InterestListItem
                key={`${index}-${interestValue}`}
                index={index}
                label={props.label}
                value={interestValue}
                onRemoveInterest={props.onRemoveInterest}
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

export default InterestList;

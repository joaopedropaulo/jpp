import React, { Fragment } from 'react';
import { Typography, List } from '@material-ui/core';
import LanguageListItem from './LanguageListItem';

class LanguageList extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="subtitle1">Languages</Typography>
        {this.props.languageList.length > 0 ? (
          <List dense={false}>
            {this.props.languageList.map((languageObjValue, index) => {
              return (
                <LanguageListItem
                  key={`${index}-${languageObjValue}`}
                  index={index}
                  value={languageObjValue}
                  onRemoveLanguage={this.props.onRemoveLanguage}
                />
              );
            })}
          </List>
        ) : (
          <Fragment></Fragment>
        )}
      </div>
    );
  }
}

export default LanguageList;

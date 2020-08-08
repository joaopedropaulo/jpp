import React, { Fragment } from "react";
import { Typography, List } from "@material-ui/core";
import SkillListItem from "./SkillListItem";

class SkillList extends React.Component {
  render() {
    return (
      <div>
        <Typography variant="subtitle1">Skills</Typography>
        {this.props.skillList.length > 0 ? (
          <List dense={false}>
            {this.props.skillList.map((skillObjValue, index) => {
              return (
                <SkillListItem
                  key={`${index}-${skillObjValue}`}
                  index={index}
                  value={skillObjValue}
                  onRemoveSkill={this.props.onRemoveSkill}
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

export default SkillList;

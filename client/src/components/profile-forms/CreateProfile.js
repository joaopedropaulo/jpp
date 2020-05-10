import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import connect from "react-redux";
import { Typography, TextField, Button, Link } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { IsoOutlined } from "@material-ui/icons";

import AddSkillForm from "./skills/AddSkillForm";
import SkillList from "./skills/SkillList";
import SkillListItem from "./skills/SkillListItem";

const CreateProfile = (props) => {
  // States
  const [formData, setFormData] = useState({
    currentCompany: "",
    location: "",
    currentJobTitle: "",
    skills: [],
    bio: "",
    youtube: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    github: "",
    facebook: "",
  });

  const [numSkills, setSkillCount] = useState(0);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  //const [skillsArray, setSkillsDisplayArray] = useState([]);

  // Need to see how to add multiple skills and experience levels
  const {
    currentCompany,
    location,
    currentJobTitle,
    skills,
    bio,
    youtube,
    instagram,
    linkedin,
    twitter,
    github,
    facebook,
  } = formData;

  // Update set of text fields related to skills to display
  //for (var i = 0; i < numSkills; i++) {
  //  skillsArray.push(
  //    <div key={i}>
  //      <Fragment key={i}>
  //        <TextField
  //          onChange={(e) => handleSkillsChange(e)}
  //          key={"skill" + i}
  //          id={"name-" + i}
  //          label="Skill"
  //          //value={currentSkillValue}
  //          required
  //        />
  //        <TextField
  //          onChange={(e) => handleSkillsChange(e)}
  //          key={"experienceLevel" + i}
  //          id={"experienceLevel-" + i}
  //          //value={currentSkillValue}
  //          label="Experience Level"
  //        />
  //      </Fragment>
  //      <Button
  //        key={"rmSkill" + i}
  //        id={"rmSkill-" + i}
  //        variant="outlined"
  //        color="secondary"
  //        href="#"
  //        onClick={(e) => handleSkillRemoval(e)}
  //      >
  //        Remove Skill
  //      </Button>
  //    </div>
  //  );
  //}

  const [skillsArray, setSkillsArray] = useState([]);

  const onRemoveSkill = (index) => {
    console.log("onRemoveSkill", index);
    // Copy state
    let list = [...skillsArray];

    // Remove the item at the specified index
    list.splice(index, 1);

    // Set the new State
    setSkillsArray(list);
  };

  const onAddSkill = (name, experienceLevel) => {
    console.log("onAddSkill");

    let obj = {
      name: name,
      experienceLevel: experienceLevel,
    };

    // Create a new array using the past entered values and the new value
    let list = [...skillsArray, obj];

    // Set the infoList property on state
    setSkillsArray(list);
  };

  //const handleAddSkill = (e) => {
  //  setSkillCount(numSkills + 1);
  //  let arr = skillsArray;
  //  arr.push(
  //    <div key={numSkills}>
  //      <Fragment key={numSkills}>
  //        <TextField
  //          onChange={(e) => handleChangeSkill(e)}
  //          key={"skill" + numSkills}
  //          id={"name-" + numSkills}
  //          label="Skill"
  //          //value={currentSkillValue}
  //          required
  //        />
  //        <TextField
  //          onChange={(e) => handleChangeSkill(e)}
  //          key={"experienceLevel" + numSkills}
  //          id={"experienceLevel-" + numSkills}
  //          //value={currentSkillValue}
  //          label="Experience Level"
  //        />
  //      </Fragment>
  //      <Button
  //        key={"rmSkill" + numSkills}
  //        id={"rmSkill-" + numSkills}
  //        variant="outlined"
  //        color="secondary"
  //        href="#"
  //        onClick={(e) => handleRemoveSkill(e)}
  //      >
  //        Remove Skill
  //      </Button>
  //    </div>
  //  );
  //  setSkillsDisplayArray(arr);
  //  printArr(skillsArray);
  //};
  //
  const handleValueChange = (e) =>
    setFormData({ ...formData, [e.target.id]: e.target.value });

  //const handleChangeSkill = (e) => {
  //  let splitStr = e.target.id.split("-");
  //  let itemKey = splitStr[0];
  //  let index = splitStr[1];
  //
  //  if (skills.length <= index) {
  //    var obj = {
  //      name: itemKey === "name" ? e.target.value : "",
  //      experienceLevel: itemKey === "experienceLevel" ? e.target.value : "",
  //    };
  //    skills.push(obj);
  //  } else {
  //    var existingObj = skills[index];
  //    existingObj[itemKey] = e.target.value;
  //    skills[index] = existingObj;
  //  }
  //};
  //
  //const handleRemoveSkill = (e) => {
  //  let splitStr = e.currentTarget.id.split("-");
  //  let itemKey = splitStr[0];
  //  let index = splitStr[1];
  //
  //  //console.log("itemKey: " + itemKey);
  //  //console.log("index: " + index);
  //
  //  var array = [...skills];
  //  var displayArray = [...skillsArray];
  //  if (index !== -1) {
  //    array.splice(index, 1);
  //    setFormData({ ...formData, ["skills"]: array });
  //
  //    displayArray.splice(index, 1);
  //
  //    printArr(displayArray);
  //
  //    //setSkillsDisplayArray(displayArray);
  //    //setSkillCount(numSkills - 1);
  //    //setSkillCount(numSkills - 1);
  //  }
  //};
  //
  //const printArr = (arr) => {
  //  arr.forEach((element) => {
  //    console.log(element);
  //  });
  //};

  return (
    <Fragment>
      <Typography variant="h3">Create Profile</Typography>
      <form>
        <div>
          <Typography variant="h6">Current Company</Typography>
          <TextField
            id="currentCompany"
            label="Company"
            value={currentCompany}
            onChange={(e) => handleValueChange(e)}
          />
        </div>
        <div>
          <Typography variant="h6">Current Job Title</Typography>
          <TextField
            id="currentJobTitle"
            label="Job title"
            value={currentJobTitle}
            onChange={(e) => handleValueChange(e)}
          />
        </div>
        <div>
          <Typography variant="h6">Current Location</Typography>
          <TextField
            id="location"
            label="Location"
            value={location}
            onChange={(e) => handleValueChange(e)}
          />
        </div>
        <div>
          <Typography variant="h6">Skills & Experience Levels</Typography>
          <AddSkillForm onAddSkill={onAddSkill} />
          <SkillList skillList={skillsArray} onRemoveSkill={onRemoveSkill} />
        </div>
        {/* <div>
          <Typography variant="h6">Skills & Experience Levels</Typography>
          <Button
            variant="outlined"
            color="primary"
            href="#"
            onClick={(e) => handleAddSkill(e)} //setSkillCount(numSkills + 1)}
          >
            Add Skill
          </Button>
          <div>{skillsArray}</div>
        </div>
        <div> */}
        <div>
          <Typography variant="h6">Biography</Typography>
          <TextField
            id="bio"
            label="A short bio"
            multiline
            rows={5}
            variant="outlined"
            value={bio}
            onChange={(e) => handleValueChange(e)}
          />
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
          >
            Social Network Links
          </Button>
        </div>
        {displaySocialInputs ? (
          <Fragment>
            <div>
              <TwitterIcon />
              <TextField
                label="Twitter URL"
                name="twitter"
                id="twitter"
                value={twitter}
                onChange={(e) => handleValueChange(e)}
              />
            </div>

            <div>
              <FacebookIcon />
              <TextField
                label="Facebook URL"
                name="facebook"
                id="facebook"
                value={facebook}
                onChange={(e) => handleValueChange(e)}
              />
            </div>

            <div>
              <YouTubeIcon />
              <TextField
                label="YouTube URL"
                name="youtube"
                id="youtube"
                value={youtube}
                onChange={(e) => handleValueChange(e)}
              />
            </div>

            <div>
              <LinkedInIcon />
              <TextField
                label="Linkedin URL"
                name="linkedin"
                id="linkedin"
                value={linkedin}
                onChange={(e) => handleValueChange(e)}
              />
            </div>

            <div>
              <InstagramIcon />
              <TextField
                label="Instagram URL"
                name="instagram"
                id="instagram"
                value={instagram}
                onChange={(e) => handleValueChange(e)}
              />
            </div>
            <div>
              <GitHubIcon />
              <TextField
                label="GitHub URL"
                name="github"
                id="github"
                value={github}
                onChange={(e) => handleValueChange(e)}
              />
            </div>
          </Fragment>
        ) : (
          <Fragment></Fragment>
        )}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Typography>
          <Link href="/dashboard">Back</Link>
        </Typography>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;

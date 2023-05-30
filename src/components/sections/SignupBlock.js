import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Select, MenuItem } from '@mui/material';


import {registerWithEmailAndPassword} from '../../request'

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const SportFrequence = {
  ONCE_A_WEEK: "ONCE_A_WEEK",
  NEVER: "NEVER",
  LESS_THAN_ONCE_A_MONTH: "LESS_THAN_ONCE_A_MONTH",
  ONCE_A_MONTH: "ONCE_A_MONTH",
  ONCE_IN_TWO_WEEKS: "ONCE_IN_TWO_WEEKS",
  ONCE_A_WEEK: "ONCE_A_WEEK",
  TWICE_A_WEEK: "TWICE_A_WEEK",
  THREE_A_WEEK: "THREE_A_WEEK",
  FOUR_A_WEEK: "FOUR_A_WEEK",
  FIVE_A_WEEK: "FIVE_A_WEEK",
  MORE_THEN_FIVE_A_WEEK: "MORE_THEN_FIVE_A_WEEK",
}

const Gender = {
  MALE: "MALE",
  FEMALE: "FEMALE",
  PREFER_NOT_TO_SAY: "PREFER_NOT_TO_SAY",
}

const Goal = {
  WEIGHT_GAIN: 'WEIGHT_GAIN',
  WEIGHT_LOSS: 'WEIGHT_LOSS',
  GETTING_BACK_IN_SHAPE: 'GETTING_BACK_IN_SHAPE'
}

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'orange',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'orange',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'orange',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  textfield_input: {
      color: '#c5cae9 !important',
  }
}));

const SignupBlock = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  ...props
}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(180);
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [sportFrequence, setSportFrequence] = useState("");
  const [goal, setGoal] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/");
    }
  }, []);
  const [videoModalActive, setVideomodalactive] = useState(false);

  const register = async () => {
    if (!firstName || !lastName) alert("Please enter name");
    registerWithEmailAndPassword(email, password);
  }

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const classes = useStyles();

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
             Create your <span className="text-color-primary">Account</span>
            </h1>
            <div style={{margin:50}}>
              <div className="mt-16">
              <div style={{margin:20}}>
              <CssTextField 
              inputProps={{className: classes.textfield_input}}
              type="text"
              placeholder="yudia" 
              label="first_name" 
              id="custom-css-outlined-input" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}/>
              </div>

              <div style={{margin:20}}>
              <CssTextField 
              inputProps={{className: classes.textfield_input}}
              type="text"
              placeholder="yudia" 
              label="last_name" 
              id="custom-css-outlined-input" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}/>
              </div>

              <CssTextField
              inputProps={{className: classes.textfield_input}}
              placeholder="yudia@norway.com"
              label="Email"
              id="custom-css-outlined-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div style={{margin:20}}>
              <CssTextField 
              inputProps={{className: classes.textfield_input}}
              type="password"
              placeholder="pierreestnul" 
              label="password" 
              id="custom-css-outlined-input" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
              </div>

              <div style={{margin:20}}>
              <CssTextField 
              inputProps={{className: classes.textfield_input}}
              type="text"
              placeholder="180cm" 
              label="height" 
              id="custom-css-outlined-input" 
              value={height}
              onChange={(e) => setHeight(e.target.value)}/>
              </div>

              <div style={{margin:20}}>
              <CssTextField 
              inputProps={{className: classes.textfield_input}}
              type="text"
              placeholder="80" 
              label="weight" 
              id="custom-css-outlined-input" 
              value={weight}
              onChange={(e) => setWeight(e.target.value)}/>
              </div>

              <div style={{margin:20}}>
              <CssTextField 
              inputProps={{className: classes.textfield_input}}
              type="text"
              placeholder="80" 
              label="description" 
              id="custom-css-outlined-input" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}/>
              </div>
              
              <div style={{margin:20}}>
              <CssTextField 
              inputProps={{className: classes.textfield_input}}
              type="text"
              placeholder="80" 
              label="description" 
              id="custom-css-outlined-input" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}/>
              </div>

              <div style={{margin:20}}>
              <CssTextField 
              inputProps={{className: classes.textfield_input}}
              type="text"
              placeholder="80" 
              label="username" 
              id="custom-css-outlined-input" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}/>
              </div>

              <div style={{margin:20}}>
              <CssTextField 
              inputProps={{className: classes.textfield_input}}
              type="text"
              placeholder="80" 
              label="birthDate" 
              id="custom-css-outlined-input" 
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}/>
              </div>

              <div style={{margin:20}}>
              <Select 
              inputProps={{className: classes.textfield_input}}
              type="text"
              placeholder="gender" 
              label="gender" 
              id="custom-css-outlined-input" 
              sx={{ '.MuiOutlinedInput-notchedOutline': { borderColor: 'white', }, }}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              style={{ width: "36%" }}
              >
              <MenuItem value={"MALE"}>Male</MenuItem>
              <MenuItem value={"FEMALE"}>Female</MenuItem>
              <MenuItem value={"PREFER_NOT_TO_SAY"}>Other</MenuItem>
              </Select>
              </div>

              <div style={{margin:20}}>
              <Select 
              inputProps={{className: classes.textfield_input}}
              type="text"
              placeholder="Goal" 
              label="goal" 
              id="custom-css-outlined-input" 
              sx={{ '.MuiOutlinedInput-notchedOutline': { borderColor: 'white', }, }}
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              style={{ width: "36%" }}
              >
              <MenuItem value={"WEIGHT_GAIN"}>Weight gain</MenuItem>
              <MenuItem value={"WEIGHT_LOSS"}>Weight loss</MenuItem>
              <MenuItem value={"GETTING_BACK_IN_SHAPE"}>Getting back in shape</MenuItem>
              </Select>
              </div>

              <div style={{margin:20}}>
              <Select 
              inputProps={{className: classes.textfield_input}}
              type="text"
              placeholder="sportFrequence" 
              label="sportFrequence" 
              id="custom-css-outlined-input" 
              sx={{ '.MuiOutlinedInput-notchedOutline': { borderColor: 'white', }, }}
              value={sportFrequence}
              onChange={(e) => setSportFrequence(e.target.value)}
              style={{ width: "36%" }}
              >
              <MenuItem value={"NEVER"}>Never</MenuItem>
              <MenuItem value={"ONCE_A_MONTH"}>Once a month</MenuItem>
              <MenuItem value={"TWICE_A_MONTH"}>Twice a month</MenuItem>
              <MenuItem value={"ONCE_IN_TWO_WEEKS"}>Once in twe weeks</MenuItem>
              <MenuItem value={"ONCE_IN_TWO_WEEKS"}>Once in twe weeks</MenuItem>
              <MenuItem value={"ONCE_A_WEEK"}>Once a week</MenuItem>
              <MenuItem value={"TWICE_A_WEEK"}>Twice a week</MenuItem>
              <MenuItem value={"THREE_A_WEEK"}>Three a week</MenuItem>
              <MenuItem value={"FOUR_A_WEEK"}>Four a week</MenuItem>
              <MenuItem value={"FIVE_A_WEEK"}>Five a week</MenuItem>
              <MenuItem value={"MORE_THEN_FIVE_A_WEEK"}>More than five a week</MenuItem>
              </Select>
              </div>

              <div style={{margin:20}}>
              <Button
              tag="a"
              color="mobile"
              wideMobile
              value={password}
              onClick={() => register()}> Create your account</Button>
              </div>

              <div style={{margin:20}} >
                Already have an account? <a href="/login" className="text-color-primary">Log in now.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

SignupBlock.propTypes = propTypes;
SignupBlock.defaultProps = defaultProps;


export default SignupBlock;
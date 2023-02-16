import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles'
import { makeStyles } from "@mui/styles";
import { auth, logInWithEmailAndPassword, registerWithEmailAndPassword, connectWithGoogle } from '../../firebase'
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
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
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");

  const history = useHistory();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      history.push("/");
    }
  }, [user, loading]);
  const [videoModalActive, setVideomodalactive] = useState(false);

  const register = async () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
    try {
      await axios.post('http://localhost:5000' + '/user/mail', {
        email,
        name,
      })
    }
    catch (err)
    {console.log(err);}
    ;
  }

  const registerWithGoogleFunction = async () => {
    connectWithGoogle(auth, email, password);
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
              type="name"
              placeholder="yudia" 
              label="name" 
              id="custom-css-outlined-input" 
              value={name}
              onChange={(e) => setName(e.target.value)}/>
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
              placeholder="Ilovepierre" 
              label="password" 
              id="custom-css-outlined-input" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}/>
              </div>
              
              <div style={{margin:20}}>
              <Button
              tag="a"
              color="mobile"
              wideMobile
              value={password}
              onClick={() => register()}> Create your account</Button>
              </div>

              <div style={{margin:20}}>
              <Button
              tag="a"
              color="mobile"
              wideMobile
              value={password}
              onClick={() => connectWithGoogle()}> Sign up with Google</Button>
              </div>

              <div style={{margin:20}} >
                Already have an account? <span href="/" className="text-color-primary">Log in now.</span>
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
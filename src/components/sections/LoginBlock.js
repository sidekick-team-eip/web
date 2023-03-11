import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles'
import { makeStyles } from "@mui/styles";
import { auth, connectWithGoogle } from '../../firebase'
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory, useNavigate, redirect } from 'react-router-dom';

import {logInWithEmailAndPassword} from '../../request'



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

const LoginBlock = ({
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
  const history = useHistory();
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/");
    }
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
  }, [user, loading]);
  const [videoModalActive, setVideomodalactive] = useState(false);

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

  const handleLoginWithEmail = () => {
    logInWithEmailAndPassword(email, password);
    window.location.reload();
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
             Log <span className="text-color-primary">In</span>
            </h1>
            <div style={{margin:50}}>
              <div className="mt-16">
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
              onClick={handleLoginWithEmail}
                > Connnect !</Button>
              </div>
              <div style={{margin:20}}>
              <Button
              tag="a"
              color="mobile"
              wideMobile
              value={password}
              onClick={() => connectWithGoogle()}> Connect with &nbsp;<span className="text-color-primary"> Google</span></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

LoginBlock.propTypes = propTypes;
LoginBlock.defaultProps = defaultProps;


export default LoginBlock;
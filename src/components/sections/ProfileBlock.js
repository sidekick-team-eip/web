import classNames from 'classnames';
import SectionHeader from './partials/SectionHeader';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles'
import { makeStyles } from "@mui/styles";
import { auth, connectWithGoogle, db } from '../../firebase'
import React, { useState, useEffect, Fragment, useContext } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory, useNavigate, redirect } from 'react-router-dom';
import { editProfile } from '../../request';


//profile pictures
import pp_1 from './../../assets/images/profile_pictures/AI_pp_1.jpeg';

// firebase firestore.
import {
  doc,
  updateDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

const AuthContext = React.createContext();


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

const ProfileBlock = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  pushLeft,
  ...props
}) => {

  const [user, error] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const [UsernameData, setUsernameData] = useState();
  const [BioData, setBioData] = useState();
  const [FrequencyData, setFrequencyData] = useState();
  const [WeightData, setWeightData] = useState();

  const edit_user_profile = async () => {
    editProfile();
    history.push('/profile');
  }

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/login");
    }
  }, [user, loading]);

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

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: localStorage.getItem("email")
  };

  return (
    <>
    {!loading ? (
    <section
      {...props}
      className={outerClasses}
      >
      <div className="container"> 
          <Image alt="profile_picture" width={250} height={250} className="profile_picture_main" rounded="true" src={pp_1}/>
      </div>
      <div className="container">
        <form>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

          <div>
            <input 
            className="text-sm mb-0" 
            type="text"
            placeholder={localStorage.getItem("username")}
            onChange={(e) => {
              localStorage.setItem('username', e.target.value)
            }}/>
          </div>
          <div className={tilesClasses}>

            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <input 
                  className="text-sm mb-0" 
                  type="text"
                  placeholder={localStorage.getItem("sport_frequence")}
                  onChange={(e) => {
                    localStorage.setItem('sport_frequence', e.target.value)
                  }}
                  />
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Sport Frequency</span>
                </div>
              </div>
            </div>

            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <input 
                  className="text-sm mb-0" 
                  type="text"
                  placeholder={localStorage.getItem("description")}
                  onChange={(e) => {
                    localStorage.setItem('description', e.target.value)
                  }}
                  />
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-link">
                    <a>Description</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <input 
                  className="text-sm mb-0" 
                  type="text"
                  placeholder={localStorage.getItem("weight")}
                  onChange={(e) => {
                    localStorage.setItem('weight', e.target.value)
                  }}
                  />
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Weight</span>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div>
          <button className="button button-primary button-wide-mobile button-sm" onClick={() => edit_user_profile()}> Edit </button>
        </div>
        
        </form>
      </div>
      
    </section>
    ) : (
      <div className="testimonial-item-content">
         <p className="text-sm mb-0"> Loading ...</p>
      </div>
    )}
    </>
  );
}

ProfileBlock.propTypes = propTypes;
ProfileBlock.defaultProps = defaultProps;


export default ProfileBlock;
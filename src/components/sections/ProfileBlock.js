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
  const [user_profile, setUserProfile] = useState([]);
  const profile_data = [];

  const [username_data, setUsername] = useState();
  const [bio_data, setBioData] = useState();
  const [funF_data, setFunF] = useState();
  const [objectives_data, setObjectives] = useState();
  const [favorite_data, setFavorite] = useState();

  const [tmpusername_data, settmpUsername] = useState();
  const [tmpbio_data, settmpBioData] = useState();
  const [tmpfunF_data, settmpFunF] = useState();
  const [tmpobjectives_data, settmpObjectives] = useState();
  const [tmpfavorite_data, settmpFavorite] = useState();

  const edit_user_profile = async () => {
    const profile_data_2 = [];
    console.log("HERE i am");
    try {
      
      const colletionRef = collection(db, 'user_profile');
      const q = query(colletionRef, where("username", "==", "pierrebittou@gmail.com"));
      const querySnapshot = await getDocs(q);
      
      querySnapshot.forEach((doc) => {
        profile_data_2.push(doc.data());
        profile_data_2.push(doc._key.path.segments[6]);
      });

      console.log("HERE i am 5555");
      console.log(profile_data_2[1]);

      if (profile_data_2 && profile_data_2[1]) {
        console.log("HERE i am v2");
      const docRef = doc(db, "user_profile", profile_data_2[1]);
      const data = {
      username: user.email,
      bio: tmpbio_data,
      fun_fact: tmpfunF_data,
      objectives: tmpobjectives_data,
      favorite_sport: tmpfavorite_data
      };
      updateDoc(docRef, data)
      .then(docRef => {
      console.log("Document written with ID: ", docRef.id);
      })
      .catch(error => {
        console.log(error);
      })
    }

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/login");
    }
  }, [user, loading]);
  const [videoModalActive, setVideomodalactive] = useState(false);

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
    title: username_data,
    paragraph: bio_data,
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
            value={localStorage.getItem("username")}
            onChange={(e) => {
              settmpBioData(
                  e.target.value)
            }}/>
          </div>
          <div className={tilesClasses}>

            <div className="tiles-item">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0"> {favorite_data} </p>
                  <input 
                  className="text-sm mb-0" 
                  type="text" 
                  value={localStorage.getItem("sport_frequence")}
                  onChange={(e) => {
                    settmpFavorite(
                        e.target.value)
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
                  <p className="text-sm mb-0"> {objectives_data} </p>
                  <input 
                  className="text-sm mb-0" 
                  type="text" 
                  value={localStorage.getItem("description")}
                  onChange={(e) => {
                    settmpObjectives(
                        e.target.value)
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
                <p className="text-sm mb-0"> {funF_data} </p>
                  <input 
                  className="text-sm mb-0" 
                  type="text" 
                  value={localStorage.getItem("weight")}
                  onChange={(e) => {
                    settmpFunF(
                        e.target.value)
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
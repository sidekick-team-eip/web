import classNames from 'classnames';
import SectionHeader from './partials/SectionHeader';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles'
import { makeStyles } from "@mui/styles";
import { auth, db } from '../../firebase'
import React, { useState, useEffect, Fragment, useContext } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory, useNavigate, redirect } from 'react-router-dom';

import pp_1 from './../../assets/images/profile_pictures/AI_pp_6.jpeg';

import {
  doc,
  updateDoc,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';


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


const MessageBlock = ({
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
  const [loading, setLoading] = useState(true);
  const [Text, setText] = useState('');
  const [Input, setInput] = useState('');
  const history = useHistory();

  const Sidekick_name = "Martino Pedalo"
  const last_seen = "1 day"

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    className
  );

  const innerClasses = classNames(
    'cta-message section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
  );


  const showMes = e => {
    e.preventDefault();
    setInput(Input + '    ' + Text);
  };

  return (
    <>
    <section {...props} className={outerClasses} >
    
    <div className="container">
        <div className={innerClasses}>
            <tr>
                <td></td>
                <td align="left"><div><Image alt="profile_picture" width={80} height={80} className="profile_picture_main" rounded="true" src={pp_1}/></div></td>
                <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                <td align="center"><div><h3>{Sidekick_name}</h3></div></td>
                <td></td><td></td><td></td><td></td><td></td>
                <td align="right"><div><p>last seen {last_seen} ago</p> </div></td>
                <td></td>   
            </tr>
        </div>
    </div>
    <div> ---- </div>

    <div className="container">
        <div className={innerClasses}>
            <div id="send_message_zone">
            <p>message zone</p>
            </div>
            {Input !== '' && Input}
            </div>
            
    </div>

    <div className="container">
        <div className={innerClasses}>

            
                <div className="Main">
                    <form onSubmit={showMes}>
                        <input
                        type="text"
                        className="CurrencyName"
                        value={Text}
                        onChange={e => setText(e.target.value)}
                        />
                        <button style={{ marginLeft: '5px' }} type="submit"> Send ! </button>
                    </form>
                    
                </div>
        </div>
    </div>
        
    </section>
    </>
  );
}

MessageBlock.propTypes = propTypes;
MessageBlock.defaultProps = defaultProps;

export default MessageBlock;
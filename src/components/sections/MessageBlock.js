import classNames from 'classnames';
import SectionHeader from './partials/SectionHeader';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles'
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect, Fragment, useContext } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory, useNavigate, redirect } from 'react-router-dom';

import pp_1 from './../../assets/images/profile_pictures/AI_pp_6.jpeg';
import { auth, db } from '../../firebase'
import './../../assets/scss/speech_bubble.scss'

import io from "socket.io-client"


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

  const socket_message = io("13.39.85.8", {
    auth: {
      token: localStorage.getItem('userId')
    }
  })  
  
  const [Text, setText] = useState('');
  const [Input, setInput] = useState('');
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const Sidekick_name = localStorage.getItem("sidekick_name")
  const last_seen = "1 day"
  const [message_html, setMessage_html] = useState(fill_message_array(JSON.parse(localStorage.getItem(("messages"))).messages));
  
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
    sendMessage();
  };

  const sendMessage = () => {
    socket_message.emit("message", message );
  };

  useEffect(() => {
    socket_message.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket_message]);

  function fill_message_array (messages_array) {
    var new_message_html = [];
    for (let i = 0; i < messages_array.length; i++) {
      if (messages_array[i].senderId === 1)
        new_message_html.push(
        <div className='speech-bubble-two'><p key={i} style={{textAlign:'right'}}>{messages_array[i].content}</p></div>
        )
      else {
        new_message_html.push(
          <div className='speech-bubble'><p key={i} style={{textAlign:'left'}}>{messages_array[i].content}</p></div>
          )
      }
    }
    return(new_message_html);
  }

  return (
    <>
    <section {...props} className={outerClasses} >
    
    <div className="container">
        <div>
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

    <div className="container">
        <div className={innerClasses} >
          <div style = {{overflowY: 'auto', height: '400px'}}>
            {message_html}
          </div>
            <div id="send_message_zone">
            </div>
            {Input !== '' && Input}
            </div>
            
    </div>

    <div className="container">
        <div className={innerClasses}>

                <div className="Main">
                  {localStorage.getItem("userId")}
                { messageReceived }
                <form onSubmit={showMes}>
                    <input
                        style={{borderRadius: '8px', fontSize: '0.9rem', width:'20rem', height:'2rem', marginRight: '1rem'}}
                        type="text"
                        className="CurrencyName"
                        value={Text}
                        onChange={e => {
                          setText(e.target.value);
                          setMessage(e.target.value);
                        }}
                    />
                    <button className="button button-primary button-wide-mobile button-sm" style={{ marginLeft: '5px' }} type="submit"> Send ! </button>
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
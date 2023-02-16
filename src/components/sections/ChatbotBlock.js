import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles'
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useNavigate, redirect } from 'react-router-dom';

//import Chatbot from 'react-chatbot-kit'
//import config from "../../../src/chatbot/ChatbotConfig.js";
//import MessageParser from "../../../src/chatbot/MessageParser.js";
//import ActionProvider from "../../../src/chatbot/ActionProvider.js";

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
  {
      id: '0',
      message: 'Hey welcome to Sidekick ! I\'m here to aswer your questions, but first, how should I adress you?',
      trigger: '1',
  }, {
      id: '1',
      // Here we want the user to enter their name
      user: true,
      trigger: '2',
  }, {
      id: '2',
      message: " Hi {previousValue}, on which topic can I help you ?",
      trigger: 3
  },
  {
    id: "3",
    options: [
      { value: 1, label: "Tell me about the Project", trigger: "4" },
      { value: 2, label: "Tell me about the Team", trigger: "25" },
      { value: 3, label: "Tell me about the Timeline", trigger: "50" }
    ]
  },

  // "The Project" branch of the tree
  {
    id: '4',
    message: "Sidekick is an application that find you a partner to keep your motivation at its highest toward your trainning goals!",
    trigger: 5,
  }, {
    id: '5',
    message: "We will find your partner based on the information you give us on you objectives!",
    trigger: 6,   
  }, {
    id: '6',
    options: [
      { value: 1, label: "More details ?", trigger: "7" },
      { value: 2, label: "Return to the menu", trigger: "3" },
    ],
  }, {
    id: '7',
    message: "For the maching we will ask you personal question on your curent physical situation, but more importantly on the objectives you have !",
    trigger: 8,
  }, {
    id: '8',
    message: "You don't have to worry about your privacy, we will not keep any private information about you ;)",
    trigger: 9,
  }, {
    id: '9',
    options: [
      { value: 1, label: "The origins", trigger: "10" },
      { value: 2, label: "Return to the menu", trigger: "3" },
    ],
  }, {
    id: '10',
    message: "The idea of this project came to our minds during a ideation period during our studies.",
    trigger: 11,
  }, {
    id: '11',
    message: "The motivation problem was something we all experienced even with a lot of different profile on sport.",
    trigger: 12,
  }, {
    id: '12',
    options: [
      { value: 1, label: "...", trigger: "13" }
    ],
  }, {
    id: '13',
    message: "We all agreed that having a partner keeps you motivated.",
    trigger: 14,
  }, {
    id: '14',
    message: "And that you don't have the option to stay in your coutch, this partner is what we give you with Sidekick!",
    trigger: 3,
  },


  // "The Team" branch of the tree
  {
    id: '25',
    message: "Let me tell you about the team, do you want informations on",
    trigger: 26
  }, {
    id: '26',
    options: [
      { value: 1, label: "the Group", trigger: "27" },
      { value: 2, label: "the Individuals", trigger: "31" },
      { value: 3, label: "Nobody... Back to the menu", trigger: "3" }
    ]
  }, {
    id: '27',
    message: "We at Sidekick are a group of 8 computer science students",
    trigger: 28
  }, {
    id: '28',
    message: "We all meet at school and we decided to do our end of studies project together",
    trigger: 29
  }, {
    id: '29',
    message: "We are all French! but we are all traveling around the world... find details on the individuals!",
    trigger: 30
  }, {
    id: '30',
    options: [
      { value: 2, label: "the Individuals", trigger: "31" },
      { value: 3, label: "Back to the menu", trigger: "3" }
    ]
  }, {
    id: '31',
    options: [
      { value: 1, label: "Manuel", trigger: "32" },
      { value: 2, label: "Alexandre", trigger: "33" },
      { value: 3, label: "Ilian", trigger: "34" },
      { value: 4, label: "Jules", trigger: "35" },
      { value: 5, label: "Pierre", trigger: "36" },
      { value: 6, label: "Gregoire", trigger: "37" },
      { value: 7, label: "Alizée", trigger: "38" },
      { value: 8, label: "Théo", trigger: "39" },
      { value: 9, label: "Back to the menu", trigger: "3" }
    ]
  }, {
    id: '32',
    message: "Manuel is in China !",
    trigger: 31
  }, {
    id: '33',
    message: "Alexandre is in Sweden",
    trigger: 31
  }, {
    id: '34',
    message: "Ilian is in the USA (Los Angeles)",
    trigger: 31
  }, {
    id: '35',
    message: "Jules is in the USA (New York)",
    trigger: 31
  }, {
    id: '36',
    message: "Pierre is in Korea (Seoul)",
    trigger: 31
  }, {
    id: '37',
    message: "Gregoire is in Korean (Daegu)",
    trigger: 31
  }, {
    id: '38',
    message: "alizee is in Canada with Theo",
    trigger: 31
  }, {
    id: '39',
    message: "Theo is in Canada with Alizée",
    trigger: 31
  },


    // "The Timeline" branch of the tree
  {
    id: '50',
    message: "We started this project less than a year ago. It was and still is Not a full time project",
    trigger: 51
  }, {
    id: '51',
    message: "We are slowly building this big project while having other activities, but we want to deliver a great frist version and not an half baked project.",
    trigger: 52
  }, {
    id: '52',
    options: [
      { value: 1, label: "More details ?", trigger: "53" },
      { value: 2, label: "Return to the menu", trigger: "3" },
    ],
  }, {
    id: '53',
    message: "We are planning to deliver a public version by April 2024. Until then we will constantly deliver work on this project and make it grow.",
    trigger: 54
  }, {
    id: '54',
    message: "We are shouldered by proffesionals to make sure that we are building the right way. You can follow our work on our social media!",
    trigger: 3
  },
];

// Creating our own theme
const theme = {
  background: 'white',
  headerBgColor: '#e06d0e',
  headerFontSize: '20px',
  botBubbleColor: '#151719',
  headerFontColor: 'white',
  botFontColor: '#9CA9B3',
  userBubbleColor: '#151719',
  userFontColor: '#9CA9B3',
};

// Set some properties of the bot
const config = {
  botAvatar: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/7064f8105512449.5f7b1e51a8e7a.jpg",
  //botAvatar: "../../src/assets/images/sidekick_logo.png",
  floating: true,
  userDelay: 0,
  placeholder: "Ask us your questions here !"
};

const ChatBlock = ({
}) => {
  return (
    <div className="App">
        <ThemeProvider theme={theme}>
            <ChatBot
                headerTitle="Sidekick"
                steps={steps}
                {...config}
            />
        </ThemeProvider>
    </div>
  );
}

export default ChatBlock;
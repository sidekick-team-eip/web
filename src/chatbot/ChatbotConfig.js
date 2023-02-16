import { createChatBotMessage } from "react-chatbot-kit";
import TestWidget from "./widgets/TestWidget";

const config = {
  lang: "no",
  botName: "CoBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#04668a"
    },
    chatButton: {
      backgroundColor: "#0f5faf"
    }
  },
  initialMessages: [
    createChatBotMessage(
      `Hey welcome to Sidekick ! I\'m here to aswer your questions!`
    ),
    createChatBotMessage(
      "Here's a quick overview of what I can help you with.",
      {
        withAvatar: false,
        delay: 400,
        widget: "overview"
      }
    )
  ],
  state: {},
  customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
  widgets: [
    {
      widgetName: "overview",
      widgetFunc: (props) => <TestWidget/>,
    },
    {
      widgetName: "globalStatistics",
      widgetFunc: (props) => <TestWidget />
    },
    {
      widgetName: "localStatistics",
      widgetFunc: (props) => <TestWidget />
    },
    {
      widgetName: "sportwearDelivery",
      widgetFunc: (props) => <TestWidget />
    }
  ]
};

export default config;

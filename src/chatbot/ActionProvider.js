class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }
  handleOptions = (options) => {
    const message = this.createChatBotMessage(
      "Hey welcome to Sidekick ! I\'m here to aswer your questions, but first, how should I adress you?",
      {
        widget: "overview",
        loading: true,
        terminateLoading: true,
        ...options
      }
    );

    this.addMessageToState(message);
  };

  handleGlobalStats = () => {
    const message = this.createChatBotMessage(
      "Here's the latest global stats.",
      {
        widget: "globalStatistics",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleLocalStats = () => {
    const message = this.createChatBotMessage(
      "Here's your latest stats",
      {
        widget: "localStatistics",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleSportwears = () => {
    const message = this.createChatBotMessage(
      "To have sportwear safely delivered to your home, please refer to the link below.",
      {
        widget: "sportwearDelivery",
        loading: true,
        terminateLoading: true,
        withAvatar: true
      }
    );

    this.addMessageToState(message);
  };

  handleJoke = () => {
    var jokes = [
      "So many coronavirus jokes out there, it’s a pundemic!",
      "I’ll tell you a coronavirus joke now, but you’ll have to wait two weeks to see if you got it!",
      "Did you hear the joke about coronavirus? Never mind, I don’t want to spread it around!",
      "What should you do if you don’t understand a coronavirus joke? Be patient!",
      "Why do they call it the novel coronavirus? It’s a long story...",
      "Since we’re all in quarantine I guess we’ll be making only inside jokes from now on!"
    ];

    var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

    const message = this.createChatBotMessage(randomJoke);

    this.addMessageToState(message);
  };

  handleThanks = () => {
    const message = this.createChatBotMessage("You're welcome, and keep training hard with SIDEKICK!");

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message]
    }));
  };
}

export default ActionProvider;
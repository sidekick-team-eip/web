class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    message = message.toLowerCase();
    console.log(message);

    if (
      message.includes("options") ||
      message.includes("help") ||
      message.includes("do for me")
    ) {
      return this.actionProvider.handleOptions({ withAvatar: true });
    }

    if (
      message.includes("stats") ||
      message.includes("statistics") 
      ) {
      return [
        this.actionProvider.handleGlobalStats(),
        this.actionProvider.handleLocalStats()
      ];
    }

    if (message.includes("sportwear") || message.includes("delivery")) {
      return this.actionProvider.handleSportwears();
    }

    if (
      message.includes("joke") ||
      message.includes("jokes") ||
      message.includes("funny")
    ) {
      return this.actionProvider.handleJoke();
    }

    if (message.includes("thanks") || message.includes("thank you")) {
      return this.actionProvider.handleThanks();
    }

    return this.actionProvider.handleOptions({ withAvatar: true });
  }
}

export default MessageParser;

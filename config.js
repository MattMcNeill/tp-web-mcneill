platform = process.env.PLATFORM ? process.env.PLATFORM : 'heroku'

config = {
  // Platform capabilities
  safe : {
    transports : ["xhr-polling"]
  },
  heroku : {
    transports : ["websocket"]
  },
  joyent : {
    transports : ["websocket", "xhr-polling"]
  }
}

exports.config = config

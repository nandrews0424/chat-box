This our chat box component!!

    moment = require("moment")
    PolymerExpressions::dateAgo = (date) -> moment(date).fromNow()

    Polymer "chat-box",
      chatName: 'All About Chat'
      messages: [
        who: "Sample"
        what: "This is a chat"
        when: new Date(2014, 2, 10)
      ,
        who: "Sample Back"
        what: "Really? A chat?"
        when: new Date(2014, 2, 10)
      ]
      attached: ->
        console.log 'on page', @messages

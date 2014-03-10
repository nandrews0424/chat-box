This our chat box component!!

    Polymer "chat-box",
      sample: 'Name'
      chatName: 'All About Chat'
      messages: [
        who: "Sample"
        what: "This is a chat"
        when: new Date(2014, 3, 10)
      ,
        who: "Sample Back"
        what: "Really? A chat?"
        when: new Date(2014, 3, 10)
      ]
      attached: ->
        console.log 'on page', @messages

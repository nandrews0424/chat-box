This our chat box component!!

    markdown = require("markdown").markdown
    PolymerExpressions::markdown = (boxText) -> 
      markdown.toHTML(boxText) 



    moment = require("moment")
    PolymerExpressions::dateAgo = (date) -> moment(date).fromNow()

    Polymer "chat-box",
      chatName: 'All About Chat'
      messages: [
      
      ]
      attached: ->
        console.log 'on page', @messages
        @$.loading.setAttribute "style","display: none" 
        @getChunk()
      getChunk: -> 
        @$.loading.removeAttribute "style"
        endIndex = -1 - @messages.length 
        startIndex = endIndex  
        @fire "chunk",
          startIndex: startIndex
          endIndex: endIndex
          callback: (error, startIndex, endIndex, messages) => 
            while @messages.length < Math.abs(startIndex)
              @messages.splice(0, 0, null)
            slot = @messages.length + startIndex
            for message in messages
              @messages.splice(slot, 1, message)
              slot++
            @$.loading.setAttribute "style","display: none" 
            if endIndex is -1
              setTimeout => 
                @shadowRoot.querySelector("li:last-of-type").scrollIntoView(false)
      scrollList: (evt) ->
        if @shadowRoot.querySelector("li:first-of-type").getBoundingClientRect().top == @$.messagelist.getBoundingClientRect().top
          @getChunk()
      closeWindow: (evt) ->
        console.log(evt)




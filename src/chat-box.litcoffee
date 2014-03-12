This our chat box component!!

    markdown = require("markdown").markdown
    PolymerExpressions::markdown = (boxText) -> 
      markdown.toHTML(boxText) 


    _ = require("lodash")
    moment = require("moment")
    PolymerExpressions::dateAgo = (date) -> moment(date).fromNow()

    Polymer "chat-box",
      chatName: 'All About Chat'
      messages: [
      
      ]
      attached: ->
        console.log 'on page', @messages
        @$.loading.setAttribute "style","display: none" 
      ready: ->
        @getChunk()
      getChunk: _.debounce -> 
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
                @shadowRoot.querySelector("li:last-of-type")?.scrollIntoView(false)
              , 200
      , 100
      scrollList: (evt) ->
        if @shadowRoot.querySelector("li:first-of-type").getBoundingClientRect().top == @$.messagelist.getBoundingClientRect().top
          @getChunk()
      closeWindow: (evt) ->
        @setAttribute "style", "display: none"
        evt.stopPropagation()
      showWindow: (evt) ->
        @removeAttribute "style"
      sendMessage: ->
        if @what?.trim() is "" or not @what
          return
        else
          @fire "message",
            who: null
            what: @what
            when: new Date()
            callback: (error, message) =>
              @what = ""
              @messages.push(message)
              setTimeout => 
                  @shadowRoot.querySelector("li:last-of-type")?.scrollIntoView(false)
                , 200
        @$.textbox.removeAttribute "style"
      checkKey: (evt) ->
        if evt.keyCode is 13 and evt.ctrlKey
          return
        else if evt.keyCode is 13
          evt.preventDefault()
          @sendMessage()

        else if evt.keyCode is 27
          @what = ""
      autoGrow: (evt) ->
        if @$.textbox.scrollHeight > @$.textbox.getBoundingClientRect().height
          height = @$.textbox.getBoundingClientRect().height + @getDefaultFontSize()
          @$.textbox.setAttribute "style", "height: #{height}px"
      getDefaultFontSize: -> 
        who = document.createElement('div')
        who.style.width = "1000em"
        @shadowRoot.appendChild(who)
        fs= who.offsetWidth / 1000
        @shadowRoot.removeChild(who)
        fs
        











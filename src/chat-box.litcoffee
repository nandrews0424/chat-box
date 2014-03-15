This our chat box component!!

    markdown = require("markdown").markdown
    PolymerExpressions::markdown = (boxText) ->
      markdown.toHTML(boxText or "")

    moment = require("moment")
    PolymerExpressions::dateAgo = (date) -> moment(date).format('lll')

    _ = require("lodash")

    Polymer "chat-box",
      chatName: 'All About Chat'
      messages: []
      nameIndexes: {}
      attached: ->
        @$.loading.setAttribute "style","display: none"
        @$.footer.setAttribute "style","display: none"
      ready: ->
        @getChunk()

Get a new chunk of messages. These are with 'negative indexes' starting 'back'
in the array. `startIndex` will be more negative or equal to `endIndex`.

      getChunk: _.debounce ->
        @$.loading.removeAttribute "style"
        endIndex = -1 - @messages.length
        startIndex = endIndex
        @fire "chunk",
          startIndex: startIndex
          endIndex: endIndex
          callback: (error, startIndex, endIndex, messages) =>
            while @messages.length < Math.abs(startIndex)
              @messages.splice(0, 0, {})
            slot = @messages.length + startIndex
            for message in messages
              @messages.splice(slot, 1, message)
              slot++
            @$.loading.setAttribute "style","display: none"
            if endIndex is -1
              setTimeout =>
                @shadowRoot.querySelector("li:last-of-type")?.scrollIntoView(false)
              , 200
            @markContiguousUsers(slot)
      , 100

Scroll handling -- most important thing is that when we visuall bump the start
of the list, it is time to see if there is a new chunk of messages.

      scrollList: (evt) ->
        if @shadowRoot.querySelector("li:first-of-type").getBoundingClientRect().top == @$.messagelist.getBoundingClientRect().top
          @getChunk()
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
              @addMessage(message)
        @$.textbox.removeAttribute "style"

Mark messages from a specific slot, working backwards as contiguous users. This
is to visually fold messages from a single user together with a block color.

      markContiguousUsers: (slot) ->
        idx = 0
        while idx < @messages.length
          if not @nameIndexes[@messages[idx].who]?
            @nameIndexes[@messages[idx].who] = _.keys(@nameIndexes).length
          @messages[idx].colorWay = @nameIndexes[@messages[idx].who] % 7
          if idx is 0
            @messages[0].run = 'start'
          else if @messages[idx-1].who is @messages[idx].who
            @messages[idx].run = 'in'
          else
            @messages[idx].run = 'start'
            if @messages[idx-1].run is 'in'
              @messages[idx-1].run = 'end'
            if @messages[idx-1].run is 'start'
              @messages[idx-1].run = 'single'
          idx++
      checkKey: (evt) ->
        if evt.keyCode is 13 and evt.ctrlKey
          return
        else if evt.keyCode is 13
          evt.preventDefault()
          @sendMessage()
        else if evt.keyCode is 27
          @what = ""
          @$.textbox.removeAttribute "style"
      autoGrow: (evt) ->
        if @$.textbox.scrollHeight > @$.textbox.getBoundingClientRect().height
          height = @$.textbox.getBoundingClientRect().height + @getDefaultFontSize()
          @$.textbox.setAttribute "style", "height: #{height}px"
      checkTyping: (evt) ->
        if @$.textbox.value.length > 0
          @fire "typing"
          @$.footer.removeAttribute "style"
          listBottom = @$.messagelist.getBoundingClientRect().bottom
          lastTop = @shadowRoot.querySelector("li:last-of-type")?.getBoundingClientRect().top
          lastBottom = @shadowRoot.querySelector("li:last-of-type")?.getBoundingClientRect().bottom
          if lastBottom > listBottom and lastTop < listBottom
            @shadowRoot.querySelector("li:last-of-type")?.scrollIntoView(false)
        else
          @fire "not-typing"
          @$.footer.setAttribute "style","display: none"
      getDefaultFontSize: ->
        who = document.createElement('div')
        who.style.width = "1000em"
        @shadowRoot.appendChild(who)
        fs= who.offsetWidth / 1000
        @shadowRoot.removeChild(who)
        fs
      addMessage: (message) ->
        @messages.push(message)
        @markContiguousUsers(@messages.length-1)
        setTimeout =>
          @shadowRoot.querySelector("li:last-of-type")?.scrollIntoView(false)
        , 200

Simple way to get around the fact that Polymer always wants to escape HTML. This
is intended to be used with markdown to prevent XSS.

    Polymer "html-echo",
      htmlChanged: ->
        @innerHTML = @html












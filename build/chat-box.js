(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Polymer("chat-box", {
  sample: 'Name',
  chatName: 'All About Chat',
  messages: [
    {
      who: "Sample",
      what: "This is a chat",
      when: new Date(2014, 3, 10)
    }, {
      who: "Sample Back",
      what: "Really? A chat?",
      when: new Date(2014, 3, 10)
    }
  ],
  attached: function() {
    return console.log('on page', this.messages);
  }
});


},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvd2JhbGxhcmQvY2hhdC1ib3gvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL3diYWxsYXJkL2NoYXQtYm94L3NyYy9jaGF0LWJveC5saXRjb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNFSSxPQUFBLENBQVEsVUFBUixFQUNFO0FBQUEsRUFBQSxNQUFBLEVBQVEsTUFBUjtBQUFBLEVBQ0EsUUFBQSxFQUFVLGdCQURWO0FBQUEsRUFFQSxRQUFBLEVBQVU7SUFDUjtBQUFBLE1BQUEsR0FBQSxFQUFLLFFBQUw7QUFBQSxNQUNBLElBQUEsRUFBTSxnQkFETjtBQUFBLE1BRUEsSUFBQSxFQUFVLElBQUEsSUFBQSxDQUFLLElBQUwsRUFBVyxDQUFYLEVBQWMsRUFBZCxDQUZWO0tBRFEsRUFLUjtBQUFBLE1BQUEsR0FBQSxFQUFLLGFBQUw7QUFBQSxNQUNBLElBQUEsRUFBTSxpQkFETjtBQUFBLE1BRUEsSUFBQSxFQUFVLElBQUEsSUFBQSxDQUFLLElBQUwsRUFBVyxDQUFYLEVBQWMsRUFBZCxDQUZWO0tBTFE7R0FGVjtBQUFBLEVBV0EsUUFBQSxFQUFVLFNBQUEsR0FBQTtXQUNSLE9BQU8sQ0FBQyxHQUFSLENBQVksU0FBWixFQUF1QixJQUFDLENBQUEsUUFBeEIsRUFEUTtFQUFBLENBWFY7Q0FERixDQUFBLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlRoaXMgb3VyIGNoYXQgYm94IGNvbXBvbmVudCEhXG5cbiAgICBQb2x5bWVyIFwiY2hhdC1ib3hcIixcbiAgICAgIHNhbXBsZTogJ05hbWUnXG4gICAgICBjaGF0TmFtZTogJ0FsbCBBYm91dCBDaGF0J1xuICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgd2hvOiBcIlNhbXBsZVwiXG4gICAgICAgIHdoYXQ6IFwiVGhpcyBpcyBhIGNoYXRcIlxuICAgICAgICB3aGVuOiBuZXcgRGF0ZSgyMDE0LCAzLCAxMClcbiAgICAgICxcbiAgICAgICAgd2hvOiBcIlNhbXBsZSBCYWNrXCJcbiAgICAgICAgd2hhdDogXCJSZWFsbHk/IEEgY2hhdD9cIlxuICAgICAgICB3aGVuOiBuZXcgRGF0ZSgyMDE0LCAzLCAxMClcbiAgICAgIF1cbiAgICAgIGF0dGFjaGVkOiAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnb24gcGFnZScsIEBtZXNzYWdlc1xuIl19

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
Polymer("chat-box", {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvYW5uaWVjb29rL2NoYXQtYm94L25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9hbm5pZWNvb2svY2hhdC1ib3gvc3JjL2NoYXQtYm94LmxpdGNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0VJLE9BQUEsQ0FBUSxVQUFSLEVBQ0U7QUFBQSxFQUFBLFFBQUEsRUFBVSxnQkFBVjtBQUFBLEVBQ0EsUUFBQSxFQUFVO0lBQ1I7QUFBQSxNQUFBLEdBQUEsRUFBSyxRQUFMO0FBQUEsTUFDQSxJQUFBLEVBQU0sZ0JBRE47QUFBQSxNQUVBLElBQUEsRUFBVSxJQUFBLElBQUEsQ0FBSyxJQUFMLEVBQVcsQ0FBWCxFQUFjLEVBQWQsQ0FGVjtLQURRLEVBS1I7QUFBQSxNQUFBLEdBQUEsRUFBSyxhQUFMO0FBQUEsTUFDQSxJQUFBLEVBQU0saUJBRE47QUFBQSxNQUVBLElBQUEsRUFBVSxJQUFBLElBQUEsQ0FBSyxJQUFMLEVBQVcsQ0FBWCxFQUFjLEVBQWQsQ0FGVjtLQUxRO0dBRFY7QUFBQSxFQVVBLFFBQUEsRUFBVSxTQUFBLEdBQUE7V0FDUixPQUFPLENBQUMsR0FBUixDQUFZLFNBQVosRUFBdUIsSUFBQyxDQUFBLFFBQXhCLEVBRFE7RUFBQSxDQVZWO0NBREYsQ0FBQSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJUaGlzIG91ciBjaGF0IGJveCBjb21wb25lbnQhIVxuXG4gICAgUG9seW1lciBcImNoYXQtYm94XCIsXG4gICAgICBjaGF0TmFtZTogJ0FsbCBBYm91dCBDaGF0J1xuICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgd2hvOiBcIlNhbXBsZVwiXG4gICAgICAgIHdoYXQ6IFwiVGhpcyBpcyBhIGNoYXRcIlxuICAgICAgICB3aGVuOiBuZXcgRGF0ZSgyMDE0LCAzLCAxMClcbiAgICAgICxcbiAgICAgICAgd2hvOiBcIlNhbXBsZSBCYWNrXCJcbiAgICAgICAgd2hhdDogXCJSZWFsbHk/IEEgY2hhdD9cIlxuICAgICAgICB3aGVuOiBuZXcgRGF0ZSgyMDE0LCAzLCAxMClcbiAgICAgIF1cbiAgICAgIGF0dGFjaGVkOiAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnb24gcGFnZScsIEBtZXNzYWdlc1xuIl19

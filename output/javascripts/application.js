(function() {

  this.hello(function() {
    return alert('hi!');
  });

}).call(this);
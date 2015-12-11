// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    playCount: 0
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection

    this.trigger('play', this);
  },

  ended: function() {
    this.set('playCount', this.get('playCount') + 1);
  	this.trigger('ended', this);
  },

  enqueue: function() {
  	this.trigger('enqueue', this);
  },

  dequeue: function() {
  	this.trigger('dequeue', this);
  },

  erase: function() {
    this.trigger('erase',this);
  }

});

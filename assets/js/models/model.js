var App = App || {};

(function() {
    var Comment = Backbone.Model.extend({
        defaults: {
            timestamp: +(new Date()),
            liked: false,
            text: ''
        }
    });

    App.Model = Comment;
}());

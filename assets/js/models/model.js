var App = App || {};

(function() {
    var Comment = Backbone.Model.extend({
        defaults: {
            id: -1,
            timestamp: +(new Date()),
            text: ''
        }
    });

    App.Model = Comment;
}());

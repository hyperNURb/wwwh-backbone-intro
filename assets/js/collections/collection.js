var App = App || {};

(function() {
    var Comments = Backbone.Model.extend({
        defaults: {
            id: -1,
            timestamp: 0,
            text: ''
        }
    });

    App.Collection = Comments;
}());

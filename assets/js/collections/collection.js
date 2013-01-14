var App = App || {};

(function() {
    var Comments = Backbone.Collection.extend({
        model: App.Model
    });

    App.Collection = Comments;
}());

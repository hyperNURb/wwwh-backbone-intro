var App = App || {};

(function() {
    var Comments = Backbone.Collection.extend({
        model: App.Model,
        getLikes: function () {
            var count = this.filter( function(model) {
                    return model.get('liked');
                });

            return count.length || '';
        }
    });

    App.Collection = Comments;
}());

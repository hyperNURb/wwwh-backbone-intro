var App = App || {};

(function() {
    var Comment = Backbone.View.extend({
        events: {
            'click ': 'likeToggle',
            'click ': 'removeComment'
        },
        initialize: function () {

        },
        likeToggle: function (e) {
            this.model.set('liked', true);
        },
        removeComment: function (e) {

        },
        render: function () {
            return this;
        }
    });

    App.SingleComment = Comment;
}());

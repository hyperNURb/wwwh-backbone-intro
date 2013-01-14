var App = App || {};

(function() {
    var Comment = Backbone.View.extend({
        tagName: 'li',
        className: 'media',
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

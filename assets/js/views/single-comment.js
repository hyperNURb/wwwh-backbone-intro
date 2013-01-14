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
            this.$el.html(App.Templates.singleComment.render(this.model.toJSON()));

            return this;
        }
    });

    App.SingleComment = Comment;
}());

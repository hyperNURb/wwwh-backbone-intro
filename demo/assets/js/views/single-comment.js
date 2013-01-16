var App = App || {};

(function() {
    var Comment = Backbone.View.extend({
        tagName: 'li',
        className: 'media',
        events: {
            'click .like': 'likeToggle',
            'click .delete': 'removeComment'
        },
        initialize: function () {

        },
        likeToggle: function (e) {
            e.preventDefault();
            var liked = this.model.get('liked');

            this.model.set('liked', !liked);
            this.$('.like').text( !liked ? 'Unlike' : 'Like');
        },
        removeComment: function (e) {
            e.preventDefault();

            this.model.destroy();
            this.remove();
        },
        render: function () {
            this.$el.html(App.Templates.singleComment.render(_.extend(this.model.toJSON(), {
                time: function() {
                    return moment(this.timestamp).format('Do MMM, YYYY [at] hh:mm a');
                }
            })));

            return this;
        }
    });

    App.SingleComment = Comment;
}());

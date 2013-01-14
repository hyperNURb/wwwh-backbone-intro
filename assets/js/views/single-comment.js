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

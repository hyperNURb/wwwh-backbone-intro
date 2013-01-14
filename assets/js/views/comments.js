var App = App || {};

(function() {
    var Comments = Backbone.View.extend({
        tagName: 'section',
        className: 'post',
        initialize: function () {
            this.render();
        },
        render: function () {
            this.$el.html(App.Templates.comments);
            return this;
        }
    });

    App.Comments = Comments;
}());

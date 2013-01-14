var App = App || {};

(function() {
    var Comments = Backbone.View.extend({
        tagName: 'section',
        className: 'post',
        events: {
            'keypress #comment': 'addComment'
        },
        initialize: function () {
            this.listenTo( this.collection, 'add', this.drawComment );
            this.render();
        },
        addComment: function(e) {
            if ( e.keyCode === 13 ) {
                var input = $(e.currentTarget),
                    comment = $.trim(input.val());

                if ( comment ) {
                    this.collection.add({
                        timestamp: +(new Date()),
                        text: comment
                    });
                    input.val('');
                }
            }
        },
        drawComment: function(model) {
            var commentInstance = new App.SingleComment({
                    model: model
                });

            commentInstance.render().$el.insertBefore( this.$('.comments li:last-child') );
        },
        render: function () {
            this.$el.html(App.Templates.comments);
            return this;
        }
    });

    App.Comments = Comments;
}());

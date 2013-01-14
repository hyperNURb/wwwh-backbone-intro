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
            this.listenTo( this.collection, 'add remove', this.commentsCount );

            this.render();
        },
        commentsCount: function () {
            var text;

            if ( this.collection.length === 1 ) {
                text = this.collection.length + ' comment';
            } else if ( this.collection.length > 1 ) {
                text = this.collection.length + ' comments';
            } else {
                text = 'Add comment';
            }

            this.$('.comments-icon').text( text );
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

            commentInstance.render().$el.insertBefore( this.$('.comments .add-comment') );
        },
        render: function () {
            this.$el.html(App.Templates.comments);
            return this;
        }
    });

    App.Comments = Comments;
}());

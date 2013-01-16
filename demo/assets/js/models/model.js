var App = App || {};

(function() {
    var Comment = Backbone.Model.extend({
        defaults: {
            timestamp: +(new Date()),
            liked: false,
            text: '',
            user: 'Ivan Tatić',
            avatar: 'ivan.jpg',
            url: 'https://www.facebook.com/tatic.ivan'
        }
    });

    App.Model = Comment;
}());

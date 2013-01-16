var App = App || {};

(function() {
    var Comments = '<header class="media">\
                        <img src="assets/img/avatar.jpg" alt="">\
                        <section class="text">\
                            <a href="https://www.facebook.com/Psywerx" class="title">Psywerx</a>\
                            <footer>\
                                <time>January 2</time> - <a href="#">Like</a>\
                            </footer>\
                        </section>\
                    </header>\
                    <section class="content">\
                        The #psywerx IRC channel has just survived the great karma purge of 2013... <a href="http://www.youtube.com/watch?v=IBH97ma9YiI">http://www.youtube.com/watch?v=IBH97ma9YiI</a>\
                    </section>\
                    <ul class="comments">\
                        <li class="media">\
                            <ul class="actions">\
                                <li><a href="#">Like</a></li>\
                                <li><a href="#">Comment</a></li>\
                                <li><a href="#">Share</a></li>\
                            </ul>\
                            <section class="icons">\
                                <a href="#" class="hidden like-icon"></a>\
                                <a href="#" class="comments-icon">Add comment</a>\
                            </section>\
                        </li>\
                        <li class="add-comment media">\
                            <img src="assets/img/ivan.jpg" alt="">\
                            <section class="text">\
                                <input type="text" name="comment" id="comment" placeholder="Write a comment">\
                            </section>\
                        </li>\
                    </ul>',
        SingleComment = Hogan.compile('<img src="assets/img/{{avatar}}" alt="">\
                                        <section class="text">\
                                            <a href="#" class="delete">delete</a>\
                                            <a href="{{url}}" class="title">{{user}}</a> {{text}}\
                                            <footer>\
                                                <time>{{time}}</time> - <a href="#" class="like">Like</a>\
                                            </footer>\
                                        </section>');
    App.Templates = {};

    _.extend( App.Templates, {
        comments: Comments,
        singleComment: SingleComment
    });
}());

var App = App || {};

(function() {
    var Comments = '<header class="media">\
                        <img src="assets/img/avatar.png" alt="">\
                        <section class="text">\
                            <a href="#" class="title">Spletne urice</a>\
                            <footer>\
                                <time>April 2, 2013 at 2:45pm</time> - <a href="#">Like</a>\
                            </footer>\
                        </section>\
                    </header>\
                    <section class="content">\
                        Ni za lajkat: Ta teden spletne urice odpadejo.\
                    </section>\
                    <ul class="comments">\
                        <li class="media">\
                            <ul class="actions">\
                                <li><a href="#">Like</a></li>\
                                <li><a href="#">Comment</a></li>\
                                <li><a href="#">Share</a></li>\
                            </ul>\
                            <section class="icons">\
                                <a href="#" class="like-icon">Like</a>\
                                <a href="#" class="comments-icon">Add comment</a>\
                            </section>\
                        </li>\
                        <li class="add-comment media">\
                            <img src="assets/img/avatar.png" alt="">\
                            <section class="text">\
                                <input type="text" name="comment" id="comment" placeholder="Write a comment">\
                            </section>\
                        </li>\
                    </ul>',
        SingleComment = Hogan.compile('<img src="assets/img/avatar.png" alt="">\
                                        <section class="text">\
                                             <a href="#" class="title">{{user}}</a> {{text}}\
                                            <footer>\
                                                <time>{{time}}</time> - <a href="#">Like</a>\
                                            </footer>\
                                        </section>');
    App.Templates = {};

    _.extend( App.Templates, {
        comments: Comments,
        singleComment: SingleComment
    });
}());

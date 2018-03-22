var jasmine = require('jasmine');
var comments = require('./comments');

describe('Comments module ', function () {

    describe('Comment', function () {
        var comment = new comments.Comment('Иван', 'Первый комментарий');

        it('should create common comment', function () {
            expect(comment).toBeDefined();
            expect(comment.author).toBe('Иван');
            expect(comment.text).toBe('Первый комментарий');
        });

        it('should render common comment', function () {
            expect(comment.render()).toBe('Иван написал: Первый комментарий');
        });

        it('should quote common comment', function () {
            expect(comment.quote('Марья')).toBe('Марья: "Иван написал: Первый комментарий"');
        });
    });

    describe('UserComment', function () {
        var date;
        var comment;
        beforeEach(function () {
            date = new Date(2018, 1, 1);
            comment = new comments.UserComment('Иван', 'Первый комментарий', date);
        });

        it('should create user comment', function () {
            expect(comment).toBeDefined();
            expect(comment.author).toBe('Иван');
            expect(comment.text).toBe('Первый комментарий');
            expect(comment.date).toEqual(date);
            expect(comment.rate).toBe(0);
        });

        it('should render user comment', function () {
            expect(comment.render()).toBe('Иван написал 1.2.2018: Первый комментарий; Рейтинг: 0');
        });

        it('should quote user comment', function () {
            expect(comment.quote('Марья')).toBe('Марья: "Иван написал: Первый комментарий"');
        });

        it('should increment comment rate', function () {
            comment.rate = 0;
            comment.like();
            expect(comment.rate).toBe(1);
        });

        it('should decrement comment rate', function () {
            comment.rate = 1;
            comment.dislike();
            expect(comment.rate).toBe(0);
        });
    });

    describe('AdComment', function () {
        var comment;
        beforeEach(function () {
            comment = new comments.AdComment('Агент', 'Переходите по ссылке', 'www.adtestlink.com');
        });

        it('should create advertising comment', function () {
            expect(comment).toBeDefined();
            expect(comment.author).toBe('Агент');
            expect(comment.text).toBe('Переходите по ссылке');
            expect(comment.link).toBe('www.adtestlink.com');
            expect(comment.hidden).toBeFalsy();
        });

        it('should render advertising comment', function () {
            expect(comment.render()).toBe('Агент написал: Переходите по ссылке; Перейти >> www.adtestlink.com');
        });

        it('should quote advertising comment', function () {
            expect(comment.quote('Марья')).toBe('Марья: "Агент написал: Переходите по ссылке"');
        });

        it('should hide advertising comment', function () {
            comment.hide();
            expect(comment.render()).toBe('Реклама скрыта');
        });
    });
});
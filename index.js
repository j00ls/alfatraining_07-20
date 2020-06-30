var User = /** @class */ (function () {
    function User(passedName) {
        this.name = passedName;
    }
    User.prototype.sayHello = function () {
        console.log('hi', this.name);
    };
    return User;
}());
var user = new User('Manfred');
console.log(user);

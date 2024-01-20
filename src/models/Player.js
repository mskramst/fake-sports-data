"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var faker_1 = require("@faker-js/faker");
var Player = /** @class */ (function () {
    function Player(team, position) {
        if (position === void 0) { position = getRandomPos(); }
        this.name = faker_1.faker.person.firstName('male') + " " + faker_1.faker.person.lastName();
        //this.position = faker.string.alpha(2).toUpperCase();
        this.position = position;
        this.number = parseInt(faker_1.faker.string.numeric(2));
        this.team = team;
    }
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.display = function () {
        console.log(this.name, this.position, this.number, this.team);
    };
    return Player;
}());
exports.Player = Player;
var getRandomPos = function () {
    var positions = ["p", "c", "1b", "2b", "3b", "ss", "lf", "cf", "rf"];
    return positions[Math.floor(Math.random() * positions.length)];
};

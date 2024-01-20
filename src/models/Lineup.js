"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lineup = void 0;
var Player_1 = require("./Player");
var Lineup = /** @class */ (function () {
    function Lineup(team) {
        this.players = [];
        var positions = ["p", "c", "1b", "2b", "3b", "ss", "lf", "cf", "rf"];
        for (var i = 0; i < 9; i++) {
            var randIndex = Math.floor(Math.random() * positions.length);
            var randPos = positions[randIndex];
            this.players[i] = new Player_1.Player(team, randPos);
            positions.splice(randIndex, 1);
        }
    }
    Lineup.prototype.displayLineup = function () {
        for (var i = 0; i < 9; i++) {
            console.log(this.players[i]);
        }
    };
    return Lineup;
}());
exports.Lineup = Lineup;

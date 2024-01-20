"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScoringEvent = void 0;
var helper_funcs_1 = require("../helper_funcs");
var ScoringEvent = /** @class */ (function () {
    function ScoringEvent(inning, batter, pitcher) {
        var obResult = (0, helper_funcs_1.getRandomNumber)(0, 100);
        this.inning = inning;
        this.pitcher = pitcher;
        this.batter = batter;
        if (obResult > 60) {
            // on base
            this.ob = true;
            var obResult_1 = (0, helper_funcs_1.getRandomNumber)(0, 100);
            if (obResult_1 > 95) {
                this.result = "TRIPLE";
            }
            else if (obResult_1 > 75) {
                this.result = "HOMERUN";
            }
            else if (obResult_1 > 50) {
                this.result = "DOUBLE";
            }
            else {
                this.result = "SINGLE";
            }
        }
        else {
            // out
            this.ob = false;
            var outResult = (0, helper_funcs_1.getRandomNumber)(0, 100);
            if (outResult > 80) {
                this.result = "STRIKEOUT";
            }
            else if (outResult > 40) {
                this.result = "GROUNDOUT";
            }
            else if (outResult > 10) {
                this.result = "FLYOUT";
            }
            else {
                this.result = "POP OUT";
            }
        }
    }
    return ScoringEvent;
}());
exports.ScoringEvent = ScoringEvent;

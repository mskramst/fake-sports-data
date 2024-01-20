"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
var faker_1 = require("@faker-js/faker");
var helper_funcs_1 = require("../helper_funcs");
var Team = /** @class */ (function () {
    function Team() {
        this.city = faker_1.faker.location.city();
        this.mascot = (0, helper_funcs_1.plural)((0, helper_funcs_1.capitalizeStr)(faker_1.faker.animal.type()));
        this.owner = faker_1.faker.person.fullName();
    }
    Team.prototype.display = function () {
        console.log(this.city + " " + this.mascot);
    };
    return Team;
}());
exports.Team = Team;

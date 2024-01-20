import { faker } from '@faker-js/faker';
import { Team } from './Team';

export class Player {
   public name: string; 
   public position: string;
   public number: number;
   public team: Team;

   constructor(team: Team, position:string = getRandomPos()) {
      this.name = faker.person.firstName('male') + " " + faker.person.lastName();
      //this.position = faker.string.alpha(2).toUpperCase();
      this.position = position;
      this.number = parseInt(faker.string.numeric(2));
      this.team = team;
   }

   getName() {
      return this.name;
   }

  display() {
     console.log(this.name, this.position, this.number, this.team)
  }

}

const getRandomPos = ():string => {
      const positions = ["p", "c", "1b", "2b", "3b", "ss", "lf", "cf", "rf"];
      return positions[Math.floor(Math.random() * positions.length)];
}


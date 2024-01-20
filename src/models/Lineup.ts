import { Player } from './Player'
import { Team } from './Team';

export class Lineup {

	players:Player[] = []

	constructor (team:Team) {
		
  const positions = ["p", "c", "1b", "2b", "3b", "ss", "lf", "cf", "rf"];

		for (let i=0; i < 9; i ++) {
			const randIndex =  Math.floor(Math.random() * positions.length)
			const randPos = positions[randIndex];
			this.players[i] = new Player(team, randPos);		
			positions.splice(randIndex,1)
		}
	
	}

	displayLineup():void {
		for (let i=0; i < 9; i ++) {
			console.log(this.players[i]);		
		}

	}

}

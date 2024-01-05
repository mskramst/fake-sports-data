import { Player } from './Player'
import { Team } from './Team';

export class Lineup {

	players:Player[] = []

	constructor (team:Team) {
		
		for (let i=0; i < 9; i ++) {
			this.players[i] = new Player(team);		
		}
	
	}

	displayLineup():void {
		for (let i=0; i < 9; i ++) {
			console.log(this.players[i]);		
		}

	}

}

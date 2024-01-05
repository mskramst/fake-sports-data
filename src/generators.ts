import { Player } from './models/Player'
import { Team } from './models//Team';
import { ScoringEvent } from './models/ScoringEvent';
import { Lineup } from './models/Lineup';

export const generatePlayerData = (total: number):Player[] => {
   
         const players:Player[] = []

         const team = new Team();
         for (let i=0; i < total; i ++) {
         const player = new Player(team);
            players.push(player)
         }

         return players;
}

export const generateTeamData = (total: number):Team[] => {

         const teams:Team[] = []

         for (let i=0; i < total; i ++) {
         const team = new Team();
            teams.push(team)
         }
         
         return teams;
}

export const generateGameEvents = ():ScoringEvent[] => {

   const events:ScoringEvent[] = [];

   const inning = 1;

   const team = new Team();
   const oppTeam = new Team();

   const pitcher = new Player(oppTeam);

   for (let i =0; i < 9; i ++ ) {
      const player = new Player(team);
      const event = new ScoringEvent(inning, player, pitcher);
      events.push(event);
   }

   return events;
}

export const generateLineup = (team:Team): Lineup => {
   
   const lineup = new Lineup(team);

   return lineup;

}


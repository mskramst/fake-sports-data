declare class Team {
    city: string;
    mascot: string;
    owner: string;
    constructor();
    display(): void;
}

declare class Player {
    name: string;
    position: string;
    number: number;
    team: Team;
    constructor(team: Team, position?: string);
    getName(): string;
    display(): void;
}

declare class ScoringEvent {
    ob: boolean;
    result: string;
    inning: number;
    pitcher: Player;
    batter: Player;
    constructor(inning: number, batter: Player, pitcher: Player);
}

declare class Lineup {
    players: Player[];
    constructor(team: Team);
    displayLineup(): void;
}

declare class DataGenerator {
    constructor();
    getPlayers(num: number): Player[];
    getTeams(num: number): Team[];
    getScoringEvents(): ScoringEvent[];
    getLineup(team: Team): Lineup;
    writeData<T>(filename: string, contentArr: T[]): void;
}

export { DataGenerator as default };

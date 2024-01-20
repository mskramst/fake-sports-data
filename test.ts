import DataGenerator from './src/index'
import { Team } from './src/models/Team'

const generator = new DataGenerator();
console.log(generator.getLineup(new Team()));

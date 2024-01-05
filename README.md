# Fake sports generator

## Currently this tool generates the following fake data:
1. a specified number of fake players
2. a specified number of fake teams
3. a number of simulated scoring events for a fake baseball game
4. a fake lineup of random players for one team.

## Instructions 
1. import the DataGenerator class.

2. create an instance of DataGenerator and call one of the four functions:
getPlayers(num), getTeams(num), getScoringEvents(), getLineup(new Team())

3. it will return an array of objects.

4. calling the writeData method of the DataGenerator class with the filename and
	 the array of objects will write to file a JSON file of the fake objects.

```ts

const generator = new DataGenerator();
console.log(generator.getPlayers(3))
generator.writeData("players.json", generator.getPlayers(3))
```

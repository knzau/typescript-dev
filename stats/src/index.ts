import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";

const reader = new MatchReader("football.csv");
reader.read();

let manUWins = 0;

for (let match of reader.data) {
	if (match[1] === "Man United" && match[5] === MatchResult.Homewin) {
		manUWins++;
	} else if (match[2] === "Man United" && match[5] === MatchResult.Awaywin) {
		manUWins++;
	}
}
console.log(`man u wins`, manUWins);

import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../ReportSummary";

export class WinsAnalysis implements Analyzer {
	constructor(public team: string) {}

	run(matches: MatchData[]): string {
		let wins = 0;
		for (let match of matches) {
			if (match[1] === this.team && match[5] === MatchResult.Homewin) {
				wins++;
			} else if (match[2] === this.team && match[5] === MatchResult.Awaywin) {
				wins++;
			}
		}
		return `Team ${this.team} won ${wins} games`;
	}
}

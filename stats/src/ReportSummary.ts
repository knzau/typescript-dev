import { HtmlReport } from "./HtmlReport";
import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";

export interface Analyzer {
	run(matches: MatchData[]): string;
}

export interface OutputTarget {
	print(report: string): void;
}

export class ReportSummary {
	static winsAnalysisWithHtmlReport(team: string): ReportSummary {
		return new ReportSummary(new WinsAnalysis(team), new HtmlReport());
	}
	constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

	buildAndPrintReport(matches: MatchData[]): void {
		const output = this.analyzer.run(matches);
		this.outputTarget.print(output);
	}
}

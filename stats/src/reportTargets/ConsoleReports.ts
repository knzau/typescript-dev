import { OutputTarget } from "../ReportSummary";

export class ConsoleReports implements OutputTarget {
	print(report: string): void {
		console.log(report);
	}
}

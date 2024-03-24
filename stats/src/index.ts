import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ReportSummary } from "./ReportSummary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReports } from "./reportTargets/ConsoleReports";
import { HtmlReport } from "./HtmlReport";

// const csvFileReader = new CsvFileReader("football.csv");
const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const reportSummary = new ReportSummary(new WinsAnalysis("Tottenham"), new ConsoleReports());

reportSummary.buildAndPrintReport(matchReader.matches);

const htmlReportSummary = new ReportSummary(new WinsAnalysis("Tottenham"), new HtmlReport());

htmlReportSummary.buildAndPrintReport(matchReader.matches);

const winsAnalysisWithHtmlReport = ReportSummary.winsAnalysisWithHtmlReport("Man United");
console.log({ winsAnalysisWithHtmlReport });

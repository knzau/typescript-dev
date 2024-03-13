import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ReportSummary } from "./ReportSummary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReports } from "./reportTargets/ConsoleReports";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const reportSummary = new ReportSummary(new WinsAnalysis("Man United"), new ConsoleReports());

reportSummary.buildAndPrintReport(matchReader.matches);

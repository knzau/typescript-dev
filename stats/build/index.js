"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const ReportSummary_1 = require("./ReportSummary");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const ConsoleReports_1 = require("./reportTargets/ConsoleReports");
const HtmlReport_1 = require("./HtmlReport");
// const csvFileReader = new CsvFileReader("football.csv");
const matchReader = MatchReader_1.MatchReader.fromCsv("football.csv");
matchReader.load();
const reportSummary = new ReportSummary_1.ReportSummary(new WinsAnalysis_1.WinsAnalysis("Tottenham"), new ConsoleReports_1.ConsoleReports());
reportSummary.buildAndPrintReport(matchReader.matches);
const htmlReportSummary = new ReportSummary_1.ReportSummary(new WinsAnalysis_1.WinsAnalysis("Tottenham"), new HtmlReport_1.HtmlReport());
htmlReportSummary.buildAndPrintReport(matchReader.matches);
// const winsAnalysisWithHtmlReport = ReportSummary.winsAnalysisWithHtmlReport("Man United");
// console.log({ winsAnalysisWithHtmlReport });

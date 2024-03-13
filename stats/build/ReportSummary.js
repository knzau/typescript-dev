"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportSummary = void 0;
const HtmlReport_1 = require("./HtmlReport");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
class ReportSummary {
    static winsAnalysisWithHtmlReport(team) {
        return new ReportSummary(new WinsAnalysis_1.WinsAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.ReportSummary = ReportSummary;

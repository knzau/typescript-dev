"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportSummary = void 0;
class ReportSummary {
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

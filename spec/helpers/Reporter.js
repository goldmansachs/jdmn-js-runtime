import { SpecReporter } from "jasmine-spec-reporter";
import { JUnitXmlReporter } from "jasmine-reporters";

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
    new SpecReporter({
        spec: {
            displayPending: true,
        },
    })
);
jasmine.getEnv().addReporter(
    new JUnitXmlReporter({
        savePath: 'target/test-results',
        consolidateAll: false,
        filePrefix: 'JUNIT-'
    })
);

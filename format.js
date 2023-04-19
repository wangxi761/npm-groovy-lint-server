const NpmGroovyLint = require('npm-groovy-lint/lib/groovy-lint.js');
async function format(str) {
    try {
        // format the source code
        const npmGroovyLintConfig = {
            source: str,
            format: true,
            loglevel: 'info',
            noserver: true,
            output: 'none',
            rulesets: `{
    "Indentation": {
        "spacesPerIndentLevel": 2
    }
}`
        };
        const linter = new NpmGroovyLint(npmGroovyLintConfig, {});
        await linter.run();
        return linter.lintResult.files[0].updatedSource
    } catch (err) {
        console.error("Unexpected error: " + err.message + "\n" + err.stack);
    }
}

module.exports = format;
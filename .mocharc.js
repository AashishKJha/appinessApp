'use strict';

// Here's a JavaScript-based config file.
// If you need conditional logic, you might want to use this type of config.
// Otherwise, JSON or YAML is recommended.

module.exports = {
    diff: true,
    package: './package.json',
    reporter: 'spec',
    ui: 'bdd',
    extension: ["js"],
    spec: "dist/server-build/**/*.spec.js",
    require: "ts-node/register"
};
const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

// Helper for linking to external query files:
function sql(file) {

    const fullPath = path.join(__dirname, '/', file); // generating full path;
    return new QueryFile(fullPath, {minify: true});
}

module.exports = {
    issue: {
        find: sql('issue/find.sql')
    },
    user: {
        find: sql('user/find.sql'),
        create: sql('user/create.sql')
    },
    organization: {
        find: sql('organization/find.sql'),
        create: sql('organization/create.sql')
    },
    usertoken: {
        find: sql('usertoken/find.sql'),
        create: sql('usertoken/create.sql'),
    },
    rule: {
        create: sql('rule/create.sql'),
        createActive: sql('rule/createActive.sql'),
    },
    ruleActive: {
        createDefault: sql('ruleActive/createDefault.sql')
    },
    ruleParameter: {
        create: sql('ruleParameter/create.sql'),
        createActive: sql('ruleParameter/createActive.sql')
    },
    ruleProfile: {
        create: sql('ruleProfile/create.sql'),
        find: sql('ruleProfile/find.sql')
    },
    orgProfile: {
        create: sql('orgProfile/create.sql'),
        find: sql('orgProfile/find.sql')
    },
    defaultProfile: {
        create: sql('defaultProfile/create.sql')
    },
    changedProfile: {
        createDefault: sql('changedProfile/createDefault.sql'),
        create: sql('changedProfile/create.sql')
    },
    orgUser: {
        create: sql('orgUser/create.sql')
    },
    project: {
        find: sql('project/find.sql')
    }

};


module.exports = function() {
    var { faker } = require('@faker-js/faker');
    var _ = require('lodash');
    faker.seed(808);
    return {
        customers: _.times(100, function(n) {
            return {
                id: n,
                uuid: faker.datatype.uuid(),
                name: faker.company.companyName(),
                salesforceId: faker.database.mongodbObjectId(),
                dateCreated: faker.date.past(),
                dateUpdated: faker.date.recent(100)
            }
        })
    }
}
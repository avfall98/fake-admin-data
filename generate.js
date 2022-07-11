

module.exports = function() {
    var { faker } = require('@faker-js/faker');
    var _ = require('lodash');
    faker.seed(808);
    return {
        people: _.times(10, function(n) {
            return {
                id: n,
                username: faker.internet.userName(),
                email: faker.internet.email(),
                avatar: faker.image.avatar(),
                registeredAt: faker.date.past()
            }
        })
    }
}
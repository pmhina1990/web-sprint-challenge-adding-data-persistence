exports.seed = function(knex, Promise) {
    return knex('resources').insert([
        { resource_name: 'keyboard' },
        { resource_name: 'computer', resource_description: 'Windows PC' }
    ])
}
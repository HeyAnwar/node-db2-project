// STRETCH
const cars = [
    {
        vin: '5UXFB53584LV05456',
        make: 'toyota',
        model: 'supra',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '4T1BE32K73U775060',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: 'JTHGL5EF6D5050473',
        make: 'ford',
        model: 'mustang',
        mileage: 15000,
    },
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate().then(() => {
//         return knex('cars').insert(cars)
//     })
// }

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
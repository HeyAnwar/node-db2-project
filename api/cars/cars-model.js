const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
  // DO YOUR MAGIC
}

const getById = (id) => {
  return db('cars').where('id', id).first()
  // DO YOUR MAGIC
}

const getByVin = (vin) => {
  return db('cars').where('vin', vin).first()
}

const create = async (car) => {
  // DO YOUR MAGIC
  return db('cars').insert(car)
  .then(([id]) => {
    return getById(id)
  })
}
module.exports = {
  getAll,
  getById,
  create,
  getByVin,
}

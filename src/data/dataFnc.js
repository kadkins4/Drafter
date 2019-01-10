const Heroes = require('./hero')

module.exports = class apiActions {
  constructor() {}

  getAllHeroes(req, res) {
    res.status(200).json(Object.values(Heroes))
  }

  getHeroById (req, res) {
    const heroId = req.params['id']
    const hero = Heroes.find(hero => hero.id == heroId)
    res.status(200).json(hero)
  }
}

// module.exports = function getAllHeroes(req, res) {
//   res.status(200).json(Object.values(Heroes))
// }

// module.exports = function getHeroById(req, res) {
//   const heroId = req.params['id']
//   const hero = Heroes.find(hero => hero.id == heroId)
//   res.status(200).json(hero)
// }
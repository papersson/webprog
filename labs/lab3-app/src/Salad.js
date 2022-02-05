class Salad {
  static counter = 0
  constructor() {
    const _uuid = `salad_${Salad.counter++}`
    this.uuid = function () {
      return _uuid
    }
    this.ingredients = {}
  }
  add(name, properties) {
    this.ingredients[name] = properties
    return this
  }
  remove(name) {
    delete this.ingredients[name]
    return this
  }
}

Salad.prototype.getPrice = function () {
  return Object.keys(this.ingredients)
    .map(name => this.ingredients[name].price)
    .reduce((a, b) => a + b)
}
Salad.prototype.count = function (component) {
  return Object.keys(this.ingredients).filter(
    name => this.ingredients[name][component]
  ).length
}

export default Salad

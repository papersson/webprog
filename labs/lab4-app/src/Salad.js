import { v4 as uuidv4 } from 'uuid'
class Salad {
  static counter = 0
  constructor() {
    this.uuid = uuidv4()
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

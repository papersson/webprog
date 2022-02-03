import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import inventory from './inventory.ES6'
import ComposeSalad from './components/ComposeSalad'
import ViewCart from './components/ViewCart'
import Salad from './Salad'
import { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { cart: [] }
  }

  submitForm(event, ingredients) {
    event.preventDefault()
    const newSalad = new Salad()
    for (const ingredient of ingredients) {
      newSalad.add(ingredient, inventory[ingredient])
    }
    this.setState({ cart: [...this.state.cart, newSalad] })
  }

  render() {
    return (
      <div className='container py-4'>
        <header className='pb-3 mb-4 border-bottom'>
          <span className='fs-4'>Min egen salladsbar</span>
        </header>

        <ComposeSalad
          inventory={inventory}
          submitForm={(e, ingredients) => this.submitForm(e, ingredients)}
        />

        {this.state.cart.length !== 0 ? (
          <ViewCart cart={this.state.cart} />
        ) : (
          ''
        )}

        <footer className='pt-3 mt-4 text-muted border-top'>
          EDAF90 - webprogrammering
        </footer>
      </div>
    )
  }
}

export default App

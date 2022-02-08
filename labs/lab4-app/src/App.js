import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
// import inventory from './inventory.ES6'
import { fetchAll } from './services/inventory'
import ComposeSaladWrapper from './components/ComposeSaladWrapper'
import ViewCart from './components/ViewCart'
import Salad from './Salad'
import { Component } from 'react'
import { Link, Routes, Route, useParams } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    // this.state = { cart: [], inventory: {} }
    this.state = {
      cart: JSON.parse(localStorage.getItem('cart')) || [],
      inventory: {},
    }
    this.resetCart = this.resetCart.bind(this)
  }

  async componentDidMount() {
    try {
      let initialInventory = {}
      await fetchAll(initialInventory)
      this.setState({ ...this.state, inventory: initialInventory })
    } catch (error) {
      console.log(error)
    }
  }

  resetCart() {
    this.setState({ ...this.state, cart: [] })
    localStorage.removeItem('cart')
  }

  addSalad(event, ingredients) {
    event.preventDefault()
    const newSalad = new Salad()
    for (const ingredient of ingredients) {
      newSalad.add(ingredient, this.state.inventory[ingredient])
    }
    localStorage.setItem('cart', JSON.stringify([...this.state.cart, newSalad]))
    this.setState({
      ...this.state,
      cart: JSON.parse(localStorage.getItem('cart')),
    })
    console.log(this.state)
    // localStorage.setItem('cart', JSON.stringify([...this.state.cart, newSalad]))
    // Reflection question: in this case most convenient with option 4.
  }

  render() {
    return (
      <div className='container py-4'>
        <Header />
        <Navbar />
        {this.renderRoute()}
        <Footer />
        {/* <ViewIngredient inventory={inventory} /> */}
      </div>
    )
  }

  renderRoute() {
    return (
      <Routes>
        <Route index element={<Welcome />} />
        <Route
          path='compose-salad'
          element={
            <ComposeSaladWrapper
              inventory={this.state.inventory}
              addSalad={(e, ingredients) => this.addSalad(e, ingredients)}
            />
          }
        />
        <Route
          path='view-cart'
          element={
            <ViewCart cart={this.state.cart} resetCart={this.resetCart} />
          }
        />
        <Route path='*' element={<Error />} />
        <Route
          path='view-ingredient/:ingredient'
          element={<ViewIngredient inventory={this.state.inventory} />}
        />
      </Routes>
    )
  }
}

const ViewIngredient = ({ inventory }) => {
  let params = useParams()
  //   console.log(inventory[params.ingredient])
  return (
    <>
      <h3 className='p-2'>{params.ingredient}</h3>
      <ul className='list-unstyled px-2'>
        {Object.keys(inventory[params.ingredient]).map(key => (
          <li>
            {key.charAt(0).toUpperCase() + key.slice(1)}{' '}
            {inventory[params.ingredient][key]}
          </li>
        ))}
      </ul>
    </>
  )
}

const Welcome = () => {
  return (
    <main style={{ padding: '1rem' }}>
      <p>Welcome!</p>
    </main>
  )
}
const Error = () => {
  return (
    <main style={{ padding: '1rem' }}>
      <p>There's nothing here!</p>
    </main>
  )
}

const Header = () => {
  return (
    <header className='pb-3 mb-4 border-bottom'>
      <span className='fs-4'>Min egen salladsbar</span>
    </header>
  )
}

const Footer = () => {
  return (
    <footer className='pt-3 mt-4 text-muted border-top'>
      EDAF90 - webprogrammering
    </footer>
  )
}

const Navbar = () => {
  return (
    <ul className='nav nav-tabs list-group-horizontal'>
      <li className='nav-item'>
        <Link className='nav-link' to='/compose-salad'>
          Compose salad
        </Link>
      </li>
      <li className='nav-item'>
        <Link className='nav-link' to='/view-cart'>
          View cart
        </Link>
      </li>
    </ul>
  )
}

export default App

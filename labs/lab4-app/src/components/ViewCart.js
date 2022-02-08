import { Component } from 'react'
import { postOrder } from '../services/inventory.js'
import Salad from '../Salad.js'

class ViewCart extends Component {
  constructor(props) {
    super(props)
    this.cart = this.props.cart
    this.state = null
  }

  submitOrder() {
    const toState = data => {
      let order = {}
      order['status'] = 'Status: ' + data.status
      order['id'] = 'Order number: ' + data.uuid
      order['time'] = 'Time: ' + data.timestamp
      order['size'] = 'Number of salads: ' + data.order.length
      order['price'] = 'Price: ' + data.price
      return order
    }

    let data = []
    for (const salad of this.cart) {
      data.push(Object.keys(salad.ingredients))
    }

    postOrder('http://localhost:8080/orders', data).then(d => {
      const order = toState(d)
      this.setState({ order: order })
      // localStorage.setItem('cart', JSON.stringify([]))
    })
    this.props.resetCart()
  }

  render() {
    const printIngredients = salad => {
      let ingredients = Object.keys(salad.ingredients).join(', ')
      return ingredients
    }
    return (
      <div className='container bg-light  p-5 border rounded-3'>
        <h2 className='text-center pb-4'>Cart</h2>
        <div>
          {this.state ? (
            <div className='container bg-white border p-3 mt-4'>
              <h5>Confirmation</h5>
              <p>{this.state.order.status}</p>
              <p>{this.state.order.id}</p>
              <p>{this.state.order.time}</p>
              <p>{this.state.order.size}</p>
              <p>{this.state.order.price}</p>
            </div>
          ) : (
            <>
              {this.cart.map(salad => (
                <div
                  key={salad.uuid}
                  className='bg-light border-top border-grey p-3 mx-5 text-center'
                >
                  {printIngredients(salad)}
                  <br />
                  {/* Price: {salad.getPrice()} */}
                  Price: {Salad.prototype.getPrice.call(salad)}
                </div>
              ))}
              <div className='col d-flex justify-content-center mt-4'>
                <button
                  // type='submit'
                  className='btn btn-primary btn-lg'
                  disabled={this.cart.length === 0}
                  onClick={() => this.submitOrder()}
                >
                  Place order
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default ViewCart

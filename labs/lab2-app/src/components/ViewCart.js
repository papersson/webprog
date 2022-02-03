import { Component } from 'react'

class ViewCart extends Component {
  render() {
    const { cart } = this.props
    const printIngredients = salad => {
      let ingredients = Object.keys(salad.ingredients).join(', ')
      return ingredients
    }
    return (
      <div className='container bg-light my-4 p-5 border rounded-3'>
        <h2 className='text-center pb-4'>Cart</h2>
        {cart.map(salad => (
          <div
            key={salad.uuid()}
            className='bg-light border-top border-grey p-3 mx-5 text-center'
          >
            {printIngredients(salad)}
            <br />
            Price: {salad.getPrice()}
          </div>
        ))}
      </div>
    )
  }
}

export default ViewCart

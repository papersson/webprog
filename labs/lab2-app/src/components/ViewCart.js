import { Component } from 'react'

class ViewCart extends Component {
  constructor(props) {
    super(props)
    // this.state = props.state
  }

  render() {
    // console.log(this.props)
    const { cart } = this.props
    // console.log(cart)
    const getIngredients = salad => {
      let ingredients = Object.keys(salad.ingredients).join(', ')
      // console.log(ingredients)

      return 'Order: ' + ingredients
    }
    // getIngredients(cart[0])
    return (
      <div className='container bg-light my-4 p-5 border rounded-3'>
        <h2 className='text-center pb-4'>Cart</h2>
        {cart.map(
          salad => (
            <div key={salad.uuid()} className='bg-white border px-3 mx-5'>
              {getIngredients(salad)}
              <br />
              Price: {salad.getPrice()}
            </div>
          )
          // const ingredients = getIngredients(salad)
          // <p key={salad.uuid()}>{salad.getPrice()}</p>
          // ;<p>Price: {salad.getPrice()}</p>
        )}
      </div>
    )
  }
}

export default ViewCart

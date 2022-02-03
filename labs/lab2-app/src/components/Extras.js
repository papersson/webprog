import { Component } from 'react'

class Extras extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    // this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler(event, modifyExtras) {
  //   const extra = event.target.textContent
  //   const newState = { ...this.state }
  //   const newValue = !newState[extra]
  //   newState[extra] = newValue
  //   this.setState(newState)
  //   modifyExtras(newState)
  // }

  render() {
    const { items, handleExtras, extras } = this.props
    return (
      <>
        <h4>Select extras:</h4>
        <div className='container row d-flex justify-content-center'>
          {items.map(extra => (
            <div
              key={extra}
              className={`extra col-2 p-2 m-2 text-light rounded-3 ${
                extras[extra] ? 'green-extra' : 'gray-extra'
              }`}
              onClick={handleExtras}
            >
              <label>{extra}</label>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default Extras

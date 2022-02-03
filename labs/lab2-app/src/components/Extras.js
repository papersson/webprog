import { Component } from 'react'

class Extras extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

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

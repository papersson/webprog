import { Component } from 'react'

class SingleSelection extends Component {
  render() {
    const { name, items, changeHandler, value } = this.props
    return (
      <label>
        <h4>Select {name}:</h4>
        <select className='form-select' value={value} onChange={changeHandler}>
          <option value=''>Select</option>
          {items.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    )
  }
}

export default SingleSelection

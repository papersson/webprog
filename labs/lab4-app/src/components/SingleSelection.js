import { Component } from 'react'

class SingleSelection extends Component {
  render() {
    const { name, items, changeHandler, value } = this.props
    return (
      <div className='has-validation '>
        <h4>{name.charAt(0).toUpperCase() + name.slice(1)}</h4>
        <select
          required
          className='form-select'
          value={value}
          onChange={changeHandler}
        >
          <option disabled value=''>
            Select
          </option>
          {items.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div className='invalid-feedback'>Please select an ingredient.</div>
      </div>
    )
  }
}

export default SingleSelection

import { Component } from 'react'
import SingleSelection from './SingleSelection'
import Extras from './Extras'

class ComposeSalad extends Component {
  constructor(props) {
    super(props)
    this.state = { foundation: '', protein: '', dressing: '', extras: {} }
  }

  handleExtras(event) {
    const extra = event.target.textContent
    const newExtras = { ...this.state.extras }
    const newValue = !newExtras[extra]
    newExtras[extra] = newValue
    this.setState({ ...this.state, extras: newExtras })
  }

  handleSingleSelection(event, name) {
    this.setState({ ...this.state, [name]: event.target.value })
    event.target.parentElement.classList.add('was-validated')
  }

  submitAndReset(event, selectedIngredients) {
    event.preventDefault()
    event.target.classList.add('was-validated')
    if (event.target.checkValidity() === true) {
      this.props.addSalad(event, selectedIngredients)
      this.setState({ foundation: '', protein: '', dressing: '', extras: {} })
      this.props.navigate('/view-cart')
    }
  }

  render() {
    // Extract items from inventory
    const inventory = this.props.inventory
    let extras = Object.keys(inventory).filter(key => inventory[key].extra)
    let foundations = Object.keys(inventory).filter(
      key => inventory[key].foundation
    )
    let proteins = Object.keys(inventory).filter(key => inventory[key].protein)
    let dressings = Object.keys(inventory).filter(
      key => inventory[key].dressing
    )

    const singleSelections = Object.values(this.state).slice(0, -1)
    const selectedExtras = Object.keys(this.state.extras).filter(
      key => this.state.extras[key]
    )
    const selectedIngredients = singleSelections.concat(selectedExtras)

    return (
      <div className='container col-12'>
        <div className='row h-200 p-5 bg-light border rounded-3'>
          <form
            className='needs-validation'
            onSubmit={event => this.submitAndReset(event, selectedIngredients)}
            noValidate
          >
            {/* <h2 className='text-center'>Select salad ingredients</h2> */}
            <div className='d-flex justify-content-between mt-4 mb-4'>
              <SingleSelection
                name='foundation'
                items={foundations}
                changeHandler={e => this.handleSingleSelection(e, 'foundation')}
                value={this.state.foundation}
              />
              <SingleSelection
                name='protein'
                items={proteins}
                changeHandler={e => this.handleSingleSelection(e, 'protein')}
                value={this.state.protein}
              />
              <SingleSelection
                name='dressing'
                items={dressings}
                changeHandler={e => this.handleSingleSelection(e, 'dressing')}
                value={this.state.dressing}
              />
            </div>
            <Extras
              items={extras}
              handleExtras={e => this.handleExtras(e)}
              extras={this.state.extras}
            />
            <div className='col d-flex justify-content-center mt-4'>
              <button type='submit' className='btn btn-primary btn-lg'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default ComposeSalad

import { Component } from 'react'
import SingleSelection from './SingleSelection'
import Extras from './Extras'

class ComposeSalad extends Component {
  constructor(props) {
    super(props)
    this.state = { foundation: '', protein: '', dressing: '', extras: {} }

    // Extract items from inventory
    const inventory = props.inventory
    this.extras = Object.keys(inventory).filter(key => inventory[key].extra)
    this.foundations = Object.keys(inventory).filter(
      key => inventory[key].foundation
    )
    this.proteins = Object.keys(inventory).filter(key => inventory[key].protein)
    this.dressings = Object.keys(inventory).filter(
      key => inventory[key].dressing
    )
  }

  handleExtras(event) {
    const extra = event.target.textContent
    const newExtras = { ...this.state.extras }
    const newValue = !newExtras[extra]
    newExtras[extra] = newValue
    this.setState({ ...this.state, extras: newExtras })
  }

  handleFoundation(event) {
    this.setState({ ...this.state, foundation: event.target.value })
  }

  handleProtein(event) {
    this.setState({ ...this.state, protein: event.target.value })
  }

  handleDressing(event) {
    this.setState({ ...this.state, dressing: event.target.value })
  }

  submitAndReset(event, selectedIngredients) {
    this.props.submitForm(event, selectedIngredients)
    this.setState({ foundation: '', protein: '', dressing: '', extras: {} })
    this.props.navigate('/view-cart')
  }

  render() {
    const singleSelections = Object.values(this.state).slice(0, -1)
    const selectedExtras = Object.keys(this.state.extras).filter(
      key => this.state.extras[key]
    )
    const selectedIngredients = singleSelections.concat(selectedExtras)

    return (
      <div className='container col-12'>
        <div className='row h-200 p-5 bg-light border rounded-3'>
          <form
            onSubmit={event => this.submitAndReset(event, selectedIngredients)}
          >
            {/* <h2 className='text-center'>Select salad ingredients</h2> */}
            <div className='d-flex justify-content-between mt-4 mb-4'>
              <SingleSelection
                name='foundation'
                items={this.foundations}
                changeHandler={e => this.handleFoundation(e)}
                value={this.state.foundation}
              />
              <SingleSelection
                name='protein'
                items={this.proteins}
                changeHandler={e => this.handleProtein(e)}
                value={this.state.protein}
              />
              <SingleSelection
                name='dressing'
                items={this.dressings}
                changeHandler={e => this.handleDressing(e)}
                value={this.state.dressing}
              />
            </div>
            <Extras
              items={this.extras}
              handleExtras={e => this.handleExtras(e)}
              extras={this.state.extras}
            />
            <div className='col d-flex justify-content-center mt-4'>
              <input
                type='submit'
                value='Submit'
                className='btn btn-primary btn-lg'
                // disabled={
                //   !(
                //     this.state.foundation &&
                //     this.state.protein &&
                //     this.state.dressing
                //   )
                // }
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default ComposeSalad

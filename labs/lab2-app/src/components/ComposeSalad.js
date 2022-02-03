import { Component } from 'react'
import SingleSelection from './SingleSelection'
import Extras from './Extras'

class ComposeSalad extends Component {
  constructor(props) {
    super(props)
    this.submitForm = this.props.submitHandler
    this.state = { foundation: '', protein: '', dressing: '', extras: {} }
    this.handleFoundation = this.handleFoundation.bind(this)
    this.handleProtein = this.handleProtein.bind(this)
    this.handleDressing = this.handleDressing.bind(this)
    this.handleExtras = this.handleExtras.bind(this)
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

  submitAndReset(event, ingredients) {
    this.submitForm(event, ingredients)
    this.setState({ foundation: '', protein: '', dressing: '', extras: {} })
  }

  render() {
    const inventory = this.props.inventory
    const singleSelections = Object.values(this.state).slice(0, -1)
    const selectedExtras = Object.keys(this.state.extras).filter(
      key => this.state.extras[key]
    )
    const selectedIngredients = singleSelections.concat(selectedExtras)

    const extras = Object.keys(inventory).filter(key => inventory[key].extra)
    const foundations = Object.keys(inventory).filter(
      key => inventory[key].foundation
    )
    const proteins = Object.keys(inventory).filter(
      key => inventory[key].protein
    )
    const dressings = Object.keys(inventory).filter(
      key => inventory[key].dressing
    )
    return (
      <div className='container col-12'>
        <div className='row h-200 p-5 bg-light border rounded-3'>
          <form
            onSubmit={event => this.submitAndReset(event, selectedIngredients)}
          >
            <h2 className='text-center'>Välj innehållet i din sallad</h2>
            <div className='d-flex justify-content-between mt-4 mb-4'>
              <SingleSelection
                name='foundation'
                items={foundations}
                changeHandler={this.handleFoundation}
                value={this.state.foundation}
              />
              <SingleSelection
                name='protein'
                items={proteins}
                changeHandler={this.handleProtein}
                value={this.state.protein}
              />
              <SingleSelection
                name='dressing'
                items={dressings}
                changeHandler={this.handleDressing}
                value={this.state.dressing}
              />
            </div>
            <Extras
              items={extras}
              handleExtras={this.handleExtras}
              extras={this.state.extras}
            />
            <div className='col d-flex justify-content-center mt-4'>
              <input
                type='submit'
                value='Submit'
                className='btn btn-primary btn-lg'
                disabled={
                  !(
                    this.state.foundation &&
                    this.state.protein &&
                    this.state.dressing
                  )
                }
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default ComposeSalad

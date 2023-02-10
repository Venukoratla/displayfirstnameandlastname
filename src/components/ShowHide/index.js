// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, second: false}

  firstName = () => {
    this.setState(prevState => ({first: !prevState.first}))
  }

  secondName = () => {
    this.setState(prevState => ({second: !prevState.second}))
  }

  render() {
    const {first, second} = this.state

    return (
      <div className="first-container">
        <div>
          <h1 className="heading">Show/Hide</h1>
          <div className="second-container">
            <div className="third-container">
              <button type="button" className="button" onClick={this.firstName}>
                Show/Hide Firstname
              </button>
              {first ? <p className="name">Joe</p> : null}
            </div>
            <div className="third-container">
              <button
                type="button"
                className="button"
                onClick={this.secondName}
              >
                Show/Hide Lastname
              </button>
              {second ? <p className="name">Jonas</p> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

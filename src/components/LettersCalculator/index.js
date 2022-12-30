// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  countingCharacters = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="calculator-bg-container">
        <div className="flex-container">
          <div className="counting-char-container">
            <h1 className="main-heading">
              Calculate the <br /> Letters you <br /> enter
            </h1>
            <lable className="text-lable">Enter the phrase</lable>
            <br />
            <input
              type="text"
              placeholder="Enter the phrase"
              className="input-element"
              onChange={this.countingCharacters}
            />
            <div className="total-char-container">
              <h1 className="count-heading">No. of letters: {count}</h1>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calculator-img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator

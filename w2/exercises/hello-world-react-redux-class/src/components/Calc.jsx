import React, { Component } from 'react'

class Calc extends Component {
  render() {
    return (
      <div>
        <h1>React Calculator</h1>
        <p className="lead">Use me to make math work</p>
        <hr/><br/>
        <h2>
          <span>Current Value:</span>
          <span>&nbsp;</span>
          <span><em>{ this.props.value }</em></span>
        </h2>
        <br/><br/>
        <input className="" id="number"></input>
        <br/><br/>
        <button
          className="btn btn-primary btn-lg"
          onClick={ this.props.add }
        >ADD</button>&nbsp;
        <button
          className="btn btn-primary btn-lg"
          onClick={ this.props.sub }
        >SUB</button>&nbsp;
        <button
          className="btn btn-primary btn-lg"
          onClick={ this.props.mul }
        >MUL</button>&nbsp;
        <button
          className="btn btn-primary btn-lg"
          onClick={ this.props.div }
        >DIV</button>&nbsp;
      </div>
    )
  }
}

export default Calc

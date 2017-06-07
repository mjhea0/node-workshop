import React from 'react'

const Child = (props) => {
  return (
    <div>
      <h2>Functional Child Component</h2>
      <button
        className="btn btn-primary"
        onClick={ props.onIncrement }
      >+</button>
    </div>
  )
}

export default Child

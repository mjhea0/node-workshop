import React from 'react'

const Child = (props) => {
  return (
    <div>
      <h2>Functional Child Component</h2>
      <button
        className="btn btn-primary"
        onClick={ props.onDecrement }
      >-</button>
    </div>
  )
}

export default Child

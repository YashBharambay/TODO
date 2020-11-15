import React from 'react'
import "./css/FilterButton.css"




function FilterButton(props) {
  






    return (
      <button
      type="button"
      className="filterbutton"
      aria-pressed={props.isPressed}
      onClick={() => props.setfilter(props.name)}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
    )
}

export default FilterButton

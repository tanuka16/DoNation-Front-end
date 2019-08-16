import React from 'react'

const Filter = (props) => {
  console.log(props);
  return(
    <div>
    <label>
      <strong>State:</strong>
       {/* in order to change what i'm sending up, I'll wrape onChange in an enormous function */}
      <select onChange={(e)=>props.setStateTerm(e.target.value)} value={props.stateTerm}>
        <option value="Connecticut">Connecticut</option>
        <option value="New York">New York</option>
        <option value="Washington">Washington</option>            //still see ALL at the top because I hard coded it in the state filter
        <option value="Georgia">Georgia</option>
        <option value="All">All</option>
      </select>

     <strong>Category:</strong>
      <select onChange={(e)=>props.setCategoryTerm(e.target.value)} value={props.categoryTerm}>
        <option value="Health">Health</option>
        <option value="Education">Education</option>
        <option value="Protection">Protection</option>            //still see ALL at the top because I hard coded it in the state filter
        <option value="Organization">Organization</option>
        <option value="All">All</option>
      </select>


    </label>
    </div>
  )
}
export default Filter;

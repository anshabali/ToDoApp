import React from 'react'

function Ex(props) {

  return (
    <div>
      <input type="text" placeholder={props.placeholder}
            value={props.nt}
            onChange={props.hic}
            style={{backgroundColor:props.bc}}/>
            
    </div>
  )
}

export default Ex

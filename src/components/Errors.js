import React from 'react'

const Errors = (value) => {
  return (
    <div>
        {value&&(
            <div className='error'>{value}</div>
        )}      
    </div>
  )
}

export default Errors

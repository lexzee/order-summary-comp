import React from 'react'

const Button = ({value, className}) => {
  return (
    <div className={`btn ${className}`}>
      {value}
    </div>
  )
}

export default Button
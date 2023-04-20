import React from 'react'
import { Link } from 'react-router-dom'

const Preview = () => {
  return (
    <div>Preview
        <nav>
            <Link to={'/preview'}>preview</Link>
        </nav>
    </div>
  )
}

export default Preview
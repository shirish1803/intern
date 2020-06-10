import React from 'react'
import './style.css'
import Card from '../Card'

const Rightside = (props) => {
  return (
    <div className="leftsideContainer">
        <Card>
            <div className="container">
            <h6>sub-heading</h6>
            <hr/>
            line 1
            <hr/>
            line 2
            <hr/>
            line 3
            <hr/>
            </div>
            
        </Card>
    </div>
  )
}

export default Rightside
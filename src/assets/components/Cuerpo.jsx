import React from 'react'
import Graficos from './Graficos'
import '../css/cuerpo.css'

function Cuerpo() {
  return (
    <div>
      <div className="cuerpo">
        <h2 className='texto'>Spending - Last 7 days</h2>
        <Graficos />
        <br />
        <hr />
        <div className="final">
                <div>
                    <h5>Total this month</h5>
                    <h1>$478.33</h1>
                </div>
                <div>
                    <h4>+2.4%</h4>
                    <h5>from last month</h5>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Cuerpo
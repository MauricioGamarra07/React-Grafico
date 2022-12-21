import React from 'react'
import '../css/encabezado.css'
import logo from '../images/logo.svg'

function Encabezado() {
    return (
        <div>
            <div className="cont-coral">
                <div>
                    <h5>My balance</h5>
                    <h2>$921.48</h2>
                </div>
                <div>
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Encabezado
import React from 'react'
import '../css/Graficos.css'

function Graficos() {

  const cambiarEstadoMonto = (sibling) => {
    if (sibling.style.display == "none"){
      sibling.style.display = "block";
    }
    else if (sibling.style.display == "block"){
      sibling.style.display = "none";
    }
  }

  return (
    <div>
      <div className="graficos">
        <div className='fila'>
          <div className="monto" style={{display: "none"}}>
            <h5>$17.45</h5>
          </div>
          <div className="grafico1" onClick={(e) => {
            let sibling = e.target.previousElementSibling;
            cambiarEstadoMonto(sibling);
          }}></div>
          <h5>mon</h5>
        </div>
        <div className='fila'>
          <div className="monto" style={{display: "none"}}>
            <h5>$34.91</h5>
          </div>
          <div className="grafico2" onClick={(e) => {
            let sibling = e.target.previousElementSibling;
            cambiarEstadoMonto(sibling);
          }}></div>
          <h5>tue</h5>
        </div>
        <div className='fila'>
          <div className="monto" style={{display: "none"}}>
            <h5>$52.36</h5>
          </div>
          <div className="grafico3" onClick={(e) => {
            let sibling = e.target.previousElementSibling;
            cambiarEstadoMonto(sibling);
          }}></div>
          <h5>wed</h5>
        </div>
        <div className='fila'>
          <div className="monto" style={{display: "none"}}>
            <h5>$31.07</h5>
          </div>
          <div className="grafico4" onClick={(e) => {
            let sibling = e.target.previousElementSibling;
            cambiarEstadoMonto(sibling);
          }}></div>
          <h5>thu</h5>
        </div>
        <div className='fila'>
          <div className="monto" style={{display: "none"}}>
            <h5>$23.39</h5>
          </div>
          <div className="grafico5" onClick={(e) => {
            let sibling = e.target.previousElementSibling;
            cambiarEstadoMonto(sibling);
          }}></div>
          <h5>fri</h5>
        </div>
        <div className='fila'>
          <div className="monto" style={{display: "none"}}>
            <h5>$43.28</h5>
          </div>
          <div className="grafico6" onClick={(e) => {
            let sibling = e.target.previousElementSibling;
            cambiarEstadoMonto(sibling);
          }}></div>
          <h5>sat</h5>
        </div>
        <div className='fila'>
          <div className="monto" style={{display: "none"}}>
            <h5>$25.48</h5>
          </div>
          <div className="grafico7" onClick={(e) => {
            let sibling = e.target.previousElementSibling;
            cambiarEstadoMonto(sibling);
          }}></div>
          <h5>sun</h5>
        </div>
      </div>
    </div>
  )
}

export default Graficos
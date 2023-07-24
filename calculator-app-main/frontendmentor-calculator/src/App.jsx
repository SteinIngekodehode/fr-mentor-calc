import { useState } from 'react'
import { evaluate } from 'mathjs'




const signs = [ "-", "+", "*", "/" ]; 

function App() {
  
  const [active, setActive] = useState("");

 

  function handleClick(value) {
    if (
      (signs.includes(value) && active ==="") || (signs.includes(value) && signs.includes(active.slice(-1)))
    )
    return;

    if (value === '=') {
      setActive((current) => evaluate(current).toString());

      return;
    }
    setActive(active+value);
  }

  function handleReset() {
    setActive("");

  }

  function handleDelete() {
    setActive((current) => current.slice(0, -1) );
  }
  

  return (
    <>
      <div className="container">
        <div className="numbers">
          <span className='numb'>1</span>
          <span className='numb'>2</span>
          <span className='numb'>3</span>
        </div>
        <header>

          <h1>calc</h1>


          <div className='buttons'>
            <span className="theme">THEME</span>
            <span className='button-wrap'>
              <button id="theme-dark"
                onClick={() => document.body.setAttribute("data-theme", "dark")}></button>

              <button id="theme-light"
                onClick={() => document.body.setAttribute("data-theme", "light")}></button>

              <button id="theme-violet"
                onClick={() => document.body.setAttribute("data-theme", "violet")}></button></span>
          </div></header>
        <div className="display">
          <div className='active-display'> {active || "0"}</div>

        </div>


        <div className='calculator-grid'>
          <button className onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button className="btn-del" onClick={handleDelete}>DEL</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("*")}>x</button>

          <button className='btn-reset' onClick={handleReset}>RESET</button>
          <button className='btn-equal' onClick={() => handleClick("=")}>=</button>





        </div>
      </div>
    </>
  )
}

export default App

import './App.css'

// 2 - css de componente
import MyComponent from './components/MyComponent';
// CSS inline dinamico
const n = 15

// 5 - classes dinamicas 
const redTitle = true;

import Title from "./components/Title";


function App() {
  return (
    <div className="App">
      {/* 1 - css global */}
      <h1>CSS no React</h1>
      {/* 2 - css de componente */}
      <MyComponent />
      <p>Pegou o CSS do componente</p>
      {/* 3 - inline style */}
      <p style={{color: "green", padding: "25px", borderTop: "1px  dotted blue"}}

      >Este elemento tem estilo inline
      </p>
      {/* 4 - inline style dinamico */}
      <h2  style={n > 10 ? {color: "purple"} : {color: "magenta"}}>
        CSS dinâmico
      </h2>

      <h2  style={n > 20 ? {color: "purple"} : {color: "magenta"}}>
        CSS dinâmico 2
      </h2>
      {/* 5 - classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter uma classe</h2>
      {/* 6 - css modules */}
      <Title />
    </div>
  )
}

export default App

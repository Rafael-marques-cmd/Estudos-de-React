import './App.css'
// 2 - importando componente
import FirstComponent from './components/FirstComponent'

// 4 - templete expression 
import TemplateExpression from './components/TemplateExpression';

// 5 - hierarquia de componentes
import MyComponent from './components/MyComponent';

// 6 - eventos
import Events from'./components/Events';

function App() {
  // 3 - comentarios
  return <div className="App">
    <h1>Fundamentos do React</h1>
    {/* 3 - comentario JSX */}
    <FirstComponent />
    <TemplateExpression/>
    <MyComponent/>
    <Events />
  </div>

}

export default App

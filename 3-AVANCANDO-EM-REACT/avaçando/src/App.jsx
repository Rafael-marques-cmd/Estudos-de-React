import './App.css'

// 2 - imagem em assets
import city from './assets/city.jpg';

// 3 - useState
import Data from './components/Data';

// 4 - renderização de lista
import ListRender from './components/ListRender';

// 7 - render condicional
import ConditionalRender from './components/ConditionalRender';

// 8 - props
import ShowUserName from './components/ShowUserName';

// 9 - desestruturando props
import CarDetals from './components/CarDetals';

function App() {
  return <div className="App" style={{paddingBottom: "500px"}}>
    <h1>Avançando em React</h1>
    {/* 1 - imagem em public */}
    <img src="/img1.jpg" alt="Alguma imagem" />
    {/* 2 - imagem em assets */}
    <img src={city} alt="alguma cidade" />
    {/* 3 - useState */} 
    <Data />
    {/* 4 - render de lista */}
    <ListRender/>
    {/* 7 - render condicional */}
    <ConditionalRender />
    {/* 8 - props */}
    <ShowUserName name="João"/>
    {/* 9 - desestruturando props */}
    <CarDetals brand="VW" km={999} color="Vermelho" />
  </div>
}   

export default App

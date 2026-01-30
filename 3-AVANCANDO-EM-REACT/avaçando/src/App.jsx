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

// 11 - renderização de listas com componente
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  {id: 2, brand: "KIA", color: "Preto", km: 23261 },
  {id: 3, brand: "Rennault", color: "Azul", km: 45419 },
];

// 12 - fragments
import Frafment from './components/Frafment';

// 13 - children
import Container from './components/Container';

// 14 - funcao em prop
import ExecuteFunction from './components/ExecuteFunction';

// 15 - state lift
import { useState } from 'react';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';



function App() {
  // 14 - função em prop
  function showMessage() {
    console.log("Evento do componente pai");
  }

// 15 - state lift
const [message, setMessage] = useState("");

const handleMessage = (msg) => {
  setMessage(msg);
};


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
    {/* 10 - reaproveitamento de componentes */}
    <CarDetals brand="Fiat" km={251619} color="Branco" />
    <CarDetals km={1236} color="Verde" brand="Audi" />
    {/* 11 - renderização de lista com componente */}
    {cars.map((car) => (
      <CarDetals 
      key={car.id} 
      brand={car.brand} 
      color={car.color} 
      km={car.km}/>
    ))}
    {/* 12 - fragments */}
    <Frafment />
    {/* 13 - children */}
    <Container>
      <div>
        <h1>Teste</h1>
        <p>Meu container</p>
      </div>
    </Container>
    {/* 14 - função em prop */}
    <ExecuteFunction myFunction={showMessage}/>
    {/* 15 - state lift */}
    <Message msg={message} />
    <ChangeMessage handleMessage={handleMessage}/>
  </div>
}   

export default App;

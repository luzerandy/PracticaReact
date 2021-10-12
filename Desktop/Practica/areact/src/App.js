import React,{Component} from 'react';
import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Header from './Components/Header';

class App extends Component{
  render(){
    const temas=["Tipos de componentes",
    "Contenedores",
    "Usar mas de un componente",
    "Funciones",
    "Props",
    "Prop-Types",
    "DefaultProps"]
  return (
    <div className="App">
      <Banner texto="Desarollo de Aplicaciones para Dispositivos Móviles"/>
      <Header/>
      <Banner texto="8/Oct/2021"/>
      <Body
          practica="Práctica 1 - Unidad 2"
          temas = {temas}
      />
      <Footer pie="Copyright. &copy; Todos los derechos reservados."/>
    </div>
  )};
}

export default App;

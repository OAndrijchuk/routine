import React from 'react';
import styles from './App.module.css';
import Filter from './components/Filter/Filter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Routine from './components/Routine/Routine';


function App(props) {
  return (
    <div className={styles.conteiner}>
      <Header/>
      <Filter dispatch={props.dispatch} mastersPerson ={props.mastersPerson} dataText={props.dataText}/>
      <Routine/>
      <Footer/>
    </div>
  );
}

export default App;

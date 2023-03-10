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
      <Filter store = {props.store}/>
      <Routine/>
      <Footer/>
    </div>
  );
}

export default App;

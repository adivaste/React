import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Body from './components/Body';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {

  const [itemsData, setItemsData] = useState([]);
  const [items, setItems] = useState([]);

  return (
    <div className="App h-full">
             <Header />
             <Form setItems={setItems} />
             <Body items={items} setItems={setItems} />
             <Footer items={items}/>
    </div>
  );
}

export default App;



import Header from './components/Header'
import Footer from './components/Footer'
import RestaurantComponent from './components/Restaurants'
import './fonts/Metropolis.woff2'
import './styles/index.css'
import { useState } from 'react'
import restaurantsData from "./constants.js"

function App() {
  
  const [query, setQuery] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantsData);

  return (
    <div className="App">
      <Header query={query} setQuery={setQuery} restaurants={restaurants} setRestaurants={setRestaurants}/>
      <RestaurantComponent query={query} setQuery={setQuery} restaurants={restaurants} setRestaurants={setRestaurants}/>
      <Footer />
    </div>
  );
}

export default App;

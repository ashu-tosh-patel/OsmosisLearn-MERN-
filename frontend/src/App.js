import './App.css';
import { BrowserRouter } from 'react-router-dom'

//importing components
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Filter from './components/Filter';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Filter />
        <Body />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

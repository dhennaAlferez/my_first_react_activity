import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';

import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Main>
            <Router path="/Home.js" component={Home} />
            <Router path="/About.js" component={About} />
            <Router path="/Blog.js" component={Blog} />
            <Router path="/Contact.js" component={Contact} />
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

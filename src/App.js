import './App.css';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';

function App(children) {
  return (
    <>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;

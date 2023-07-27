import {Outlet} from 'react-router-dom'
import { GlobalStyle } from './style/global';
import Header from './components/Header';
import Footer from './components/Footer/footer';
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </>
  
  );
}

export default App;

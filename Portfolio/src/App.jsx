import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      {/* Header component */}
      <Header/>
      {/* Main content area with a margin-top to avoid overlap with the fixed header */}
      <main  style={{ marginTop: '150px', backgroundColor: 'var(--custom-color-eerieBlack)' }}>
        <Outlet/>
      </main>
      {/* Footer component */}
      <Footer/>
    </>
  )
}

export default App;

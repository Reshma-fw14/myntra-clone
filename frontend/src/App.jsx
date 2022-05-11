
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import SlideShow from './components/SlideShow/SlideShow';
import ViewAllProducts from './components/ViewAllProducts/ViewAllProducts';
import AllRoutes from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SlideShow/>
      <AllRoutes/>
    </div>
  );
}

export default App;


import Home from './components/Home/Home';
import Kurti from './components/Home/Kurtis/Kurti';
import Navbar from './components/Navbar/Navbar';
import SlideShow from './components/Home/SlideShow1/SlideShow';
import ViewAllProducts from './components/ViewAllProducts/ViewAllProducts';
import AllRoutes from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;

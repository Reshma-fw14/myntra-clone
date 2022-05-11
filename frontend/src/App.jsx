import Navbar from './components/Navbar/Navbar';
import AllRoutes from './Routes/Routes';
import { useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { addKurti, addShirt, addGirlDress } from './Redux/Actions/Action';
import axios from 'axios';

function App() {
  const dispatch=useDispatch();

  useEffect(()=>{
    getKurti();
    getShirt();
    getGirlDress();
  },[])
  
  const getKurti=()=>{
    axios.get('http://localhost:3001/kurti').then(({data})=>{
      dispatch(addKurti(data))
    })
  }
  const getShirt=()=>{
    axios.get('http://localhost:3001/shirts').then(({data})=>{
      dispatch(addShirt(data))
    })
  }
  const getGirlDress=()=>{
    axios.get('http://localhost:3001/girlsdresses').then(({data})=>{
      dispatch(addGirlDress(data))
    })
  }
  
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;

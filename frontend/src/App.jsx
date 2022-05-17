import AllRoutes from "./components/allRoutes/Routes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  let props={
    url:'http://localhost:3002/fashion'
}
  return (
    <>
    <Navbar data={props.url}/>
    <AllRoutes />
    </>
  );
}

export default App;

import AllRoutes from "./components/allRoutes/Routes";
import Navbar from "./components/Navbar/Navbar";
import AddToCartButton from "./components/AddToCartButton"

function App() {
  let props={
    url:'http://localhost:4000/fashion'
}
  return (
    <>
    <Navbar data={props.url}/>
    <AllRoutes />
    </>
  );
}

export default App;

import AllRoutes from "./components/allRoutes/Routes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  let props={
    url:'https://myntra-application.herokuapp.com/fashion'
}

  return (
    <>
    <Navbar data={props.url}/>
    <AllRoutes />
    </>
  );
}

export default App;


import AllRoutes from "./components/allRoutes/Routes";
import Navbar from "./components/Navbar/Navbar";

function App() {
  let props={
    url:'http://localhost:3002/fashion'
}
  return (
    <>
    <Navbar data={props.url}/>
    {/* <video>
        <source src="https://www.gap.com/Asset_Archive/GPWeb/content/0028/744/304/assets/UNREC_3/ALL_22_SP1_GOL_Denim_06_1138x700.mp4" type="video/mp4"/>
      </video> */}
    <AllRoutes />
    </>
  );
}

export default App;

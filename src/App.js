
import "../src/styles/globals.css";
import {Provider} from "react-redux";
import store from "./redux/store/store";
import Home from "component/home";
function App() {
  return (
   <>
	   <Provider store={store}>
           <Home/>
	   </Provider>
   </>
  );
}

export default App;

'use client'
import Home from "@/component/home";
import "@/styles/globals.css";
import {Provider} from "react-redux";
import {store} from "../redux/store/store";
export default function HomePage() {
  return (
	  <>
		  <Provider store={store}>
		     <Home/>
		  </Provider>
	  </>
  );
}

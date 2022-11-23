import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Fpage from "./Screens/Fpage";
import SignIn from "./Screens/Signin";
import SignUp from "./Screens/Signup";
import Home from "./Screens/Home";

function App() {
const email = localStorage.getItem("email");
return (
	<div className="App">
	<BrowserRouter>
		<Routes>
		<Route path="/" element={<Fpage />} />	
		{/* <Route path="/Fpage" element={<Fpage />} /> */}
		<Route path="/Signin" element={<SignIn />} />
		<Route path="/Signup" element={<SignUp />} />
		<Route
			path="/Home"
			 element={email ? <Home /> : <Navigate to="/Signin" />}
		/>
		</Routes>
	</BrowserRouter>
	</div>
);
}

export default App;

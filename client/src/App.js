import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import NavBar from "./components/Navbar/navbar";
import HomePage from "./components/Home/home";
import BlogList from "./components/Blog/bloglist";
import BlogForm from "./components/Blog/blogFrom";


function App() {
	const user = localStorage.getItem("token");

	return (
		<>
		<NavBar/>
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/home" exact element={<HomePage />} />
			<Route path="/blog" exact element={<BlogForm />} />
			
		</Routes>
		</>
	);
}

export default App;

import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import './App.css';

import NavBar from "./pages/layout"
import Home from "./pages/home"
import AboutMe from "./pages/about";
import Contact from './pages/contact';
import NotFound from './pages/notfound';

import { menuChangingContext, transitionContext } from './pages/contextExport';

function isDark(dark: boolean) {
	if(dark) return ' night'
	else return ''
}

type contentProp = {
    dark: boolean;
    setTheme: React.Dispatch<React.SetStateAction<boolean>>;
    menuButton: string;
    menuChange: React.Dispatch<React.SetStateAction<string>>;
}

function Content({prop}:{prop: contentProp}) {
	const _location = useLocation()
	const [location, changeLocation] = useState(_location)

	return(
		<transitionContext.Provider value={[_location, location, changeLocation]}>
			<Routes location={location}>
				<Route path="/" element={ <NavBar {...prop}/> }>
					<Route index element={<Home/>} />
					<Route path="/about" element={<AboutMe/>} />
					<Route path="/contact" element={<Contact/>} />
				</Route>
				<Route path='*' element = {<NotFound/>}/>
			</Routes>
		</transitionContext.Provider>
		)
}

export default function App() {
	
	const [dark, setTheme] = useState(
		():boolean=>{
			const _dark = localStorage.getItem('dark');
			if(_dark===null) return true;
			else return (_dark==='true')?true:false;
		}
	);
	const menuState = useState('≡');
	const navbarprops = {dark: dark, setTheme: setTheme, menuButton: menuState[0], menuChange: menuState[1]}

	useEffect(
		()=>localStorage.setItem('dark', dark.toString()),
		[dark]
	)

	return (
		<div className={'App' + isDark(dark)}>
			<menuChangingContext.Provider value={menuState}>
				<Router>
					<Content prop={navbarprops}/>
				</Router>
			</menuChangingContext.Provider>
		</div>
	);
}
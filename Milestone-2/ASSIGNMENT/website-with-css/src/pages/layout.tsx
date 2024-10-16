import { Link, Outlet } from "react-router-dom";
import "../styles/layout.css";
import { useState } from "react";
import React from 'react'

interface Props {
	to: string;
	children: React.ReactNode;
	className: string;
	onclick: React.MouseEventHandler<HTMLAnchorElement>
}

interface NavBarProps{
	dark: boolean,
	setTheme: React.Dispatch<React.SetStateAction<boolean>>,
	menuButton:string,
	menuChange: React.Dispatch<React.SetStateAction<string>>
}

function Linker(props: Props) {
	return (
		<Link to={props.to} className={props.className} onClick={props.onclick}>
			{props.children}
		</Link>
		)
}

function openClose(button: string, menuChange: React.Dispatch<React.SetStateAction<string>>){
	if(button==="≡") menuChange("×")
	else menuChange("≡")
}

export default function NavBar({ dark, setTheme, menuButton, menuChange }:NavBarProps) {
	const [button, ChangeButton] = useState(
		()=>{
			if(dark) return 'light_mode'
			else return 'dark_mode'
		}
	);
	//the purpose of T is to prevent animation of Night Mode when the page loads for the first time
	const [T, changeT] = useState('');
	
	function themeChange(){
		setTheme(!dark);
		localStorage.setItem('dark', (!dark).toString())
		if(!dark){
			changeT(' dark')
			setTimeout(()=>ChangeButton('light_mode'), 200)
		} else {
			changeT(' light')
			setTimeout(()=>ChangeButton('dark_mode'), 200)
		}
		openClose(menuButton, menuChange)
	}

	const props = {
		className: 'navItem',
		onclick: ()=>openClose(menuButton, menuChange)
	}
	
	return (
		<>
			<div id='menuButtonCarrier'>
				<button className="navItem" id='menuButton' onClick={()=>openClose(menuButton, menuChange)}>
					{menuButton}
				</button>
			</div>
			<div className={"navBar"+(menuButton==="≡"? " closed": "")}>
				<Linker to="/" {...props}>Home</Linker>
				<Linker to="/about"{...props}>About Me</Linker>
				<Linker to="/contact" {...props}>Contact</Linker>
				<button id="Toggle" className="navItem" onClick={themeChange}>
					<span className={"material-symbols-outlined"+(T)} title={!dark?"Dark Mode":"Light Mode"}>
						{button}
					</span>
				</button>
			</div>
			<Outlet/ >
		</>
	)
}
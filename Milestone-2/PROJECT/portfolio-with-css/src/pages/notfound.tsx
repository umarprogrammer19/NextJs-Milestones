import { Link } from "react-router-dom";

import Page from "./components"
import '../styles/notfound.css'

export default function NotFound(){
	return (
		<Page id='notfoundPage' className="centered">
			<div id='content'>
				<h1>Page Not Found</h1>
				<p>
					Hey there! Looks like this page hasn't been made yet.<br/>
					Feel free to <Link to='/contact'>contact</Link> me if you think it should be there.<br/>
				</p>
				<span>
					Go back to <Link to = '/'>Home</Link>
				</span>
			</div>
		</Page>
	)
}
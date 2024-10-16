import "../styles/home.css";
import { Link } from "react-router-dom";
import Page from "./components";

const links: { [key: string]: Array<string> } = {
	'github': ["https://www.github.com/umarprogrammer19", 'github'],
	'linkedin': ['https://www.linkedin.com/in/umar-farooq-42a8702b5/', 'linkedin'],
	'instagram': ["https://www.instagram.com/itx_umar_official01", 'instagram']
}

function Linker({ name }: { name: string }) {
	return (
		<a id={name}
			href={links[name][0]}
			target="_blank"
			rel="noopener noreferrer">
			<i className={"fa-brands fa-" + links[name][1]}></i>
		</a>
	)
}

const Home = () => {
	return (
		<Page id='homePage' className='centered' animated='#l1, #l2, a, #links' >
			<div id="content">
				<div id='text'>
					<p id="l1">Hello, I'm Umar Farooq</p>
					<p id="l2">Welcome to my portfolio page</p>
				</div>

				<div id='buttons'>
					<Link to="/contact" id='contact-me'>
						Contact Me
					</Link>

					<a id="downloadCV">
						Download CV
					</a>
				</div>

				<div id='links'>
					<Linker name="github" />
					<Linker name="linkedin" />
					<Linker name='instagram' />
				</div>
			</div>
		</Page>
	);
};

export default Home;
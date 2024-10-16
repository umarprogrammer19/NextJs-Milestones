import Page from './components'
import '../styles/about.css'

function Details({details}:{details:string}) {
	if (details==='Konnagar, Hooghly, West Bengal, India') {
		return (
		<a target='_blank' rel='noopener noreferrer'>
			{details}
		</a>
		)
	} else if (details==='umarofficial0121@gmail.com') {
		return (
		<a href='mailto:umarofficial0121@gmail.com' target='_blank' rel='noopener noreferrer'>
			{details}
		</a>
		)
	} else {
		return <>{details}</>
	}
}

function TR({head, details}: {head:string, details:string}){
	return (
		<tr>
			<th>{head}</th>
			<td className='colon'>:</td>
			<td>{Details({details})}</td>
		</tr>
	)
}

export default function AboutMe(){
	return (
		<Page id='aboutPage' animated="#summary, #details, img[alt='Umar']" >
			<div id='content'>
				<div id='summary'>
				<h3 id='summary-title'>Summary</h3>
					<span id='summary-content'>
						<img  src='/image-self.jpeg' alt='Subhranil Ghoshal' />
						My name is Umar, and I am a skilled front-end developer. I specialize in using HTML, CSS, JavaScript, TypeScript, React, and Next.js to create responsive and modern web interfaces. My focus is on developing clean, user-friendly applications that provide smooth experiences across all devices. I enjoy transforming creative ideas into functional and engaging digital solutions.
					</span>
				</div>

				<div id='details'>
					<h3 id='details-title'>Details</h3>
					<table id='details-table'>
						<tbody>
							<TR head='Name' details='Umar Farooq'/>
							<TR head='Age' details='17'/>
							<TR head='Address' details='Pakistan, Karachi'/>
							<TR head='Email' details='umarofficial0121@gmail.com'/>
						</tbody>
					</table>
				</div>
			</div>
		</Page>
	)
}
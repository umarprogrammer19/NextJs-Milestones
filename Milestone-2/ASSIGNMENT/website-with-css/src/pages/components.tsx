import React, { ReactNode, useContext, useEffect, useRef, useState } from "react";
import { menuChangingContext, transitionContext } from './contextExport'

interface PageProps {
	id: string;
	className?: string;
	animated?: string;
	children?: ReactNode;
}

const headers: { [key: string]: string } = {
	'homePage': '',
	'aboutPage': 'About Me',
	'contactPage': 'Contact Me',
	'notfoundPage': '',
}

const PageHeader = ({ title }: { title: string }) => <div className="header"><h1>{title}</h1></div>

function skipAnimation(q: string = '', r: React.RefObject<HTMLDivElement>) {
	if (q === '') q = '.page.incoming .header > h1';
	else q = '.page.incoming .header > h1, ' + q;

	Array.prototype.slice.call(r.current?.querySelectorAll(q)).forEach((item: HTMLElement) => {
		const anim = getComputedStyle(item, null).getPropertyValue('animation');
		if (anim !== 'none') { item.style.animation = 'none' }
	})
}


function Page({ id, className = '', animated = '', children }: (PageProps)) {
	const r = useRef<HTMLDivElement>(null);
	const [menuButton, menuChange] = useContext(menuChangingContext) as [string, React.Dispatch<React.SetStateAction<string>>];
	useEffect(
		() => {
			const page = document.getElementsByClassName('page')[0] as HTMLElement
			page.style.opacity = '1';
			return (() => {
				page.style.opacity = '0'
			}
			)
		}
	)

	const [_location, location, changeLocation] = useContext(transitionContext) as unknown as [Location, Location, React.Dispatch<React.SetStateAction<Location>>]
	const [transitionStage, changeStage] = useState('incoming')

	useEffect(
		() => {
			if (_location !== location)
				changeStage('outgoing');
		},
		[_location, location, transitionStage]
	)

	const m = window.matchMedia('(max-width: 480px)');

	function handleClick(m: MediaQueryList) {
		skipAnimation(animated, r);
		if (m.matches) {
			if (menuButton === '×') menuChange('≡');
		}
	}

	m.addEventListener('mouse', () => handleClick(m))

	return (
		<div
			ref={r}
			id={id}
			className={className + ` page ${transitionStage}`}
			onClick={() => handleClick(m)}
			onAnimationEnd={() => {
				if (transitionStage === 'outgoing') {
					changeStage('incoming')
					changeLocation(_location)
				}
			}}
		>
			{headers[id] === '' ? <></> : <PageHeader title={headers[id]} />}
			{children}
		</div>
	)
}

export default Page;
import React, {useContext} from 'react';
import {FaLinkedinIn, FaTwitter, FaGithub, FaDev, FaEnvelope} from 'react-icons/fa';
import {Link} from 'gatsby';
import {Toggle, Aside, Nav, Social, Icon} from './offcanvas.style';
import {Store} from 'store';

const sites = [
	{url: `https://www.linkedin.com/in/tim-smith-1a651aa0/`, title: `LinkedIn`, icon: <FaLinkedinIn />},
	{url: `https://twitter.com/iam_timsmith`, title: `Twitter`, icon: <FaTwitter />},
	{url: `https://github.com/iamtimsmith`, title: `Github`, icon: <FaGithub />},
	{url: `https://dev.to/iam_timsmith`, title: `Dev.to`, icon: <FaDev />},
	{url: `mailto:tim@iamtimsmith.com`, title: `Email`, icon: <FaEnvelope />}
];

export const Offcanvas = () => {
	const {store, setStore} = useContext(Store);

	const handleToggle = (show: boolean = !store.offcanvas) => {
		setStore({offcanvas: show});
	}

	return (
		<React.Fragment>
			<Toggle onClick={() => handleToggle()} show={store.offcanvas}>
				<span />
				<span />
			</Toggle>
			<Aside show={store.offcanvas}>
				<Nav>
					<Link to='/' onClick={() => handleToggle(false)}>Home</Link>
					<Link to='/projects' onClick={() => handleToggle(false)}>Projects</Link>
					<Link to='/blog' onClick={() => handleToggle(false)}>Blog</Link>
				</Nav>
				<Social>
					{sites.map((site, key) => (
						<Icon
							key={key}
							href={site.url}
							aria-label={site.title}
							target='_blank'
							rel='noopenner nofollow'
						>{site.icon}</Icon>
					))}
				</Social>
			</Aside>
		</React.Fragment>
	);
};

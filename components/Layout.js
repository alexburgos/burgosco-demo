import { Fragment } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Toggler from '../components/Toggler';


const Layout = ({theme, themeToggler, children}) => (
	<Fragment>
		<Head>
			<title>Home</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Nav />
		<Toggler theme={theme} themeToggler={themeToggler}/>
		{children}
		<Footer />
	</Fragment>
);

export default Layout;

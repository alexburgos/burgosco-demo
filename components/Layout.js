import { Fragment } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import layout from '../styles/layout';


const Layout = props => (
	<Fragment>
    <Head>
			<title>Home</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
    <Nav/>
    {props.children}
    <Footer />
		<style jsx global>{layout}</style>
	</Fragment>
);

export default Layout;

import Nav from '../components/Nav';
import Footer from '../components/Footer';
import layout from '../styles/layout';


const Layout = props => (
	<div>
    <Nav/>
    {props.children}
    <Footer />
		<style jsx global>{layout}</style>
	</div>
);

export default Layout;

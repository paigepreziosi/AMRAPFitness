import { Link } from 'react-router-dom';

export default function Navbar() {
    const navStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: 'white',
        color: 'black',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'black',
        margin: '5px 0',
        fontSize: '18px',
    };

    return (
        <nav style={navStyle}>
            <Link to='/' style={linkStyle}>Home</Link>
            <Link to='/register' style={linkStyle}>Register</Link>
            <Link to='/login' style={linkStyle}>Login</Link>
        </nav>
    );
}

import './App.css';
import Container from '@mui/material/Container';
import AboutMe from './components/aboutMe';
import { Link } from 'react-router-dom';

function App() {
    return (
        <Container maxWidth='md'>
            <Link to='/about'>About</Link>
        </Container>
    );
}

export default App;

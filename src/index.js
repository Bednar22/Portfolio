import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMe from './components/aboutMe';
import Container from '@mui/material/Container';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Homepage from './components/homepage';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar></Navbar>
            <Container className='main-container'>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='about' element={<AboutMe />} />
                    <Route path='projects' element={<Projects />} />
                </Routes>
            </Container>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

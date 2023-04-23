import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './src/components/Header';
import Navigation from './src/components/Navigation';
import AboutMe from './src/containers/AboutMe';
import Portfolio from './src/containers/Portfolio';
import Contact from './src/containers/Contact';
import Resume from './src/containers/Resume';
import Footer from './src/components/Footer';

import './src/assets/styles/style.css';

function App() {
    const [activeNavItem, setActiveNavItem] = useState('about-me');

    function handleNavItemClick(navItem) {
        setActiveNavItem(navItem);
    }

    return (
        <Router>
            <div className="app">
                <Header />
                <Navigation activeNavItem={activeNavItem} onNavItemClick={handleNavItemClick} />
                <main className="content">
                    <Route exact path="/" component={AboutMe} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
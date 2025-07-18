import React from "react";
import './Header.css';
import ParticlesBackground from "./ParticlesBackground";

const Header = () => {
    return (
        <header className="header">
            <div className="particles-background">
            <ParticlesBackground />
            </div>
            <div className="header-content">
                <h1>Автоэлектрик на выезд в Алматы</h1>
                
                </div>
            </header>
    );
};

export default Header;
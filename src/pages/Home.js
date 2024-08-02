import React from 'react';
import Header from '../components/Header';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <main>
                <section className="intro">
                    <h1>Discover, Connect, and Share Your Love for Books with Bindle</h1>
                    <a href="#" className="app-store-button">
                        <img src="/images/get_google.png" alt="Get it on Google Play" />
                    </a>
                </section>
                <section className="mockup">
                    <img src="/images/mockup.png" alt="Phone Mockup" />
                </section>
            </main>
        </div>
    );
};

export default Home;
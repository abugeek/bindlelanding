import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bindle - Home</title>
                <meta name="description" content="Discover, connect, and share your love for books with Bindle." />
                <meta property="og:title" content="Bindle - Home" />
                <meta property="og:description" content="Discover, connect, and share your love for books with Bindle." />
                <meta property="og:image" content="/images/mockup.png" />
                <meta property="og:url" content="https://bindle.uz" />
            </Helmet>
            <Header />
            <main>
                <section className="intro">
                    <h1>Discover, Connect, and Share Your Love for Books with Bindle</h1>
                    <a href="#" className="app-store-button">
                        <img src="/images/get_google.png" alt="Get it on Google Play" />
                    </a>
                </section>
                <section className="mockup">
                    <img src="public/images/mockup.webp" alt="Phone Mockup" />
                </section>
            </main>
        </div>
    );
};

export default Home;
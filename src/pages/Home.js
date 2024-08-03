import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import StoreButton from '../components/StoreButton';
import './Home.css';
import usePageTitle from '../hooks/usePageTitle';

const Home = () => {
    usePageTitle('Bindle - Home');
    return (
        <div>
            <Helmet>
                <title>Bindle - Home</title>
                <meta name="description" content="Discover, connect, and share your love for books with Bindle." />
                <meta property="og:title" content="Bindle - Home" />
                <meta property="og:description" content="Discover, connect, and share your love for books with Bindle." />
                <meta property="og:image" content="/images/mockup.webp" />
                <meta property="og:url" content="https://bindle.uz" />
            </Helmet>
            <Header />
            <main>
                <section className="intro">
                    <h1>Discover, Connect, and Share Your Love for Books with Bindle</h1>
                    <StoreButton
                        link="https://play.google.com/store/apps/details?id=com.example"
                        imgSrc="/images/get_google.png"
                        altText="Get it on Google Play"
                    />
                </section>
                <section className="mockup">
                    <img src="/images/mockup.webp" alt="Phone Mockup" />
                </section>
            </main>
        </div>
    );
};

export default Home;
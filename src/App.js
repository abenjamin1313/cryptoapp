import React, { Suspense, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Exchanges, Homepage, CryptoDetails, Cryptocurrencies, News } from './components';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';


function App() {

    return (
        <ErrorBoundary>
            <div className="app">
                <div className="navbar">
                    <Navbar />
                </div>
                <div className="main">
                    <Layout>
                        <div className="routes">
                            <Suspense fallback={<h1>loading routes...</h1>}>
                                <Routes>
                                    <Route exact path="/" element={<Homepage />} />
                                    <Route exact path="/exchanges" element={<Exchanges />} />
                                    <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
                                    <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
                                    <Route exact path="/news" element={<News />} />
                                </Routes>
                            </Suspense>
                        </div>
                    </Layout>
                    <div className="footer">
                        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
                            Crypto Currencies<br/>
                            All rights reserved
                        </Typography.Title>
                        <Space>
                            <Link to="/">Home</Link>
                            <Link to="/exchanges">Exchanges</Link>
                            <Link to="/news">News</Link>
                        </Space>
                    </div>
                </div> 
            </div>
        </ErrorBoundary>
    )
}

export default App

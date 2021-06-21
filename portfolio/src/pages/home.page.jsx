import React from "react";
import { BrowserRouter, Route, Switch, Routes, Link } from "react-router-dom";
import Header from '../components/header-home/header-home';
import Work from '../components/work/work.component';

function Home() {
    return(
        <div>
            <Header />
            <Work />
        </div>
    );
}

export default Home;
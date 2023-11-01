import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from './../Components/Nav/Nav';
import TopHalf from './../Components/TopHalf/TopHalf';
import BottomHalf from './../Components/BottomHalf/BottomHalf';

function HomePage() {





    return (
        <body>
            <Nav />
            <TopHalf />
            <BottomHalf />
        </body>
    )
}

export default HomePage;
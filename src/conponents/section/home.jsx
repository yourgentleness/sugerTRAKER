import React from 'react';
import MainStructure from '../commont/structure/MainStructure';
import Dasbord from './dasbord';
import SectionStructure from '../commont/structure/SectionStructure';

const Home = () => {
    return (
        <MainStructure>
            <Dasbord/>
            <SectionStructure>
                <h1>Home</h1>
            </SectionStructure>
        </MainStructure>
    );
}

export default Home;

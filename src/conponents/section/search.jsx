import React from 'react';
import MainStructure from '../commont/structure/MainStructure';
import Dasbord from './dasbord';
import SectionStructure from '../commont/structure/SectionStructure';

const Search = () => {
    return (
        <MainStructure>
            <Dasbord/>
            <SectionStructure>
                <h1>Search</h1>
            </SectionStructure>
        </MainStructure>
    );
}

export default Search;

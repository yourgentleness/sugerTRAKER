import React from 'react';
import MainStructure from '../commont/structure/MainStructure';
import Dasbord from './dasbord';
import SectionStructure from '../commont/structure/SectionStructure';

const Profile = () => {
    return (
        <MainStructure>
            <Dasbord/>
            <SectionStructure>
                <h1>Profile</h1>
            </SectionStructure>
        </MainStructure>
    );
}

export default Profile;

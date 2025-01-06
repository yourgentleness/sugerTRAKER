import React from 'react';

const MainStructure = ({children}) => {
    return (
        <main className='flex flex-col pt-5 md:flex-row justify-evenly gap-10'>
            {children}
        </main>            
    );
}

export default MainStructure;

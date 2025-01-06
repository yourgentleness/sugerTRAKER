import React from 'react';

const SectionStructure = ({children}) => {
    return (
        <section className='flex grow items-center justify-center bg-slate-500'>
            {children}
        </section>            
    );
}

export default SectionStructure;

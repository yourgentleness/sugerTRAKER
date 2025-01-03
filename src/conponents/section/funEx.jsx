import React from 'react';
import styled from 'styled-components'
import { Hinput } from '../../hooks/Hinput';
import { InputConponent } from '../../utils/input';

//  

const FunEx = () => {

    const {input, eventHandler} = Hinput();

    return (
        <>
        <div className='h-screen flex flex-col items-center justify-center gap-2.5 bg-slate-300'>
            <h1>Masukkan Text</h1>
            <h1 className='w-9/12 h-6 break-words text-center'>{input}</h1>
            <InputConponent onChange={eventHandler} />
        </div>
        </>
    );
}

export default FunEx;

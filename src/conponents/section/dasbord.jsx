import React from 'react';
import Navbar from '../commont/navbar/navbar';
import InfoIcon from '@mui/icons-material/Info';

const Dasbord = () => {
    return (
        <main>
            <Navbar/>
                <section className='flex flex-col gap-3'> 
                    <h1 className='text-2xl font-semibold text-center '>Selamat Datang, User</h1>
                    <div className='grid grid-cols-6 gap-6 px-3 py-5 text-md font-semibold rounded-lg bg-main-color text-white'>
                        <h2 className='col-start-1 col-end-7 text-center'>Konsumsi Gula Kamu Hari Ini</h2>
                        <p className='col-start-1 col-span-2 text-3xl text-center'>36 <span className='text-base'>gr</span></p>
                        <mark className='col-start-5 col-span-2 h-6 self-center rounded-lg text-sm text-center bg-orange-300'>Awas</mark>
                        <button className='h-12 col-start-1 col-end-7 rounded-lg bg-white text-main-color'>Tambah Data Komsumsi Harian</button>
                    </div>
                    <span>
                        <p>lihat informasi batas gula</p>
                        <InfoIcon/>
                    </span>
                </section>
                <section className='flex-auto bg-neutral-600'>
                    <h1>Ongoing</h1>
                </section>
        </main>
    );
}

export default Dasbord;

import React from 'react';

export default function Footer({ dark }) {
    return (
        <section id='footer' className={`w-full min-h-[5rem] bg-cover bg-center px-5 sm:px-5 md:px-20 py-5 sm:py-5 border-b-2  transition-colors duration-500 ${dark ? 'bg-red-950' : 'bg-white'}`}>
           
            <div className='h-[5rem] content-center'>
                <p className='text-center '>   © 2025 تمرة - كل الحقوق محفوظة. </p>
            </div>
           
        </section>
    );
}

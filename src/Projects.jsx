import React from 'react';

export default function Projects({ dark }) {
    return (
        <section id='projects' className={`w-full min-h-[70vh] bg-cover bg-center px-5 sm:px-10 md:px-20 py-10 sm:py-20 border-b-2 border-yellow-300 transition-colors duration-500 ${dark ? 'bg-red-950' : 'bg-white'}`}>
            <h2 className={`${dark ? 'text-yellow-300' : 'text-red-600'} text-4xl mb-10 transition-colors duration-500`}>
                المشاريع البرمجية
            </h2>
            <div className='h-[60vh] content-center'>
                <p className='text-center '>لا توجد مشاريع حتي الان</p>
            </div>
           
        </section>
    );
}

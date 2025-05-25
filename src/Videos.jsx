import React from 'react';
import img1 from './Images/mqdefault_6s (1).webp'
import img2 from './Images/mqdefault_6s (2).webp'
import img3 from './Images/mqdefault_6s (3).webp'
export default function Videos({ dark }) {
    return (
        <section id='videos' className={`w-full min-h-[70vh] bg-cover bg-center px-5 sm:px-10 md:px-20 py-10 sm:py-20 border-b-2 border-yellow-300 transition-colors duration-500 ${dark ? 'bg-red-950' : 'bg-white'}`}>
            <h2 className={`${dark ? 'text-yellow-300' : 'text-red-600'} text-4xl mb-10 transition-colors duration-500`}>
                مقاطعنا
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <a href="https://www.youtube.com/watch?v=aRockIWJyBo"  >
                    <div

                        className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${dark ? 'bg-red-900 text-white' : 'bg-white text-black'}`}
                    >
                        <div className="w-full h-48 bg-black">

                            <img
                                src={img1}
                                alt={``}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-2"> ايه اهدافي ل2025 | ازاي هحققها ! </h3>
                            <p className="text-sm opacity-80">ايه هي الاهداف البطمحلها وعاوز اخلصها وازاي احققها في 2025 </p>
                        </div>
                    </div>
                </a>

                <a href="https://www.youtube.com/watch?v=ByrGJOcykLQ">
                    <div

                    className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${dark ? 'bg-red-900 text-white' : 'bg-white text-black'}`}
                >
                    <div className="w-full h-48 bg-black">

                        <img
                            src={img2}
                            alt={``}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2"> جربت افضل كورس تطوير العاب في الوطن العربي😀
                        </h3>
                        <p className="text-sm opacity-80">  تجربة الكورس و شرح محتواه و تفاصيل عن الكورس وتقييم الكورس</p>
                    </div>
                </div>
                </a>

            <a href="https://www.youtube.com/watch?v=01axIIBx4F4">

                    <div

                    className={`rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${dark ? 'bg-red-900 text-white' : 'bg-white text-black'}`}
                >
                    <div className="w-full h-48 bg-black">

                        <img
                            src={img3}
                            alt={``}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2"> اتعلمت ال3D ولكن ....؟!
                        </h3>
                        <p className="text-sm opacity-80">  تعلم تطوير الالعاب ال3d و تفاصيل اللعبة و شرح كمية صعبوبة تطوير الالعاب </p>
                    </div>
                </div>
            </a>

            </div>
            <a href="https://www.youtube.com/@tamarastudio-m2s" className='mt-5 text-red-600 text-xl text-left inline-block  w-full'>المزيد</a>
        </section>
    );
}

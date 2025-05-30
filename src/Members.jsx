import React from 'react';
import Ahmed from './Images/Ahmed.png'
import Asr from './Images/Asr.png'
import Omar from './Images/Omar.png'
const members = [

  {
    id: 2,
    name: 'عمر حاتم',
    task: 'مطور فرونت إند',
    desc: ' بيشتغل على تطوير الواجهة وشكل الموقع ده',
    portf: 'https://dynamic-bienenstitch-8740f7.netlify.app/',
    img: Omar,
  },
    {
    id: 1,
    name: ' اسر اسلام',
    task: ' مطور العاب و قائد ورسام' ,
    desc: 'المدير و القائد ومطور العاب و المسؤول عن الخطة      .',
    portf:'https://koeshg.netlify.app/',
    img: Asr,
  },
  {
    id: 3,
    name: 'احمد حاتم',
    task: 'مسؤول تسويق',
    desc: 'بيشتغل على نشر تمرة في كل مكان على الإنترنت.',
    img: Ahmed,
  },
];

export default function Members({ dark }) {
  return (
    <section id='members' className={`scroll-mt-24 w-full min-h-[70vh] bg-cover bg-center px-5 sm:px-10 md:px-20 py-10 sm:py-20 border-b-2 border-yellow-300 transition-colors duration-500 ${dark ? 'bg-red-950' : 'bg-white'}`}>
      <h2 className={`${dark ? 'text-yellow-300' : 'text-red-600'} text-4xl mb-10 transition-colors duration-500`}>
        اعضاء تمرة
      </h2>

      <div className="flex justify-center gap-4">
        {members.map((member) => (
          <div
            key={member.id}
            className={`rounded-2xl p-5 shadow-md transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl  ${dark ? 'bg-red-900 text-yellow-100' : 'bg-gray-100 text-gray-800'}`}
          >
            <div className="w-32 h-48 mx-auto mb-4">
              <img src={member.img} alt={member.name} className=" w-full h-full object-cover " />
            </div>
            <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
            <p className="text-center font-medium mb-2">{member.task}</p>
            <p className="text-sm text-center opacity-80">{member.desc}</p>
            
        <a href={member.portf} className=''>
                <button
                className={`
                  
                    mt-5 w-full h-10 rounded-3xl font-semibold transition-all duration-300
                    ${dark
                        ? 'bg-yellow-300 text-red-950 hover:bg-yellow-400 hover:text-red-900'
                        : 'bg-red-600 text-white hover:bg-red-700 hover:text-yellow-200'
                    }
                    ${member.portf ?  '' : 'bg-transparent hover:bg-transparent hover:text-red-950'}
                    
                `}
            >
                {member.portf ? 'البورتفوليو' : 'معندوش بورتفوليو'}
            </button>
        </a>
          </div>
        ))}
      </div>
    </section>
  );
}

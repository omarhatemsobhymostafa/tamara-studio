import React from 'react';
import Asr from './Images/Asr.png'
import Omar from './Images/Omar.png'

const members = [
  {
    id: 2,
    name: '؟؟؟؟؟؟',
    task: 'مطور فرونت إند',
    desc: ' بيشتغل على تطوير الواجهة وشكل الموقع ده ومواقع خاصة بالستوديو',
    portf: '',
    img: Omar,
  },
  {
    id: 1,
    name: '؟؟؟؟؟',
    task: 'مطور ألعاب وقائد ورسام',
    desc: 'المدير والقائد ومطور ألعاب والمسؤول عن الخطة.',
    portf: '',
    img: Asr,
  },

];

export default function Members({ dark }) {
  return (
    <section
      id='members'
      className={`
        scroll-mt-24 w-full min-h-[70vh] bg-cover bg-center px-5 sm:px-10 md:px-20 py-10 sm:py-20 
        border-b-2 border-yellow-300 transition-colors duration-500 
        ${dark ? 'bg-red-950' : 'bg-white'}
      `}
    >
      <h2
        className={`
          ${dark ? 'text-yellow-300' : 'text-red-600'} 
          text-4xl mb-10  font-bold transition-colors duration-500
        `}
      >
        أعضاء تمرة
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {members.map((member) => (
          <div
            key={member.id}
            className={`
              flex flex-col items-center rounded-2xl p-5 shadow-md w-full sm:w-[300px] 
              transition-all duration-300 hover:translate-y-[-4px] hover:shadow-xl
              ${dark ? 'bg-red-900 text-yellow-100' : 'bg-gray-100 text-gray-800'}
            `}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden bg-yellow-500 mb-4 ">
              <img src={member.img} alt={member.name} className="object-cover object-top w-full h-full" />

            </div>
            <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
            <p className="text-center font-medium mb-2">{member.task}</p>
            <p className="text-sm text-center opacity-80">{member.desc}</p>

            {member.portf ? (
              <a
                href={member.portf}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button
                  className={`
                    mt-5 w-full h-10 rounded-3xl font-semibold transition-all duration-300
                    ${dark
                      ? 'bg-yellow-300 text-red-950 hover:bg-yellow-400 hover:text-red-900'
                      : 'bg-red-600 text-white hover:bg-red-700 hover:text-yellow-200'
                    }
                  `}
                >
                  البورتفوليو
                </button>
              </a>
            ) : (
              <p className="mt-5 text-center text-sm font-semibold opacity-70">
                معندوش بورتفوليو
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import Ahmed from './Images/Ahmed.png'
import Asr from './Images/Asr.png'
import Omar from './Images/Omar.jpg'
const members = [
  {
    id: 1,
    name: ' اسر اسلام',
    task: ' مطور العاب و قائد والرسم' ,
    desc: 'المدير و القائد ومطور العاب و المسؤول عن الخطة      .',
    img: Asr,
  },
  {
    id: 2,
    name: 'عمر حاتم',
    task: 'مطور فرونت إند',
    desc: 'تعمل على تطوير الواجهة وشكل هذا الموقع.',
    img: Omar,
  },
  {
    id: 3,
    name: 'احمد حاتم',
    task: 'مسؤول تسويق',
    desc: 'يعمل على نشر تمرة في كل مكان على الإنترنت.',
    img: Ahmed,
  },
];

export default function Members({ dark }) {
  return (
    <section id='members' className={`scroll-mt-24 w-full min-h-[70vh] bg-cover bg-center px-5 sm:px-10 md:px-20 py-10 sm:py-20 border-b-2 border-yellow-300 transition-colors duration-500 ${dark ? 'bg-red-950' : 'bg-white'}`}>
      <h2 className={`${dark ? 'text-yellow-300' : 'text-red-600'} text-4xl mb-10 transition-colors duration-500`}>
        اعضاء تمرة
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {members.map((member) => (
          <div
            key={member.id}
            className={`rounded-2xl p-5 shadow-md transition-all duration-300 ${dark ? 'bg-red-900 text-yellow-100' : 'bg-gray-100 text-gray-800'}`}
          >
            <div className="w-24 h-24 mx-auto mb-4">
              <img src={member.img} alt={member.name} className="rounded-full w-full h-full object-cover " />
            </div>
            <h3 className="text-xl font-bold text-center mb-1">{member.name}</h3>
            <p className="text-center font-medium mb-2">{member.task}</p>
            <p className="text-sm text-center opacity-80">{member.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

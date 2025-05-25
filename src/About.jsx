import React from 'react'

export default function About({ dark, setDark }) {
    return (
        <section id='about' className={`w-full h-[70vh] bg-cover bg-center px-5 sm:px-10 md:px-20 py-10 sm:py-20 border-b-2 border-yellow-300 transition-colors duration-500 ${dark ? 'bg-red-950' : 'bg-white'}`}>
            <h2 className={`${dark ? 'text-yellow-300' : 'text-red-600'} text-4xl mb-5 transition-colors duration-500`}>من نحن</h2>
            <p className={`${dark ? 'text-white' : 'text-black'} md:text-[1.05rem] sm:text-[.7rem] leading-relaxed transition-colors duration-500`}>
                نحن <strong>استوديو ألعاب عربي ناشئ</strong>، نؤمن بأن الوقت قد حان لنهضة الألعاب العربية، ونسعى بكل شغف لأن نكون من أوائل من يضعون بصمة حقيقية في هذه الصناعة داخل الوطن العربي وخارجه.
                <br /><br />
                رؤيتنا تتجسد في إنتاج ألعاب عالية الجودة، تنبع من ثقافتنا، وتحمل هويتنا، وتنافس بقوة على الساحة العالمية.
                <br /><br />
                نحن لا نصنع ألعابًا فقط، بل نبني حلمًا، ونعيد إحياء فكرة أن تكون الألعاب العربية مصدر فخر وإلهام...
                <br /><br />
                إذا كنت تؤمن برسالتنا وتشعر بأنك قادر على ترك أثر، فلا تتردد في التقدم والانضمام إلينا.
            </p>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdD4wNRB2wbZTw561svg-Xn6C5rEEk7MPSRpALLGTBxIDwurg/viewform">
                <button
                className={`
                    mt-5 w-44 h-10 rounded-3xl font-semibold transition-all duration-300
                    ${dark
                        ? 'bg-yellow-300 text-red-950 hover:bg-yellow-400 hover:text-red-900'
                        : 'bg-red-600 text-white hover:bg-red-700 hover:text-yellow-200'
                    }
                `}
            >
                الانضمام إلى تمرة
            </button>
        </a>
        </section>
    )
}

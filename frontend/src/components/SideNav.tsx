import React, { useState } from 'react'


const SideNav = () => {
    const [selected, setSelected] = useState<string>(``);

    return (
        <div className='absolute w-[250px] text-primary h-screen bg-black  flex flex-col gap-16 '>
            <div
                className='p-10 m-4 py-20 bg-accent text-center rounded text-3xl '
            >AB</div>
            <nav className='w-full flex justify-center'>
                <ul className='text-center flex flex-col  w-full font-bold'>
                    <li
                        className={`hover:bg-slate-700 ${selected == `home` ? `bg-secondary` : ``} py-2 rounded hover:cursor-pointer  w-full`}
                        onClick={() => setSelected(`home`)}
                    >דף הבית</li>
                    <li
                        className={`hover:bg-slate-700 ${selected == `clients` ? `bg-secondary` : ``} py-2 rounded hover:cursor-pointer `}
                        onClick={() => setSelected(`clients`)}
                    >לקוחות</li>
                    <li
                        className={`hover:bg-slate-700 ${selected == `posts` ? `bg-secondary` : ``} py-2 rounded hover:cursor-pointer `}
                        onClick={() => setSelected(`posts`)}
                    >פוסטים</li>
                </ul>
            </nav>
        </div>
    )
}

export default SideNav

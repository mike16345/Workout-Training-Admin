import React, { useState } from 'react'


const SideNav = () => {
    const [selected, setSelected]= useState<string>(``);

    return (
        <div className='w-[30vh] text-primary h-screen bg-black p-4 flex flex-col gap-16 '>
            <div 
                className='p-10 py-20 bg-accent text-center rounded text-3xl '
            >AB</div>
            <nav className='w-full flex justify-center p-4'>
                <ul className='text-center flex flex-col gap-4 w-full font-bold'>
                    <li
                        className={selected==`home`?
                            'bg-secondary py-2 rounded hover:cursor-pointer active:animate-ping':
                            'hover:bg-secondary py-2 rounded hover:cursor-pointer active:animate-ping'}
                        onClick={()=> setSelected(`home`)}
                    >דף הבית</li>
                    <li
                        className={selected==`clients`?
                            'bg-secondary py-2 rounded hover:cursor-pointer active:animate-ping':
                            'hover:bg-secondary py-2 rounded hover:cursor-pointer active:animate-ping'}
                        onClick={()=> setSelected(`clients`)}
                    >לקוחות</li>
                    <li
                        className={selected==`posts`?
                            'bg-secondary py-2 rounded hover:cursor-pointer active:animate-ping':
                            'hover:bg-secondary py-2 rounded hover:cursor-pointer active:animate-ping'}
                        onClick={()=> setSelected(`posts`)}
                    >פוסטים</li>
                </ul>
            </nav>
        </div>
    )
}

export default SideNav

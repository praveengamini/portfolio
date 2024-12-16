import React, { useEffect } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
    const [openMenu,setOpenMenu] = useState(false);
    const [arr0,setArr0] = useState(false);
    const [arr1,setArr1] = useState(false);
    const [arr2,setArr2] = useState(false);
    const [arr3,setArr3] = useState(false);
       useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setOpenMenu(false);
            }
        };
        window.addEventListener('resize', handleResize);
      
    }, []);

    // useEffect(() => {
    //     function handleClosing(event) {
    //         if (!(event.target.id ==='exceptHere') || setOpenMenu) {
    //             console.log('hii');
    //             setOpenMenu(false);
    //         }
    //         else{
    //                 setOpenMenu(true)
    //             }
    //     }
    
    //     document.addEventListener('click', handleClosing);
    
    //     return () => {
    //         document.removeEventListener('click', handleClosing);
    //     };
    // }, [openMenu]);
    
    useEffect(()=>{
        function handleUnderlining(event)
        {
            console.log(event.target.id);
            
            if(event.target.id === 'home')
            {
               setArr0(true);
               setArr1(false);
               setArr2(false);
               setArr3(false);
            }
            if(event.target.id === 'skills')
            {
                setArr0(false);
                setArr1(true);
                setArr2(false);
                setArr3(false);
            }
            if(event.target.id === 'projects')
            {
                setArr0(false);
                setArr1(false);
                setArr2(true);
                setArr3(false);
            }
            if(event.target.id === 'about')
            {
                setArr0(false);
                setArr1(false);
                setArr2(false);
                setArr3(true);
            }
        }
        document.addEventListener('click',handleUnderlining);
    },[])

  return (
    <div className={`flex items-center justify-between px-6 py-4 bg-gray-800 text-white`}>
    <div className="text-2xl ">Praveen Gamini</div>
    <div>
    <button className=' md:hidden' id='exceptHere' onClick={()=>{
        setOpenMenu(!openMenu);
    }}>
       {
        !openMenu?   
          (<GiHamburgerMenu className='size-8' />):
          <div className='text-4xl'>X</div>
       }
    </button>
    {
        openMenu&&(
            <div className={`flex-col text-2xl  space-y-10   fixed right-0 top-100 h-full w-64 bg-gray-800 text-white transform ${
                open ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-1000 ease-in-out text-center `}>
                <Link to='/'>
                <div className={`hover:text-gray-300 hover:underline cursor-pointer ${arr0 ? ' text-orange-500' : ''} mt-28` } id='home'>Home</div>
                </Link>
                <Link to='/skills'>
                <div className={`hover:text-gray-300 hover:underline cursor-pointer ${arr1 ? ' text-orange-500' : ''} mt-10 ` } id='skills'>Skills</div>
                </Link>
                <Link to='/projects'>
                <div className={`hover:text-gray-300 hover:underline cursor-pointer ${arr2 ? ' text-orange-500' : ''} mt-10`} id='projects'>Projects</div>
                </Link>
                <Link to='/about'>
                <div className={`hover:text-gray-300 hover:underline cursor-pointer ${arr3 ? ' text-orange-500' : ''} mt-10`} id='about'>About</div>
                </Link>
            </div>
        )
    }
    </div>

    <div className=" hidden md:flex space-x-52 mr-16 text-xl  ">
        <Link to='/'>
        <div className={`hover:text-gray-300 hover:underline cursor-pointer ${arr0 ? ' text-orange-500' : ''} ` } id='home'>Home</div>
        </Link>
        <Link to='/skills'>
        <div className={`hover:text-gray-300 hover:underline cursor-pointer ${arr1 ? ' text-orange-500' : ''} ` } id='skills'>Skills</div>
        </Link>
        <Link to='/projects'>
        <div className={`hover:text-gray-300 hover:underline cursor-pointer ${arr2 ? ' text-orange-500' : ''}`} id='projects'>Projects</div>
        </Link>
        <Link to='/about'>
        <div className={`hover:text-gray-300 hover:underline cursor-pointer ${arr3 ? ' text-orange-500' : ''} `} id='about'>About</div>
        </Link>
    </div>
  </div>
  
  )
}

export default Nav

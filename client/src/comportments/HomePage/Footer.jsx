import React from 'react'
import LoveImg from '../../assets/lvoe.png'
import MyIcon from '@reacticons/ionicons';

const Footer = () => {
  
  const styles = {
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://wallpapercave.com/wp/wp8675176.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <footer className='text-white bg-pink-500 pt-20 pb-5 lg:px-24 px-8 bg-center bg-cover' style={styles}>
      <div className="lg:flex">
        <div className="w-full mx-8">
          {/* <h1 className="pb-8 font-semibold text-2xl">Lovly Datings</h1> */}
          <div className="flex">
            <img src={LoveImg} alt="" className='w-24 h-auto'/>
            <p className="mt-4 text-xl love-title">Lovly Datings</p>
          </div>
          <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem nesciunt molestiae distinctio consectetur vel? Odio corporis earum maxime dolorem temporibus est facilis consectetur, aut maiores dolorum inventore magni sapiente repellat?</p>
        </div>
        <div className="w-full mx-8">
          <h1 className="lg:pb-8 pb-0 lg:py-0 py-8 pb-8 font-semibold text-2xl">Our Services</h1>
          <div className="">
            <p className="my-2"><MyIcon name='heart'></MyIcon> <span className='pl-1'>GuideLines for Dating</span></p>
            <p className="my-2"><MyIcon name='heart'></MyIcon> <span className='pl-1'>Real Accounts</span></p>
            <p className="my-2"><MyIcon name='heart'></MyIcon> <span className='pl-1'>Best Destinations</span></p>
            <p className="my-2"><MyIcon name='heart'></MyIcon> <span className='pl-1'>help to Find life Partner</span></p>
          </div>
        </div>
        <div className="w-full mx-8">
          <h1 className="lg:pb-8 pb-0 lg:py-0 py-8 pb-8 font-semibold text-2xl">More About</h1>
          <div className="">
            <p className="my-2">Datings</p>
            <p className="my-2">Love Stories</p>
            <p className="my-2">Destinations</p>
            <p className="my-2">GuideLines</p>
            <p className="my-2">Posts</p>
          </div>
        </div>
        <div className="w-full mx-8">
          <h1 className="lg:pb-8 pb-0 lg:py-0 py-8 font-semibold text-2xl">Contact</h1>
          <div className="">
            <p className="text-md my-2">+94 711758851</p>
            <p className="text-md my-2">test@exmple.com</p>
            <p className="text-md my-2">Test Street, Test</p>
          </div>
        </div>
      </div>
      <hr className='border border-white mt-12 mb-4'/>
      <p className="text-center my-2 text-md">
        &copy; The Lovly Datings - 2024 || Developed and Design by JehanKandy and Anupa Gamage
      </p>
    </footer>
  )
}

export default Footer
import React, { useState } from 'react'
import { Fade } from "react-awesome-reveal";
import Footer from './Footer';
import Navbar from './Navbar';
import LoveImage from '../../assets/lvoe.png'
import MyIcon from '@reacticons/ionicons';
import SignIn from '../SignInSignUp/SignIn';
import SignUp from '../SignInSignUp/SignUp';
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage";
import CountUp from 'react-countup';
import NewModels from '../HomeData/NewModels';



const HomePage = () => {
    // https://wallpapercave.com/wp/wp8675176.jpg
    // https://wallpapercave.com/wp/wp8829734.jpg
    // https://wallpapercave.com/wp/wp8829589.jpg
    // https://wallpapercave.com/wp/wp9199177.jpg
    // https://wallpapercave.com/wp/wp9199217.jpg
    // #1b0802

    // https://dribbble.com/shots/2891325-User-Profile-PSD-Freebie

    // https://themewagon.github.io/material-dashboard-2/


    //curent login user
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("login2");

    const [buttonValue, SetButtonValue] = useState(0)
    const HeadleButtonClick = (clickValue) => {
        SetButtonValue(clickValue)   
    }
    const navigate = useNavigate()

    const styles = {
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://wallpapercave.com/wp/wp8675176.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }

    const countData = [
      {name: "Members", value: <CountUp end={20} />, icon: <MyIcon name='heart' size='large'></MyIcon>},
      {name: "Datings", value: <CountUp end={20} />, icon: <MyIcon name='storefront' size='large'></MyIcon>},
      {name: "Love Stories", value: <CountUp end={20} />, icon: <MyIcon name='heart' size='large'></MyIcon>},
      {name: "Posts", value: <CountUp end={20} />, icon: <MyIcon name='documents' size='large'></MyIcon>} 
    ]

    const viewData = [
      {name: "Women", icons: <MyIcon name='female'></MyIcon>, btnValue: "Women"},
      {name: "Mens", icons: <MyIcon name='male'></MyIcon>, btnValue: "Mens"},
      {name: "Love Stories", icons: <MyIcon name='heart'></MyIcon>, btnValue: "LStories"},
      {name: "Posts", icons: <MyIcon name='documents'></MyIcon>, btnValue: "Posts"},
    ]

    const logout = () => {
      localStorage.clear()
      navigate('/')
      window.location.reload()
    }

  return (
    <div className="">
      
      <div className='py-14 lg:px-16 px-4' style={styles}>
        <div className="lg:grid grid-cols-2 gap-4">
          <div className="">
            <div className="lg:mx-16 mx-0">
              <h1 className="love-title text-white text-5xl">Find your <span className='text-pink-500'>Best, Trusted</span> <br /> and <span className='text-pink-500'>Lovelyness</span> partner</h1>
              <p className="text-white py-2 font-semibold">The Best Trusted and Most use Dating Site</p>
              <p className="text-white my-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laborum libero ab ratione totam, inventore sit, iure, ullam tempore magni eaque animi a delectus minima saepe ipsam qui possimus fugit.
                Esse reiciendis aperiam, vitae optio corporis totam eos explicabo facilis, assumenda tempora minima. Alias id laborum ducimus odit dolores rerum quo in debitis pariatur. Delectus labore dolore corrupti hic pariatur!
              </p>
              {
                (() => {
                  if(RoleUser !== null && EmailUser !== null){
                    return (
                      <div className="flex">
                        <Link>
                          <button className='mx-2 bg-pink-500 my-4 py-4 px-8 text-white rounded-full font-semibold duration-500 hover:bg-white hover:text-pink-500'>Find Your Love</button>
                        </Link>
                        <Link to={'/Dashboard'}>
                          <button className='mx-2 bg-white my-4 py-4 px-8 text-pink-500 rounded-full font-semibold duration-500 hover:bg-pink-500 hover:text-white'>Dashboard</button>
                        </Link>                        
                      </div>                      
                    )
                  }
                  else{
                    return (
                      <div className="flex">
                        <button onClick={() => HeadleButtonClick("SignUp")} className='mx-2 bg-pink-500 my-4 py-4 px-8 text-white rounded-full font-semibold duration-500 hover:bg-white hover:text-pink-500'>Be a Member</button>
                        <button onClick={() => HeadleButtonClick("SignIn")} className='mx-2 bg-white my-4 py-4 px-8 text-pink-500 rounded-full font-semibold duration-500 hover:bg-pink-500 hover:text-white'>Sign In</button>
                      </div>
                    )
                  }
                })()
              }

            </div>
          </div>
          <div className="">
            {
              (() => {
                if(buttonValue === "SignUp"){
                  return (
                    <Fade>
                      <SignUp />
                    </Fade>
                  )
                }
                if(buttonValue === "SignIn"){
                  return (
                    <Fade>
                      <SignIn />
                    </Fade>
                  )
                }
                if(RoleUser !== null && EmailUser !== null){
                  return (
                    <div className="bg-white my-8 mx-12 py-10 px-16 rounded-xl">
                      <h1 className="text-pink-500 love-title text-3xl">Welcome Back</h1>
                      <p className="love-title text-xl">{EmailUser}</p>
                      <button onClick={logout} className='my-8 bg-pink-600 text-white py-2 px-8 rounded duration-500 hover:ml-2'>Logout</button>
                    </div>
                  )
                }
              })()
            }
          </div>
        </div>        
      </div>

      <div className="text-center my-24">
        <h1 className="text-pink-500 text-5xl font-semibold love-title">WELCOME</h1>
        <p className="text-gray-500 mx-12 py-8 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus aliquid fuga totam iusto, fugit rem velit quod. Ut qui, in magnam quae culpa nisi expedita rerum mollitia blanditiis facere.
          Nesciunt aliquid labore nobis hic facere minus repellat veniam est eveniet tempora voluptates doloribus quia officiis rem esse quis, veritatis obcaecati perferendis eos cum deserunt ex, nam vitae. Et, minus.
          Dolorum asperiores, ullam sunt officia aut culpa. Id deserunt quaerat veniam quidem sint eaque delectus iure libero sapiente veritatis velit molestiae dolore nemo, perspiciatis placeat ab obcaecati animi recusandae quia.
          Voluptate odit hic veritatis explicabo pariatur non ipsum. Cupiditate sunt rem ut odio culpa nihil, exercitationem libero quos molestias nostrum vitae accusantium laboriosam commodi rerum nesciunt ipsum sit quam quis.
          Harum, illum minima. Quisquam aut culpa ut mollitia cupiditate dolores obcaecati nulla molestias? Odio quia nemo, earum necessitatibus nostrum, soluta, debitis ipsum amet maxime optio explicabo dignissimos ullam vero porro.
        </p>
      </div>

      <div className="">
          <div className="lg:grid grid-cols-4 gap-4 mx-16 my-20 text-center">
            {
              countData.map((data) => {
                return (
                  <div className="lg:my-0 my-8">
                    <p className="text-4xl text-pink-500">{data.icon}</p>
                    <h1 className="text-2xl text-pink-500 love-title">{data.name}</h1>
                    <p className="my-2 font-semibold text-gray-500 text-xl">{data.value}</p>
                  </div>
                )
              })
            }
          </div>
      </div>

      <div className="">
          <Fade>
            <div className="my-24">
                <div className="lg:flex">
                  <div className="h-auto w-full bg-[url(https://wallpapercave.com/wp/wp8829589.jpg)] bg-cover bg-center">
                    <h1 className="py-24 text-center font-semibold text-4xl text-pink-500 love-title">Our Features for Members</h1>
                  </div>
                </div>
            </div>
          </Fade>
      </div>

      <div className="my-24 lg:mx-20 mx-8">
        <Fade>
          <div className="">
              <div className="my-20 lg:mx-20 mx-8">
                <h1 className="love-title text-pink-500 text-2xl">Best Models</h1>
                <NewModels />
              </div>
          </div>
        </Fade>
      </div>

      <Fade>
        <Footer />
      </Fade>
    </div>
  )
}

export default HomePage
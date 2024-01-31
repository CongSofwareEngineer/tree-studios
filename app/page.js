'use client'
import Image from 'next/image'
import Model3d from './components/Model3d'
import Fiber3D from './components/Fiber3D'
import ImageAni from './components/ImageAni'
import Parallax3D from './components/Parallax'
import { ParallaxProvider } from 'react-scroll-parallax'
import { useLanguage, useRedux, useUserData } from '@/Redux/store'
import { useEffect, useState, useLayoutEffect } from 'react'
import BigNumber from 'bignumber.js';
import { toast } from 'react-toastify';
import moment from 'moment/moment';
import { LOCALE_DATA } from '@/constants/app'
import Frame from './components/Frame'

export default function Home () {
  const { userData, readyRedux } = useRedux(state => state)
  const { setLanguage } = useLanguage(state => state)
  const { messages } = useLanguage(state => state.language)

  console.log({ userData, messages });
  useEffect(() => {
    readyRedux()
    console.log({ laB: navigator.language.toLowerCase() });
    console.log({ getState: useRedux.getState() });
  }, [])

  const changeLanguage = () => {
    setLanguage(LOCALE_DATA.VN)
  }

  const changeLanguageEn = () => {
    setLanguage(LOCALE_DATA.EN)
  }

  return (
    <>
      {/* <div onClick={changeLanguage}>
      change langua
      </div>
      <div onClick={changeLanguageEn}>
      change langua En
      </div>
      <div>/assets/images/frameDetail.svg
        {`Data ${messages?.back}`}
      </div> */}
      {/* <Fiber3D /> */}
      {/* <ParallaxProvider scrollAxis="horizontal" > */}
      {/* <Parallax3D /> */}
      <Frame />

      {/* </ParallaxProvider> */}

      {/* <div  className="h-screen w-full relative indent-1">
        <ImageAni />
      </div>
      <div  className="h-screen w-full relative indent-1">
      <ImageAni indexItem={1}/>
      </div>
      <div  className="h-screen w-full relative indent-1">
      <ImageAni indexItem={2}/>
      </div>
      <div  className="h-screen w-full relative indent-1">
      <ImageAni indexItem={3}/>
      </div> */}
    </>

  )
}

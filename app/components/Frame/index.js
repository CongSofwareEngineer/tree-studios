import { images, videos } from '@/common/images';
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
const ImgCustom = styled(Image)`
  position: fixed !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
`;
const Frame = () => {
  const frameButton = () => {
    return (
      <div className='fixed inset-0 w-screen h-screen' dangerouslySetInnerHTML={{
        __html: `
        <svg width="100%" height="100%" viewBox="0" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g clip-path="url(#clip0_19_16)">
          <rect x="26" y="1120" width="400" height="400" fill="url(#pattern0)"/>
          <rect x="372" y="1050" width="400" height="400" fill="url(#pattern1)"/>
          <rect x="1494" y="1120" width="400" height="400" fill="url(#pattern2)"/>
          <rect x="760" y="1066" width="400" height="400" fill="url(#pattern3)"/>
          <rect x="1152" y="1066" width="400" height="400" fill="url(#pattern4)"/>
        </g>
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_19_16" transform="scale(0.0025)"/>
          </pattern>
          <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image1_19_16" transform="scale(0.0025)"/>
          </pattern>
          <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image2_19_16" transform="scale(0.0025)"/>
          </pattern>
          <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image3_19_16" transform="scale(0.0025)"/>
          </pattern>
          <pattern id="pattern4" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image4_19_16" transform="scale(0.0025)"/>
          </pattern>
          <clipPath id="clip0_19_16">
            <rect width="1920" height="1440" fill="white"/>
          </clipPath>
          <image id="image0_19_16" width="400" height="400" />
          <image id="image1_19_16" width="400" height="400" />
          <image id="imag2_19_16" width="400" height="400" />
          <image id="image3_19_16" width="400" height="400" />
          <image id="image4_19_16" width="400" height="400" />
        </defs>
      </svg>
        `
      }}
      />
    )
  }
  return (
    <div className='relative w-screen h-screen'>
      <ImgCustom
        src={images.frameMain}
        fill
        quality={80}
        // placeholder="blur"
        // style={{ objectFit: 'contain' }}
      />
      {/* <ImgCustom
        src={images.frameDetail}
        fill
        quality={80}
      /> */}
      {/* {
        frameButton()
      } */}
      <video
        src={videos.planet1}
        loop
        autoPlay
        className='w-screen h-screen'
        style={{ objectFit: 'fill' }}
      />
    </div>
  )
}

export default Frame

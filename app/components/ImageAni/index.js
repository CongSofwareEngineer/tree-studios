import React from 'react'
import styled, { keyframes } from 'styled-components';
const fadeIn = keyframes`
  100%{
    background-position: -168.8vw 0;
  }
`;
const Img = styled.div`
height: 20vw;
    width: 17vw;
  background: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: auto 100%;
    animation: ${fadeIn} 1s steps(10) infinite, float 5.5s ease-in-out infinite;
`;
const ImageAni = ({ src = '', indexItem = 0 }) => {
  return (
    <div className='flex w-full justify-center items-center'>
      <Img src={`/assets/images/${src || 'mini_nakamura.png'}`} className='m-auto'/>
      <div>{indexItem}</div>
    </div>
  )
}

export default ImageAni

import { Box, OrbitControls, useScroll } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useSpring, a } from '@react-spring/three'
import * as THREE from 'three'
const CanvasCustom = styled(Canvas)`
    height: 100% !important;
    min-height: 100vh !important;
    >div{
        min-height: 100vh !important;
    }
  canvas{
    height: 100% !important;
  }
`
const ModalContent = ({ bg = 'hotpink' }) => {
  const refBox = useRef(null)
  const mouseXRef = useRef(0)
  const mouseYRef = useRef(0)
  const mouseRef = useRef(0)
  const cameraRef = useRef()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame((state, delta) => {
    // if (mouseXRef.current !== state.mouse.x) {
    //   mouseXRef.current = state.mouse.x
    //   refBox.current.rotation.x += delta
    // }
    // if (mouseYRef.current !== state.mouse.y) {
    //   mouseYRef.current = state.mouse.y
    // }
  })

  const { scale: springScale } = useSpring({
    scale: hovered ? [1.5, 1.5, 1.5] : [1, 1, 1]

  })

  const handleClick = () => {

  }

  const canvasColor = document.createElement('canvas')
  canvasColor.width = '256'
  canvasColor.height = '256'
  const context = canvasColor.getContext('2d')
  const gradient = context.createLinearGradient(0, 0, 256, 0)
  gradient.addColorStop(0, 'red')
  gradient.addColorStop(0.5, 'green')
  gradient.addColorStop(1, 'blue')
  context.fillStyle = gradient
  context.fillRect(0, 0, 256, 256)

  useFrame(({ mouse }) => {
    if (mouseRef.current.x !== mouse.x) {
      mouseRef.current = mouse
      const scrollSpeed = 0.1 // Adjust the scrolling speed as needed
      console.log('====================================')
      console.log({ mouse })
      console.log('====================================')
    }
    if (mouseRef.current.y !== mouse.y) {
      mouseRef.current = mouse
      const scrollSpeed = 0.1 // Adjust the scrolling speed as needed
      console.log('====================================')
      console.log({ mouse })
      console.log('====================================')
    }

    if (cameraRef.current) {
      const scrollSpeed = 0.1
      cameraRef.current.position.y += (mouse.y * scrollSpeed - cameraRef.current.position.y) * 0.1
    }
  })

  return (
    <>

      <perspectiveCamera
        ref={cameraRef}

      />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>

      <ambientLight intensity={Math.PI / 2} />
      <a.mesh
        scale={springScale}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        material={active ? 'green' : bg}
        onClick={() => setActive(!active)}
      >
        <boxGeometry />
        {/* <meshStandardMaterial attach="material" map={new THREE.CanvasTexture(canvasColor)} /> */}
        <meshStandardMaterial color={active ? 'green' : bg} />
      </a.mesh>

      <a.mesh
        position={[2, 0, 0]}
      >
        <boxGeometry />
        {/* <meshStandardMaterial attach="material" map={new THREE.CanvasTexture(canvasColor)} /> */}
        <meshStandardMaterial color={active ? 'green' : bg} />
      </a.mesh>

      {/* <OrbitControls
        // autoRotate
        // rotation={false}
        enableZoom={false}

      /> */}
    </>

  )
}
const Modal3d = ({ color = 'hotpink', className = '' }) => {
  return (
    <div className={`w-screen h-screen ${className}`} >
      <CanvasCustom className="h-full w-full  min-h-screen">
        <ModalContent bg={color}/>
      </CanvasCustom>
    </div>
  )
}
export default Modal3d

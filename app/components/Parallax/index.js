import React, { useRef } from 'react'
import Modal3d from './modal3d'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useScroll, animated, useSpring } from '@react-spring/web'

const Parallax3D = () => {
  const ref = useRef()
  const refModal1 = useRef()
  const refModal2 = useRef()
  const { scrollYProgress } = useScroll()

  const [props, api] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 }
    }),
    []
  )
  return (
    <Parallax pages={2} ref={ref} >
      {/* <Parallax horizontal pages={2} ref={ref} > */}
      <ParallaxLayer
        offset={0}
        // speed={1}
      >
        {/* <animated.div style={{ opacity: scrollYProgress }}>
      Hello World
        </animated.div> */}
        <Modal3d color='red' className='bg-red-400' />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        // speed={0.5}
        style={{
          background: 'blue',
          backgroundColor: 'blue'
        }}
        // speed={2}
      >
        {/* <animated.div style={props}>Hello World</animated.div> */}
        <Modal3d color='green' className='bg-gradient-to-r from-green-200 to-green-600' />
      </ParallaxLayer>

    </Parallax>

  )
}

export default Parallax3D

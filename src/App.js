import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Carousel from './three/Carousel'
import './style/styles.css'

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Carousel />
        </Suspense>
      </Canvas>
    </div>
  )
}

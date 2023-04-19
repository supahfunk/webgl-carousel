import { forwardRef } from 'react'
import { useThree } from '@react-three/fiber'
import { MeshTransmissionMaterial } from '@react-three/drei'
import { Color } from 'three'
import { useControls } from 'leva'

const PostProcessing = forwardRef((_, ref) => {
  const { viewport } = useThree()

  const { active, ior } = useControls({
    active: {
      value: true
    },
    ior: {
      value: 0.9,
      min: 0.8,
      max: 1.2
    }
  })

  return active ? (
    <mesh position={[0, 0, 1]}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <MeshTransmissionMaterial
        ref={ref}
        background={new Color('white')}
        transmission={0.7}
        roughness={0}
        thickness={0}
        chromaticAberration={0.06}
        anisotropy={0}
        ior={ior}
      />
    </mesh>
  ) : null
})

export default PostProcessing

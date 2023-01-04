import { OrbitControls } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Glitch,
  Vignette,
  Noise,
} from "@react-three/postprocessing";
import { BlendFunction, GlitchMode } from "postprocessing";
import { Perf } from "r3f-perf";

export default function Experience() {
  console.log("Blend Function: ", BlendFunction);

  return (
    <>
      <color args={["#000000"]} attach='background' />
      {/* 'multisampling' -> to prevent aliasing effect (default : 8) */}
      <EffectComposer multisampling={8}>
        {/* <Vignette
          offset={0.3}
          darkness={0.9}
          blendFunction={BlendFunction.NORMAL}
        /> */}

        {/* <Glitch
          delay={[1, 3]}
          duration={[0.2, 1]}
          strength={[0.2, 0.4]}
          mode={GlitchMode.CONSTANT_MILD}
        /> */}

        {/* <Noise premultiply blendFunction={BlendFunction.SOFT_LIGHT} /> */}

        {/* Need to disable the toneMapping to have a color between 0 and 1 */}
        <Bloom mipmapBlur intensity={0.8} luminanceThreshold={0.9} />
      </EffectComposer>
      <Perf position='top-left' />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color='orange' />
      </mesh>

      <mesh castShadow position-x={0} scale={1.5}>
        <boxGeometry />
        <meshBasicMaterial color={[1.4 * 5, 1 * 5, 4 * 5]} />
      </mesh>

      <mesh castShadow position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial
          toneMapped={false}
          color='orange'
          emissive='orange'
          emissiveIntensity={10}
        />
      </mesh>

      <mesh castShadow position-x={4} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial toneMapped={false} color={[5, 2, 1]} />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' />
      </mesh>
    </>
  );
}

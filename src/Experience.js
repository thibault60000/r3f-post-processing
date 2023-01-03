import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Glitch, Vignette } from "@react-three/postprocessing";
import { BlendFunction, GlitchMode } from "postprocessing";
import { Perf } from "r3f-perf";

export default function Experience() {
  console.log("Blend Function: ", BlendFunction);

  return (
    <>
      <color args={["#ffffff"]} attach='background' />
      {/* 'multisampling' -> to prevent aliasing effect (default : 8) */}
      <EffectComposer multisampling={8}>
        {/* <Vignette
          offset={0.3}
          darkness={0.9}
          blendFunction={BlendFunction.NORMAL}
        /> */}

        <Glitch
          delay={[1, 3]}
          duration={[0.2, 1]}
          strength={[0.2, 0.4]}
          mode={GlitchMode.CONSTANT_MILD}
        />
      </EffectComposer>
      <Perf position='top-left' />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color='orange' />
      </mesh>

      <mesh castShadow position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color='mediumpurple' />
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

import { OrbitControls, ScreenSpace } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Glitch,
  SSR,
  Vignette,
  DepthOfField,
  Noise,
} from "@react-three/postprocessing";
import { useRef } from "react";
import { BlendFunction, GlitchMode } from "postprocessing";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import Drunk from "./Drunk.js";
export default function Experience() {
  console.log("Blend Function: ", BlendFunction);

  //   const ssrProps = useControls({
  //     temporalResolve: true,
  //     STRETCH_MISSED_RAYS: true,
  //     USE_MRT: true,
  //     USE_NORMALMAP: true,
  //     USE_ROUGHNESSMAP: true,
  //     ENABLE_JITTERING: true,
  //     ENABLE_BLUR: true,
  //     temporalResolveMix: { value: 0.9, min: 0, max: 1 },
  //     temporalResolveCorrectionMix: { value: 0.25, min: 0, max: 1 },
  //     maxSamples: { value: 0, min: 0, max: 1 },
  //     resolutionScale: { value: 1, min: 0, max: 1 },
  //     blurMix: { value: 0.5, min: 0, max: 1 },
  //     blurKernelSize: { value: 8, min: 0, max: 8 },
  //     blurSharpness: { value: 0.5, min: 0, max: 1 },
  //     rayStep: { value: 0.3, min: 0, max: 1 },
  //     intensity: { value: 1, min: 0, max: 5 },
  //     maxRoughness: { value: 0.1, min: 0, max: 1 },
  //     jitter: { value: 0.7, min: 0, max: 5 },
  //     jitterSpread: { value: 0.45, min: 0, max: 1 },
  //     jitterRough: { value: 0.1, min: 0, max: 1 },
  //     roughnessFadeOut: { value: 1, min: 0, max: 1 },
  //     rayFadeOut: { value: 0, min: 0, max: 1 },
  //     MAX_STEPS: { value: 20, min: 0, max: 20 },
  //     NUM_BINARY_SEARCH_STEPS: { value: 5, min: 0, max: 10 },
  //     maxDepthDifference: { value: 3, min: 0, max: 10 },
  //     maxDepth: { value: 1, min: 0, max: 1 },
  //     thickness: { value: 10, min: 0, max: 10 },
  //     ior: { value: 1.45, min: 0, max: 2 },
  //   });

  const drunkRef = useRef();

  const drunkProps = useControls({
    frequency: { value: 10, min: 0, max: 100 },
    amplitude: { value: 0.01, min: 0, max: 1 },
    offset: { value: 0.04, min: 0, max: 1 },
  });

  return (
    <>
      {/* <color args={["#000000"]} attach='background' /> */}
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

        {/* Need to disable the toneMapping to have a color between 0 and 1 and <color /> background to black */}
        {/* <Bloom mipmapBlur intensity={0.8} luminanceThreshold={0.9} /> */}

        {/* <DepthOfField
          focusDistance={0.025}
          focalLength={0.025}
          bokehScale={6}
        /> */}

        {/* <SSR {...ssrProps}  /> */}
        <Drunk
          ref={drunkRef}
          blendFunction={BlendFunction.DARKEN}
          {...drunkProps}
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

      {/* <mesh castShadow position-x={0} scale={1.5}>
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
      </mesh> */}

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' metalness={0} roughness={0} />
      </mesh>
    </>
  );
}

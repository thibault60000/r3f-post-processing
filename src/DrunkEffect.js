import { Effect, BlendFunction } from "postprocessing";
import { Uniform } from "three";

const fragmentShader = /* glsl */ `
    uniform float frequency;
    uniform float amplitude;
    uniform float offset;

    void mainUv(inout vec2 uv) {
       uv.y += sin(uv.x * frequency + offset)*amplitude;
    }
    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        outputColor = vec4(0.8, 1.0, 0.5, inputColor.a);
    }
`;

export default class DrunkEffect extends Effect {
  constructor({
    frequency = 10,
    amplitude = 0.1,
    blendFunction = blendFunction.DARKEN,
    offset = 0.04,
  }) {
    super("DrunkEffect", fragmentShader, {
      blendFunction: blendFunction,
      uniforms: new Map([
        // ["frequency", { value: frequency }],
        ["frequency", new Uniform(frequency)], // other format for uniform
        ["amplitude", { value: amplitude }],
        ["offset", { value: offset }],
      ]),
    });

    console.log("DrunkEffect props: ", frequency, amplitude);
  }
  update(renderer, inputBuffer, deltaTime) {
    this.uniforms.get("offset").value += deltaTime;
    // this.uniforms.get("offset").value += 0.04;
  }
}

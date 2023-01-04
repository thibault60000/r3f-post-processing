import { forwardRef } from "react";
import DrunkEffect from "./DrunkEffect";

export default forwardRef(function Drunk(props, ref) {
  console.log("Drunk props: ", props);
  const effect = new DrunkEffect(props);
  return <primitive ref={ref} object={effect} />;
});

import { Canvas } from "@react-three/fiber";
import "./style.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import Scene from "./projects/lusion/Scene";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    {/* <Canvas
      gl={{ antialias: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6],
      }}
    >
      <App />
    </Canvas> */}

    <Scene />
  </>
);

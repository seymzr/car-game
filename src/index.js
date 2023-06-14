import "./index.css";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Physics } from "@react-three/cannon";

createRoot(document.getElementById("root")).render(
  <>
    <Canvas>
      <Physics
        broadphase="SAP"
        gravity={[0, -2.6, 0]}
      >
        <Scene />
      </Physics>
    </Canvas>

    <div class="controls">
      <p>press W A S D to move</p>
      <p>press K to swap camera</p>
      <p>press R to reset</p>
      <p>press arrows for flips</p>
    </div>
  </>
);

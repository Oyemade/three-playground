import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";

export default function CustomObject() {
  const vCount = 10 * 3;

  const geometryRef = useRef();

  const positions = useMemo(() => {
    const positions = new Float32Array(vCount * 3);
    for (let i = 0; i < vCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }
    return positions;
  }, []);

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, []);

  return (
    <>
      <mesh>
        <bufferGeometry ref={geometryRef}>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={vCount}
            itemSize={3}
          />
        </bufferGeometry>
        <meshStandardMaterial color="red" side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

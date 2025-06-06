/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 scene.gltf 
Author: MpPower™ (https://sketchfab.com/MG990)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/iphone-15-pro-max-5b7b35513a154ac69619dc2b2fe15686
Title: iPhone 15 Pro Max
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group position={[0.027, 0.957, 0.002]} rotation={[0, -Math.PI / 2, 0]} scale={[0.748, 1, 1]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.backpanel} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.metalframe} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.gray} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.black} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.glass} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Material.001']} />
      </group>
      <group position={[0.353, 1.947, -0.117]} rotation={[0, Math.PI / 2, 0]} scale={[0.025, 0.352, 0.352]}>
        <mesh geometry={nodes.Object_11.geometry} material={materials.backpanel} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.glass} />
      </group>
      <group position={[0.576, 2.236, -0.151]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.184}>
        <mesh geometry={nodes.Object_24.geometry} material={materials.metalframe} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.glass} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.lens} />
      </group>
      <group position={[0.17, 2.02, -0.151]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.184}>
        <mesh geometry={nodes.Object_28.geometry} material={materials.metalframe} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.glass} />
        <mesh geometry={nodes.Object_30.geometry} material={materials.lens} />
      </group>
      <group position={[0.167, 2.324, -0.068]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.085}>
        <mesh geometry={nodes.Object_34.geometry} material={materials.metalframe} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.lens} />
      </group>
      <group position={[0.576, 1.799, -0.151]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.184}>
        <mesh geometry={nodes.Object_39.geometry} material={materials.metalframe} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.glass} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.lens} />
      </group>
      <mesh geometry={nodes.Object_14.geometry} material={materials.metalframe} position={[0.844, 1.218, 0.002]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.Object_16.geometry} material={materials.metalframe} position={[-0.792, 1.209, 0.002]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.Object_18.geometry} material={materials.metalframe} position={[-0.792, 1.528, 0.002]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.Object_20.geometry} material={materials.metalframe} position={[-0.788, 1.896, 0.002]} rotation={[0, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.Object_22.geometry} material={materials.metalframe} position={[-0.777, 0.52, 0.002]} rotation={[0, -Math.PI / 2, 0]} scale={[-1.132, 1, 1]} />
      <mesh geometry={nodes.Object_32.geometry} material={materials.gray} position={[0.169, 1.711, -0.025]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.074} />
      <mesh geometry={nodes.Object_37.geometry} material={materials.gray} position={[0.037, 1.792, -0.11]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.009, 0.033, 0.009]} />
      <mesh geometry={nodes.Object_43.geometry} material={materials.black} position={[0.025, 2.384, 0.091]} rotation={[0, -Math.PI / 2, 0]} scale={[0.087, 1, 1]} />
      <mesh geometry={nodes.Object_45.geometry} material={materials.gray} position={[0.012, -1.036, 0.003]} rotation={[Math.PI / 2, 0, 0]} scale={0.736} />
      <mesh geometry={nodes.Object_47.geometry} material={materials.gray} position={[0.006, -1.024, 0.004]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')

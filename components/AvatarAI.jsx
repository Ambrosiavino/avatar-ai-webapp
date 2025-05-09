import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function AvatarModel() {
  const { scene } = useGLTF('/bot.glb');
  return <primitive object={scene} scale={1.5} />;
}

export default function AvatarAI() {
  const [userText, setUserText] = useState('');
  const [response, setResponse] = useState('');

  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    synth.speak(utter);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reply = `Ciao! Hai detto: "${userText}"`; // Simulated response
    setResponse(reply);
    speak(reply);
  };

  return (
    <div style={{ height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} />
        <OrbitControls enableZoom={false} />
        <AvatarModel />
      </Canvas>
      <form onSubmit={handleSubmit} style={{ position: 'absolute', bottom: '10%', width: '100%', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Scrivi qualcosa..."
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
          style={{ padding: '10px', width: '60%' }}
        />
        <button type="submit" style={{ padding: '10px' }}>Invia</button>
      </form>
      <div style={{ position: 'absolute', bottom: '5%', width: '100%', textAlign: 'center', color: '#fff' }}>
        {response && <p>Risposta: {response}</p>}
      </div>
    </div>
  );
}

useGLTF.preload('/bot.glb');
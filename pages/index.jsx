import dynamic from 'next/dynamic';

const AvatarAI = dynamic(() => import('../components/AvatarAI'), { ssr: false });

export default function Home() {
  return (
    <main style={{ backgroundColor: '#111', height: '100vh', color: '#fff' }}>
      <AvatarAI />
    </main>
  );
}
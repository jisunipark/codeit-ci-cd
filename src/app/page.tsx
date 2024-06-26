import Image from 'next/image';

export default function Home() {
  return (
    <button
      type="button"
      onClick={() => {
        throw new Error('Sentry Frontend Error');
      }}
    >
      Throw error
    </button>
  );
}

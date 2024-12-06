import { useContext } from 'react';
import ReactIcon from './../assets/react.svg?react';
import { ThemeContext } from '../routes/RootComponent';

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      Home
      <div>
        <ReactIcon />
      </div>
      {theme}
    </div>
  );
}

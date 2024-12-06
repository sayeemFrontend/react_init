import { Outlet, useLoaderData } from 'react-router-dom';
import Layout from '../layout/Layout';
import { createContext, useState } from 'react';

const slice = {
  theme: 'dark',
};
export const ThemeContext = createContext(slice);

export default function RootComponent() {
  const [theme, setTheme] = useState('dark');
  const response = useLoaderData();

  console.log('sayeem', response);

  //control user based on authenticated
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Layout>
        <Outlet />
      </Layout>
    </ThemeContext.Provider>
  );
}

import { createRoot } from 'react-dom/client';
import Preview from './Preview'; // 修改为不带.tsx后缀
import { createContext } from 'react';
import { useAppStore } from './application/store';
export const StoreContext = createContext<any>(null);
const App = () => {
  const store = useAppStore('passport');

  return (
    <StoreContext.Provider value={store}>
      <Preview />
    </StoreContext.Provider>
  );
};

createRoot(document.getElementById('root')!).render(<App />);

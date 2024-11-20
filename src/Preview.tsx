import { useContext } from 'react';
import { StoreContext } from './main';
import { useStore } from 'zustand';
import { StoreState } from './application/store';

function Preview() {
  const store = useContext(StoreContext);

  const state = useStore(store) as StoreState;
  return (
    <>
      <div>version:{state.appInfo.version}</div>
      <button
        onClick={() => {
          state.update({ appInfo: { version: 111 } });
        }}
      >
        change
      </button>
    </>
  );
}

export default Preview;

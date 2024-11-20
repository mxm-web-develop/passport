import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { defaultAppInfo, defaultUserInfo } from '../constants';
import { AppInfoBase, AppPassportObj, UserInfoBase } from '../types';

interface StoreState {
  appInfo: AppInfoBase;
  userInfo: UserInfoBase;
  update: (data: Partial<AppInfoBase & UserInfoBase>) => void;
  clear: () => void;
  // getUserInfo: () => UserInfoBase;
  // getAppInfo: () => AppInfoBase;
  // getToken: () => string | null;
  // freshToken: () => void;
  // isLogined: () => boolean;
}


const useAppStore = (storeName: string) => create(persist(
  (set, get) => ({
    appInfo: defaultAppInfo,
    userInfo: defaultUserInfo,
    update: (data: any) => set((state: AppPassportObj) => ({
      ...state,
      appInfo: { ...state.appInfo, ...(data.appInfo || {}) },
      userInfo: { ...state.userInfo, ...(data.userInfo || {}) },
      lastupdate: new Date().getTime()
    })),
    clear: () => set((state: AppPassportObj) => ({
      ...state,
      appInfo: defaultAppInfo,
      userInfo: defaultUserInfo,
      lastupdate: new Date().getTime(),
      isLoggedIn: false
    })),
    //getToken: () => get((state: AppPassportObj) => state.appInfo)
  }),
  {
    name: storeName
  }
))
export { useAppStore }

// export const useAppStore = (storeName: string) => create<StoreState>(persist(
//   (set) => ({
//     appInfo: defaultAppInfo,
//     userInfo: defaultUserInfo,
//     update: (data: Partial<AppInfoBase & UserInfoBase>) => set((state: StoreState) => ({
//       ...state,
//       appInfo: { ...state.appInfo, ...(data.appInfo || {}) },
//       userInfo: { ...state.userInfo, ...(data.userInfo || {}) },
//     })),
//     clear: () => set({ appInfo: defaultAppInfo, userInfo: defaultUserInfo }),
//     getUserInfo: () => defaultUserInfo,
//     getAppInfo: () => defaultAppInfo,
//     getToken: () => null,
//     freshToken: () => { },
//     isLogined: () => false,
//   }),
//   {
//     name: storeName, // unique name for persisting session
//   }
// ));
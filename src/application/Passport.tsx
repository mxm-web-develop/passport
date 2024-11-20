import { useAppStore } from "./store";





const usePassPort = ({ storeName, secret }: { storeName: string, secret?: string }) => {
  //主要逻辑
  const store = useAppStore(storeName);

  console.log(store.persist.getOptions().name)
  return {
    // appInfo,
    // userInfo,
    // 
    // clear,
    // getUserInfo,
    // getAppInfo,
    // getToken,
    // freshToken,
    // isLogined,
  }
}

export default usePassPort
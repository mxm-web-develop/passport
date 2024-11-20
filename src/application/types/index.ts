export interface AppInfoBase {
  name?: string;
  authors?: string[];
  version?: string;
  theme?: string;
  lang?: string;
  [key: string]: any;
}

export interface UserInfoBase {
  userName?: string;
  role?: string;
  email?: string;
  avatar?: string;
  phone?: string;
  realName?: string;
  [key: string]: any;
}

export interface AppPassportObj {
  appName: string;
  appInfo?: AppInfoBase;
  userInfo?: UserInfoBase;
  lastupdate?: number;
  isLoggedIn: boolean;
}

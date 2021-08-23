import { VKAPI } from "./vk/api";

export interface IEstuaireOptions {
  vk: VKOptions;
}

export interface IEstuaireProviders {
  vk: VKAPI;
}

export interface VKOptions {
  serviceToken: string;
  connect?: {
    appId: number;
    redirectUrl: string;
    secureKey: string;
  };
}

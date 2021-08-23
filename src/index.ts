import { IEstuaireOptions, IEstuaireProviders } from "./types";
import { VKAPI } from "./vk/api";

export class Estuaire {
  private providers: IEstuaireProviders = Object.create(null);

  public readonly vk: VKAPI;

  constructor(options: IEstuaireOptions) {
    this.providers = {
      vk: new VKAPI({ ...options.vk }),
    };

    this.vk = this.providers.vk;
  }
}

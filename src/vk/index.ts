import { VKAPI } from "./api";

export class VK {
  public api: VKAPI;

  public constructor(options: any) {
    this.api = new VKAPI(options);
  }
}

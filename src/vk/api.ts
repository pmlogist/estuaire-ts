import { IVKAPIMethods } from "../interfaces/vk/methods";
import { EstuaireFetcher } from "../lib/fetcher";
import { HOST } from "./constants";

export class VKAPI {
  private methods: string[];
  public api: IVKAPIMethods;

  constructor(options: any) {
    this.api = Object.create(null);
    this.methods = ["account", "photos", "users"];

    for (const method of this.methods) {
      this.api[method] = new Proxy(Object.create(null), {
        get: (_, prop: string) => async (params: { [key: string]: string }) =>
          this.APIRequest({
            url: HOST.VK.API,
            method: `${method}.${prop}`,
            params,
            ...options,
          }),
      });
    }
  }

  APIRequest(props) {
    const fetcher = new EstuaireFetcher();
    const url = fetcher.urlRequest(props);

    return fetcher.sendRequest(url);
  }
}

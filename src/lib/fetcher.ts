import fetch from "node-fetch";

interface IRequestURLProps {
  provider: "vk";
  method: string;
  serviceToken: string;
  url: string;
  ver: number;
  params: string;
}

export interface IEstuaireFetcher {
  urlRequest(props: IRequestURLProps): string;
}

export class EstuaireFetcher implements IEstuaireFetcher {
  urlRequest(props: IRequestURLProps) {
    const { method, serviceToken, url, ver = 5.126 } = props;

    const parsedParams = new URLSearchParams(props.params);

    return `${url}/${method}?${parsedParams}&v=${ver}&access_token=${serviceToken}`;
  }

  async sendRequest(url: string) {
    const res = await fetch(url);

    const data = await res.json();

    if (data.error) {
      return data;
    }

    return data.response;
  }
}

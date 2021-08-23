import fetch from "node-fetch";
import { URLSearchParams } from "url";

interface IURLRequest {
  method: string;
  params: string;
  token: string;
  url: string;
  ver: number;
}

const URLRequest = (props: any) => {
  const { method, serviceToken, url, ver = 5.126 } = props;

  const parsedParams = new URLSearchParams(props.params);
  console.log(parsedParams);

  return `${url}/${method}?${parsedParams}&v=${ver}&access_token=${serviceToken}`;
};

export const APIRequest = async (props: IURLRequest): Promise<any> => {
  const url = URLRequest(props);

  const res = await fetch(url);

  const data: any = await res.json();

  if (data.error) {
    return data;
  }

  return data.response;
};

import { IVKParameters } from "./parameters";
import { IVKResponses } from "./responses";

import P = IVKParameters;
import R = IVKResponses;

export interface IVKAPIUsers {
  get: (params: P.UsersGetParams) => Promise<R.UsersGetResponse>;
}

export interface IVKAPIMethods {
  users: IVKAPIUsers;
}

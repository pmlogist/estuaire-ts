import { IVKObjects } from "./objects";

export namespace IVKResponses {
  import O = IVKObjects;

  export interface AuthSuccess {
    access_token: string;
    expires_in: number;
    user_id: number;
  }

  export interface AuthError {
    error: string;
    error_description: string;
  }

  export type AuthResult = AuthSuccess & AuthError;

  export type UsersGetResponse = O.Users[];

  export interface UsersSearchResponse {
    count?: number;
    //items?: Objects.Users[];
    items?: any;
  }
}

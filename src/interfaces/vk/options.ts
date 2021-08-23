export namespace IVKOptions {
  export interface VKOptions extends VKConnectOptions {
    token: string;
    ver?: "5.126";
  }

  export interface VKConnectOptions {
    responseType?: "code" | "token";
  }

  export type VKUserTokenScope =
    | "notify"
    | "friends"
    | "photos"
    | "audio"
    | "video"
    | "stories"
    | "pages"
    | "status"
    | "notes"
    | "messages"
    | "wall"
    | "ads"
    | "offline"
    | "docs"
    | "groups"
    | "notifications"
    | "stats"
    | "email"
    | "market"
    | "nohttps";
}

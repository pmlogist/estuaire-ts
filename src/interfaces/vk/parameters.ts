import { IVKObjects } from "./objects";

import Objects = IVKObjects;

export namespace IVKParameters {
  export interface PhotosConfirmTagParams {
    owner_id?: number;
    photo_id: string;
    tag_id: number;
  }

  export interface PhotosCopyParams {
    access_key?: string;
    owner_id: number;
    photo_id: number;
  }

  export interface PhotosCreateAlbumParams {
    comments_disabled?: boolean | number;
    description?: string;
    group_id?: number;
    privacy_comment?: string[] | string;
    privacy_view?: string[] | string;
    title: string;
    upload_by_admins_only?: boolean | number;
  }

  export interface PhotosCreateCommentParams {
    access_key?: string;
    attachments?: string[] | string;
    from_group?: boolean | number;
    guid?: string;
    message?: string;
    owner_id?: number;
    photo_id: number;
    reply_to_comment?: number;
    sticker_id?: number;
  }

  export interface PhotosDeleteParams {
    owner_id?: number;
    photo_id: number;
  }

  export interface PhotosDeleteAlbumParams {
    album_id: number;
    group_id?: number;
  }

  export interface PhotosDeleteCommentParams {
    comment_id: number;
    owner_id?: number;
  }

  export interface PhotosEditParams {
    caption?: string;
    delete_place?: boolean | number;
    foursquare_id?: string;
    latitude?: number;
    longitude?: number;
    owner_id?: number;
    photo_id: number;
    place_str?: string;
  }

  export interface PhotosEditAlbumParams {
    album_id: number;
    comments_disabled?: boolean | number;
    description?: string;
    owner_id?: number;
    privacy_comment?: string[] | string;
    privacy_view?: string[] | string;
    title?: string;
    upload_by_admins_only?: boolean | number;
  }

  export interface PhotosEditCommentParams {
    attachments?: string[] | string;
    comment_id: number;
    message?: string;
    owner_id?: number;
  }

  export interface PhotosGetParams {
    album_id?: string;
    count?: number;
    extended?: boolean | number;
    feed_type?: string;
    feed?: number;
    offset?: number;
    owner_id?: number;
    photo_ids?: string[] | string;
    photo_sizes?: boolean | number;
    rev?: boolean | number;
  }

  export interface PhotosGetAlbumsParams {
    album_ids?: number[] | number;
    count?: number;
    need_covers?: boolean | number;
    need_system?: boolean | number;
    offset?: number;
    owner_id?: number;
    photo_sizes?: boolean | number;
  }

  export interface PhotosGetAlbumsCountParams {
    group_id?: number;
    user_id?: number;
  }

  export interface PhotosGetAllParams {
    count?: number;
    extended?: boolean | number;
    need_hidden?: boolean | number;
    no_service_albums?: boolean | number;
    offset?: number;
    owner_id?: number;
    photo_sizes?: boolean | number;
    skip_hidden?: boolean | number;
  }

  export interface PhotosGetAllCommentsParams {
    album_id?: number;
    count?: number;
    need_likes?: boolean | number;
    offset?: number;
    owner_id?: number;
  }

  export interface PhotosGetByIdParams {
    extended?: boolean | number;
    photo_sizes?: boolean | number;
    photos?: string[] | string;
  }

  export interface PhotosGetChatUploadServerParams {
    chat_id: number;
    crop_width?: number;
    crop_x?: number;
    crop_y?: number;
  }

  export interface PhotosGetCommentsParams {
    access_key?: string;
    count?: number;
    extended?: boolean | number;
    fields?: Objects.UsersFields[];
    need_likes?: boolean | number;
    offset?: number;
    owner_id?: number;
    photo_id: number;
    sort?: "asc" | "desc";
    start_comment_id?: number;
  }

  export interface PhotosGetMarketAlbumUploadServerParams {
    group_id: number;
  }

  export interface PhotosGetMarketUploadServerParams {
    crop_width?: number;
    crop_x?: number;
    crop_y?: number;
    group_id: number;
    main_photo?: boolean | number;
  }

  export interface PhotosGetMessagesUploadServerParams {
    peer_id?: number;
  }

  export interface PhotosGetNewTagsParams {
    count?: number;
    offset?: number;
  }

  export interface PhotosGetOwnerCoverPhotoUploadServerParams {
    crop_x?: number;
    crop_y?: number;
    crop_x2?: number;
    crop_y2?: number;
    group_id: number;
  }

  export interface PhotosGetOwnerPhotoUploadServerParams {
    owner_id?: number;
  }

  export interface PhotosGetTagsParams {
    access_key?: string;
    owner_id?: number;
    photo_id: number;
  }

  export interface PhotosGetUploadServerParams {
    album_id?: number;
    group_id?: number;
  }

  export interface PhotosGetUserPhotosParams {
    count?: number;
    extended?: boolean | number;
    offset?: number;
    sort?: string;
    user_id?: number;
  }

  export interface PhotosGetWallUploadServerParams {
    group_id?: number;
  }

  export interface PhotosMakeCoverParams {
    album_id?: number;
    owner_id?: number;
    photo_id: number;
  }

  export interface PhotosMoveParams {
    owner_id?: number;
    photo_id: number;
    target_album_id: number;
  }

  export interface PhotosPutTagParams {
    owner_id?: number;
    photo_id: number;
    user_id: number;
    x?: number;
    y?: number;
    x2?: number;
    y2?: number;
  }

  export interface PhotosRemoveTagParams {
    owner_id?: number;
    photo_id: number;
    tag_id: number;
  }

  export interface PhotosReorderAlbumsParams {
    after?: number;
    album_id: number;
    before?: number;
    owner_id?: number;
  }

  export interface PhotosReorderPhotosParams {
    after?: number;
    before?: number;
    owner_id?: number;
    photo_id: number;
  }

  export interface PhotosReportParams {
    owner_id: number;
    photo_id: number;
    reason?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  }

  export interface PhotosReportCommentParams {
    comment_id: number;
    owner_id: number;
    reason?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  }

  export interface PhotosRestoreParams {
    owner_id?: number;
    photo_id: number;
  }

  export interface PhotosRestoreCommentParams {
    comment_id: number;
    owner_id?: number;
  }

  export interface PhotosSaveParams {
    album_id?: number;
    caption?: string;
    group_id?: number;
    hash?: string;
    latitude?: number;
    longitude?: number;
    photos_list?: string;
    server?: number;
  }

  export interface PhotosSaveMarketAlbumPhotoParams {
    group_id: number;
    hash: string;
    photo: string;
    server: number;
  }

  export interface PhotosSaveMarketPhotoParams {
    crop_data?: string;
    crop_hash?: string;
    group_id?: number;
    hash: string;
    photo: string;
    server: number;
  }

  export interface PhotosSaveMessagesPhotoParams {
    hash?: string;
    photo: string;
    server?: number;
  }

  export interface PhotosSaveOwnerCoverPhotoParams {
    hash: string;
    photo: string;
  }

  export interface PhotosSaveOwnerPhotoParams {
    hash?: string;
    photo?: string;
    server?: string;
  }

  export interface PhotosSaveWallPhotoParams {
    caption?: string;
    group_id?: number;
    hash?: string;
    latitude?: number;
    longitude?: number;
    photo: string;
    server?: number;
    user_id?: number;
  }

  export interface PhotosSearchParams {
    count?: number;
    end_time?: number;
    lat?: number;
    long?: number;
    offset?: number;
    q?: string;
    radius?: number;
    sort?: number;
    start_time?: number;
  }
  export interface UsersGetParams {
    name_case?: "nom" | "gen" | "dat" | "acc" | "ins" | "abl";
    user_ids: string[] | string;
    fields?: Objects.UsersFields[];
  }

  export interface UsersGetFollowersParams {
    count?: number;
    fields?: Objects.UsersFields[];
    name_case?: "nom" | "gen" | "dat" | "acc" | "ins" | "abl";
    offset?: number;
    user_id?: number;
  }

  export interface UsersGetSubscriptionsParams {
    count?: number;
    extended?: boolean | number;
    fields?: Objects.UsersFields[];
    offset?: number;
    user_id?: number;
  }

  export interface UsersReportParams {
    comment?: string;
    type: "porn" | "spam" | "insult" | "advertisement";
    user_id: number;
  }

  export interface UsersSearchParams {
    age_from?: number;
    age_to?: number;
    birth_day?: number;
    birth_month?: number;
    birth_year?: number;
    city?: number;
    company?: string;
    count?: number;
    country?: number;
    fields?: Objects.UsersFields[];
    from_list?: string[] | string;
    group_id?: number;
    has_photo?: boolean | number;
    hometown?: string;
    offset?: number;
    online?: boolean | number;
    position?: string;
    q: string;
    religion?: string;
    school_city?: number;
    school_class?: number;
    school_country?: number;
    school_year?: number;
    school?: number;
    sex?: 0 | 1 | 2;
    sort?: 0 | 1;
    status?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    university_chair?: number;
    university_country?: number;
    university_faculty?: number;
    university_year?: number;
    university?: number;
  }
}

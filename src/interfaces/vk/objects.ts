export namespace IVKObjects {
  export interface AudioAudio {
    album_id?: number;
    artist: string;
    date?: number;
    duration: number;
    genre_id?: number;
    id: number;
    performer?: string;
    title: string;
    url?: string;
  }
  // Returns  0 - false, 1 true
  export type BaseBoolean = 0 | 1 | boolean;

  export interface BaseCity {
    // City ID.
    id: number;
    // City name.
    title: string;
  }

  export interface BaseCommentsInfo {
    count?: number;
    groups_can_post?: boolean | number;
  }

  export interface BaseCountry {
    // Country ID.
    id: number;
    // Country name.
    title: string;
  }
  // Data about points used for cropping of profile and preview user photos.
  export interface BaseCropPhoto {
    //  Photo object with user photo used for cropping main profile photo.
    photo: unknown;
    // Coordinate X of the left upper corner
    x: number;
    // Coordinate X of the right lower corner
    x2: number;
    // Coordinate Y of the left upper corner
    y: number;
    // Coordinate Y of the right lower corner
    y2: number;
  }

  export interface BaseCropPhotoRect {
    // Coordinate X of the left upper corner
    x: number;
    // Coordinate Y of the left upper corner
    y: number;
    // Coordinate X of the right lower corner
    x2: number;
    // Coordinate Y of the right lower corner
    y2: number;
  }

  export interface BaseError {
    error_code?: number;
    error_msg?: string;
    error_subcode?: number;
    error_text?: string;
    request_params?: BaseRequestParam[];
  }

  /**
   * 0 — not a friend,
   * 1 — outcome request has been sent,
   * 2 — incoming request has been sent,
   * 3 — friend.
   */
  export type BaseFriendStatus =
    | 0 //
    | 1
    | 2
    | 3;

  export interface eo {
    showmap?: number;
    type?: string;
  }

  export interface eoCoordinates {
    latitude: number;
    longitude: number;
  }

  export interface radientPoint {
    color: string;
    position: number;
  }

  export interface BaseImage {
    height: number;
    id?: string;
    url: string;
    width: number;
  }

  export interface BaseLikes {
    count?: number;
  }

  export interface BaseLikesInfo {
    count: number;
    user_likes: number;
  }

  export interface BaseLink {
    caption?: string;
    description?: string;
    id?: string;
    is_external?: boolean | number;
    is_favorite?: boolean | number;
    preview_page?: string;
    preview_url?: string;
    title?: string;
    url: string;
  }

  export interface BaseLinkApplication {
    app_id?: number;
  }

  export interface BaseLinkApplicationStore {
    id?: number;
    name?: string;
  }

  export interface BaseLinkButton {
    block_id?: string;
    curator_id?: number;
    icon?: string;
    owner_id?: number;
    section_id?: string;
    title?: string;
  }

  export interface BaseLinkButtonAction {
    consume_reason?: string;
    url?: string;
  }

  export type BaseLinkButtonActionType = "open_url";

  export type BaseLinkButtonStyle = "primary" | "secondary";

  export interface BaseLinkProduct {
    merchant?: string;
    orders_count?: number;
  }

  export type BaseLinkProductStatus =
    | "active"
    | "blocked"
    | "sold"
    | "deleted"
    | "archived";

  export interface BaseLinkRating {
    reviews_count?: number;
    stars?: number;
  }

  export interface MediaRestriction {
    card_icon?: BaseImage[];
    list_icon?: BaseImage[];
    text?: string;
    title: string;
  }

  export interface BaseMessageError {
    code?: number;
    description?: string;
  }

  export interface BaseObject {
    id: number;
    title: string;
  }

  export interface BaseObjectCount {
    count?: number;
  }

  export interface BaseObjectWithName {
    id: number;
    name: string;
  }

  export interface BasePlace {
    address?: string;
    checkins?: number;
    city?: string;
    country?: string;
    created?: number;
    icon?: string;
    id?: number;
    latitude?: number;
    longitude?: number;
    title?: string;
    type?: string;
  }

  export type BasePlatform =
    | 1 // Mobile Web (m.vk.com)
    | 2 // iPhone app
    | 3 // iPad app
    | 4 // Android app
    | 5 // Windows Phone app
    | 6 // Windows 8 app
    | 7 // Web (vk.com)
    | 8; // VK Mobile

  export type BasePropertyExists = 1;

  export type BaseRelation =
    | 1 // single;
    | 2 // in a relationship;
    | 3 // engaged;
    | 4 // married;
    | 5 // it's complicated;
    | 6 // actively searching;
    | 7 // in love;
    | 8 // in a civil union;
    | 0; // not specified.

  /* Count of views */
  export interface BaseRepostsInfo {
    count: number;
    mail_count?: number;
    user_reposted?: number;
    wall_count?: number;
  }

  export interface BaseRequestParam {
    key?: string;
    value?: string;
  }
  /**
   * Returns
   * 1 — female;
   * 2 — male;
   * 0 — not specified.
   */
  export type BaseSex = 0 | 1 | 2;

  export interface BaseSticker {
    animation_url?: string;
    animations?: BaseStickerAnimation[];
    images?: BaseImage[];
    images_with_background?: BaseImage[];
    is_allowed?: boolean | number;
    product_id?: number;
    sticker_id?: number;
  }

  export interface BaseStickerAnimation {
    type?: "light" | "dark";
    url?: string;
  }

  export type BaseStickersList = BaseSticker[];

  export interface BaseUploadServer {
    upload_url: string;
  }

  export type serGroupFields =
    | "about"
    | "action_button"
    | "activities"
    | "activity"
    | "addresses"
    | "admin_level"
    | "age_limits"
    | "author_id"
    | "ban_info"
    | "bdate"
    | "blacklisted"
    | "blacklisted_by_me"
    | "books"
    | "can_create_topic"
    | "can_message"
    | "can_post"
    | "can_see_all_posts"
    | "can_see_audio"
    | "can_send_friend_request"
    | "can_upload_video"
    | "can_write_private_message"
    | "career"
    | "city"
    | "common_count"
    | "connections"
    | "contacts"
    | "counters"
    | "country"
    | "cover"
    | "crop_photo"
    | "deactivated"
    | "description"
    | "domain"
    | "education"
    | "exports"
    | "finish_date"
    | "fixed_post"
    | "followers_count"
    | "friend_status"
    | "games"
    | "has_market_app"
    | "has_mobile"
    | "has_photo"
    | "home_town"
    | "id"
    | "interests"
    | "is_admin"
    | "is_closed"
    | "is_favorite"
    | "is_friend"
    | "is_hidden_from_feed"
    | "is_member"
    | "is_messages_blocked"
    | "can_send_notify"
    | "is_subscribed"
    | "last_seen"
    | "links"
    | "lists"
    | "maiden_name"
    | "main_album_id"
    | "main_section"
    | "market"
    | "member_status"
    | "members_count"
    | "military"
    | "movies"
    | "music"
    | "name"
    | "nickname"
    | "occupation"
    | "online"
    | "online_status"
    | "personal"
    | "phone"
    | "photo_100"
    | "photo_200"
    | "photo_200_orig"
    | "photo_400_orig"
    | "photo_50"
    | "photo_id"
    | "photo_max"
    | "photo_max_orig"
    | "quotes"
    | "relation"
    | "relatives"
    | "schools"
    | "screen_name"
    | "sex"
    | "site"
    | "start_date"
    | "status"
    | "timezone"
    | "trending"
    | "tv"
    | "type"
    | "universities"
    | "verified"
    | "wall_comments"
    | "wiki_page"
    | "vk_admin_status";

  export interface BaseUserId {
    user_id?: number;
  }

  export interface OrdersAmount {
    // Currency name
    currency?: string;
    amounts?: OrdersAmountItem[];
  }

  export interface OrdersAmountItem {
    amount?: number;
    description?: string;
    votes?: string;
  }

  export interface OrdersOrder {
    amount?: number;
    app_order_id?: number;
    cancel_transaction_id?: number;
    date?: number;
    id?: number;
    item?: string;
    receiver_id?: number;
    status?: string;
    transaction_id?: number;
    user_id?: number;
  }

  export interface OrdersSubscription {
    cancel_reason?: string;
    create_time: number;
    id: number;
    item_id: string;
    next_bill_time?: number;
    pending_cancel?: boolean | number;
    period: number;
    period_start_time: number;
    price: number;
    status: string;
    test_mode?: boolean | number;
    trial_expire_time?: number;
    update_time: number;
  }

  export interface OwnerState {
    description?: string;
    state?: 1 | 2 | 3 | 4;
  }
  export interface UsersCareer {
    //  Community ID (if available, otherwise company);
    group_id?: number;
    //  Company name (if available, otherwise group_id);
    company?: string;
    //  Country ID
    country_id?: number;
    //  City ID (if available, otherwise city_name);
    city_id?: number;
    //  City name (if available, otherwise city_id);
    city_name?: string;
    //  Career beginning year;
    from?: number;
    //  Career ending year;
    until?: number;
    //  Position.
    position?: number;
  }

  export interface UsersContacts {
    //  User's mobile phone (only for standalone applications).
    home_phone?: number;
    //  User's additional phone number.
    mobile_phone?: number;
  }

  export interface UsersCounters {
    // Number of photo albums.
    albums?: number;
    // Number of videos.
    videos?: number;
    // Number of audios.
    audios?: number;
    // Number of photos.
    photos?: number;
    // Number of notes.
    notes?: number;
    // Number of friends.
    friends?: number;
    // Number of communities.
    groups?: number;
    // Number of online friends.
    online_friends?: number;
    // Number of mutual friends.
    mutual_friends?: number;
    // Number of videos the user is tagged on.
    user_videos?: number;
    // Number of followers.
    followers?: number;
    // Number of subscriptions (usersè only).
    pages?: number;
  }

  export interface UsersEducation {
    // University ID.
    university?: number;
    // University name.
    university_name?: string;
    // Faculty ID.
    faculty?: number;
    // Faculty name.
    faculty_name?: string;
    // Graduation year.
    graduation?: number;
  }

  export interface UsersExports {
    twitter?: unknown;
    facebook?: unknown;
    livejournal?: unknown;
    instagram?: unknown;
  }

  export interface UsersLastSeen {
    // Last visit date (in UNIX time).
    time?: number;
    /**
     * Type of the platform that used for the last authorization.
     * Options for {@link BasePlatform}
     */
    platform?: BasePlatform;
  }

  export interface UsersMilitary {
    // Unit number;
    unit?: string;
    // Unit ID;
    unit_id?: number;
    // Country ID;
    country_id?: number;
    // Service starting year;
    from?: number;
    // Service ending year.
    until?: number;
  }

  export interface UsersOccupation {
    // Possible values: work, school, university;
    type?: "work" | "school" | "university";
    //  ID of school, university, company group (the one a user works in);
    id?: number;
    //  name of school, university or work place;
    name?: string;
  }

  export interface UsersOnline {
    // If user is online from a mobile
    online_mobile?: 1 | boolean;
    // If user is online from app website
    online_app?: BasePlatform;
  }

  export interface UsersPersonal {
    // Political views
    political?:
      | 1 // Communist;
      | 2 // Socialist;
      | 3 // Moderate;
      | 4 // Liberal;
      | 5 // Conservative;
      | 6 // Monarchist;
      | 7 // Ultraconservative;
      | 8 // Apathetic;
      | 9; // Libertarian.
    // Languages
    langs?: string[];
    // World view
    religion?: string;
    // Inspired by.
    inspired_by: string;
    // Important in others
    people_main?:
      | 1 // intellect and creativity;
      | 2 // kindness and honesty;
      | 3 // health and beauty;
      | 4 // wealth and power;
      | 5 // courage and persistence;
      | 6; // humor and love for life.

    // Personal priority.
    life_main?:
      | 1 // family and children;
      | 2 // career and money;
      | 3 // entertainment and leisure;
      | 4 // science and research;
      | 5 // improving the world;
      | 6 // personal development;
      | 7 // beauty and art ;
      | 8; // fame and influence;
    // Views on smoking. Possible values:
    smoking?:
      | 1 // very negative;
      | 2 // negative;
      | 3 // neutral;
      | 4 // compromisable;
      | 5; // positive.

    // Views on alcohol. Possible values:
    alcohol:
      | 1 // very negative;
      | 2 // negative;
      | 3 // neutral;
      | 4 // compromisable;
      | 5; // positive.
  }

  export interface UsersRelatives {
    // Use name instead of id if a relative is not a VK user
    id?: number;
    // Relative name
    name?: string;
    // Relationship type
    type?: "sibling" | "parent" | "child" | "grandparent" | "grandchild";
  }

  export interface UsersSchools {
    // School ID;
    id?: number;
    // ID of the country the school is located in;
    country?: number;
    // ID of the city the school is located in;
    city?: number;
    // School name;
    name?: string;
    // Year the user started to study;
    year_from?: number;
    // Year the user finished to study;
    year_to?: number;
    // Graduation year;
    year_graduated?: number;
    // School class letter;
    class?: string;
    // Speciality;
    speciality?: string;
    // Type ID;
    type?: number;
    // Type name. Possible values for pairs type-typeStr:
    type_str?:
      | 0 // "school";
      | 1 // "gymnasium";
      | 2 // lyceum";
      | 3 // "boarding school";
      | 4 // "evening school";
      | 5 // "music school";
      | 6 // "sport school";
      | 7 // "artistic school";
      | 8 // "college";
      | 9 // "professional lyceum";
      | 10 // "technical college";
      | 11 // "vocational";
      | 12 // "specialized school";
      | 13; // "art school".
  }

  export interface UsersUniversities {
    // University ID;
    id?: number;
    // ID of the country the university is located in;
    country?: number;
    // ID of the city the university is located in;
    city?: number;
    // University name;
    name?: string;
    // Faculty ID;
    faculty?: number;
    // Faculty name;
    faculty_name?: string;
    // University chair ID;
    chair?: number;
    // Chair name;
    chair_name?: string;
    // Graduation year;
    graduation?: number;
    // Education form;
    education_form?: string;
    // Education status.
    education_status?: string;
  }

  export interface UsersDefault {
    // Returns user ID.
    id: number;
    // Returns user first name
    first_name: string;
    // Returns last name
    last_name: string;
    can_access_closed: boolean;
    is_closed: boolean;
    // Keep in mind that in this case no additional fields are returned.
    deactivated?: "deleted" | "banned";
    // Returns nothing if no access_token provided and "Only VK usersè" privacy setting option is set
    hidden?: 1;
  }

  export interface UsersOptionalFields {
    // Returns user's "About me" session.
    about?: string;
    // Returns user's activities.
    activities?: string;
    // Returns user's birthday as DD.MM.YYYY or DD.MM. If hidden, no field is returned.
    bdate?: string;
    // Returns 1 if a current user is in the requested user's blacklist.
    blacklisted?: BaseBoolean;
    // Returns 1 if a user is in the current user's blacklist.
    blacklisted_by_me?: BaseBoolean;
    // Returns user's favorite books.
    books?: string;
    /**
     * If current user can post on the wall.
     * Returns 1 – allowed, 0 - not allowed.
     */
    can_post?: BaseBoolean;
    /**
     * If current user can see other usersè' posts on the wall.
     * Returns 1 – allowed, 0 – not allowed.
     */
    can_see_all_posts?: BaseBoolean;
    /**
     * If current user can see usersè' audio.
     * Returns 1 – allowed, 0 – not allowed.
     */
    can_see_audio?: BaseBoolean;
    /**
     * If current user can send friend request to a user
     * Returns 1 – allowed, 0 – not allowed.
     */
    can_send_friend_request?: BaseBoolean;
    /**
     * If current user can write private messages to a user.
     * Returns 1 – allowed, 0 – not allowed.
     */
    can_write_private_message?: BaseBoolean;
    /**
     * Information about user's career. Object with following fields:
     * Options for {@link UsersCareer career}
     */
    career?: UsersCareer;
    /**
     * User's city. Returns 0 if not specified.
     * Options for {@link BaseCity city}
     */
    city?: BaseCity | 0;
    /**
     * If data are available...
     * Options for {@link UsersContacts contacts}
     */
    contacts?: UsersContacts;
    /**
     * Returns only in usersè.get method when only one user information is requested and access_token is passed.
     * Can be used in usersè.get method only when requesting information about a user.
     * Options for {@link UsersCounters counters}
     */
    counters?: UsersCounters;
    /**
     * Country specified on user's page in "Contacts" section
     * Options for {@link BaseCountry country}
     */
    country?: BaseCountry;
    /**
     * Data about points used for cropping of profile and preview user photos.
     * Options for {@link BaseCropPhoto crop_photo}
     */
    crop_photo?: BaseCropPhoto;
    /**
     * Page screen name. Returns a string with a page screen name (only subdomain is returned, like andrew).
     * If not set, "id'+uid is returned, e.g. id35828305.
     */
    domain?: string;
    /**
     * Information about user's higher education institution.
     * Options for {@link UsersEducation education}
     */
    education?: UsersEducation;
    /**
     * External services with export configured
     * Options for {@link UsersExports exports}
     */
    exports?: UsersExports;
    // nom — nominative (default)
    first_name_nom?: string;
    //  gen — genitive
    first_name_gen?: string;
    //  nom — dative
    first_name_dat?: string;
    // nom — accusative
    first_name_acc?: string;
    // nom — instrumental
    first_name_ins?: string;
    // nom — prepositional
    first_name_abl?: string;
    // Number of followers
    followers_count?: number;
    /**
     * Friend status with a current user.
     * Options for {@link BaseFriendStatus friend_status.}
     */
    friend_status?: BaseFriendStatus;
    // Favorite games.
    games?: string;
    /**
     * We recommend you to use it prior to call of secure.sendSMSNotification method.
     * @returns 1 — available, 0 — not available.
     */
    has_mobile?: BaseBoolean;
    /**
     * Information whether the user has profile photo.
     * @returns 1 — available,
     */
    has_photo?: BaseBoolean;
    // User's home town name.
    home_town?: string;
    // User's interests/
    interests?: string;
    // Information whether the user is in faves of current user.
    is_favorite?: BaseBoolean;
    // Information whether the user is a friend of current user.
    is_friends?: BaseBoolean;
    // Information whether the user is hidden from current user's feed.
    is_hidden_from_feed?: BaseBoolean;
    // nom — nominative (default)
    last_name_nom?: string;
    // gen — genitive
    last_name_gen?: string;
    // nom — dative
    last_name_dat?: string;
    // nom — accusative
    last_name_acc?: string;
    // nom — instrumental
    last_name_ins?: string;
    // nom — prepositional
    last_name_abl?: string;
    /**
     * Last visit date
     * Options for {@link UsersLastSeen last_screen}
     */
    last_seen?: UsersLastSeen;
    /**
     * Comma-separated friend lists IDs the user is included to.
     * Field is available for friends.get method only
     */
    lists?: string;
    // Maiden name.
    maiden_name?: string;
    /**
     * Information about user's military service.
     * Options for {@link UsersMilitary military}
     */
    military?: UsersMilitary;
    // Favorite movies
    movies?: string;
    // Favorite Music
    music?: string;
    // Nickname
    nickname?: string;
    /**
     * User's occupation.
     * Options for {@link UsersOccupation occupation}
     */
    occupation?: unknown;
    /**
     * Information whether the user is online
     * Returns 1 — online, 0 — offline.
     */
    online?: BaseBoolean;
    // Testing
    online_app?: number;
    /**
     *  If user utilizes a mobile application or site mobile version, returns 1
     */
    online_mobile?: 1 | boolean;
    /**
     * Information from the "Personal views" section.
     * Options for {@link UsersPersonal personal}
     */
    personal?: UsersPersonal;
    /**
     * URL of square photo of the user with 50 pixels in width.
     * In case user does not have a photo,{@link http://vk.com/images/camera_c.gif} is returned.
     */
    photo_50?: string;
    /**
     * URL of square photo of the user with 100 pixels in width.
     * In case user does not have a photo, {@link http://vk.com/images/camera_b.gif} is returned.
     */
    photo_100?: string;
    /**
     * URL of square photo of the user with 200 pixels in width.
     */
    photo_200?: string;
    /**
     * URL of square photo of the user with 200 pixels in width.
     * In case user does not have a photo,{@link http://vk.com/images/camera_a.gif} is returned.
     */
    photo_200_orig?: string;
    /**
     * 	URL of user's photo with 400 pixels in width.
     * 	If user does not have a photo of such size, reply will not include this field.
     */
    photo_400_orig?: string;
    /**
     * String ID of the main profile photo in format "user_id_photo_id", e.g., 6492_192164258.
     * Note that this field can be absent.
     */
    photo_id?: string;
    /**
     * URL of square photo of the user with maximum width. Can be returned a photo both 200 and 100 pixels in width.
     * In case user does not have a photo, {@link http://vk.com/images/camera_b.gif} is returned.
     */
    photo_max?: string;
    /**
     * URL of user's photo of maximum size. Can be returned a photo both 400 and 200 pixels in width
     * In case user does not have a photo, {@link http://vk.com/images/camera_a.gif} is returned.
     */
    photo_max_orig?: string;
    // Favorite quotes
    quotes?: string;
    /**
     * Current user's relatives list.
     * Options for {@link UsersRelatives relatives}.
     */
    relatives?: UsersRelatives[];
    /**
     * User relationship status.
     * Options for {@link BaseRelation relation}.
     */
    relation?: BaseRelation;
    /**
     * List of schools where user studied. Each object in array contains following fields:
     * Options for {@link UsersSchools schools}.
     */
    schools?: UsersSchools[];
    // User page's screen name.
    screen_name?: string;
    /**
     * User sex.
     * Options for {@link BaseSex sex.}
     */
    sex?: BaseSex;
    // Returns a website address from a user profile.
    site?: string;
    /**
     * User status.
     * If the audio broadcast is enabled, contains additional status_audio field with an audio object.
     */
    status?: string;
    status_audio?: unknown;
    // User time zone. Returns only while requesting current user info.
    timezone?: number;
    /**
     * Information whether the user a "fire" pictogram.
     * Returns 1 if trending, 0 if not.
     */
    trending?: BaseBoolean;
    // User's favorite TV shows.
    tv?: string;
    /**
     * List of higher education institutions where user studied.
     * Options for {@link UsersUniversities universities}.
     */
    universities?: UsersUniversities[];
    // Returns 1 if the profile is verified, 0 if not.
    verified?: BaseBoolean;
    // Wall comments allowed (1 — allowed, 0 — not allowed).
    wall_comments?: BaseBoolean;
  }

  export type Users = UsersDefault & UsersOptionalFields;

  export type UsersFields = keyof UsersOptionalFields;

  export interface VideoLiveInfo {
    [key: string]: any;
  }

  /* Video live settings */
  export interface VideoLiveSettings {
    /**
     * Max possible time for rewind
     */
    max_duration?: number;
    [key: string]: any;
  }

  /* Video restriction button */
  export interface VideoRestrictionButton {
    [key: string]: any;
    action?: "play";
    title?: string;
  }

  export interface VideoSaveResult {
    /**
     * Video access key
     */
    access_key?: string;
    /**
     * Video description
     */
    description?: string;
    /**
     * Video owner ID
     */
    owner_id?: number;
    /**
     * Video title
     */
    title?: string;
    /**
     * URL for the video uploading
     */
    upload_url?: string;
    /**
     * Video ID
     */
    video_id?: number;
    [key: string]: any;
  }

  export interface VideoVideo1 {
    access_key?: string;
    added?: BaseBoolean;
    adding_date?: number;
    balance?: number;
    can_add?: BaseBoolean;
    can_add_to_faves?: BaseBoolean;
    can_attach_link?: BaseBoolean;
    can_comment?: BaseBoolean;
    can_edit?: BaseBoolean;
    can_like?: BaseBoolean;
    can_repost?: BaseBoolean;
    can_subscribe?: BaseBoolean;
    comments?: number;
    content_restricted?: number;
    content_restricted_message?: string;
    converting?: BaseBoolean;
    date?: number;
    description?: string;
    duration?: number;
    first_frame?: VideoVideoImage[];
    height?: number;
    id?: number;
    image?: VideoVideoImage[];
    is_favorite?: boolean | number;
    is_private?: BaseBoolean;
    is_subscribed?: BaseBoolean;
    likes?: BaseLikes;
    live?: BasePropertyExists;
    live_notify?: BaseBoolean;
    live_start_time?: number;
    live_status?: "waiting" | "started" | "finished" | "failed" | "upcoming";
    local_views?: number;
    owner_id?: number;
    platform?: string;
    player?: string;
    processing?: BasePropertyExists;
    repeat?: BasePropertyExists;
    reposts?: BaseRepostsInfo;
    restriction?: MediaRestriction;
    spectators?: number;
    title?: string;
    track_code?: string;
    type?: "video" | "music_video" | "movie";
    upcoming?: BasePropertyExists;
    user_id?: number;
    views?: number;
    width?: number;
  }

  export type VideoVideo = VideoVideo1;

  export interface VideoVideoAlbumFull {
    count: number;
    id?: number;
    image?: VideoVideoImage[];
    owner_id: number;
    title: string;
    updated_time: number;
  }

  export interface VideoVideoFiles {
    external?: string;
    flv_320?: string;
    mp4_1080?: string;
    mp4_240?: string;
    mp4_360?: string;
    mp4_480?: string;
    mp4_720?: string;
  }

  export interface VideoVideoFull1 {
    files?: VideoVideoFiles;
    live_settings?: VideoLiveSettings;
  }

  export type VideoVideoFull = VideoVideo & VideoVideoFull1;

  export interface VideoVideoImage1 {
    with_padding?: BasePropertyExists;
  }

  export type VideoVideoImage = BaseImage & VideoVideoImage1;
}

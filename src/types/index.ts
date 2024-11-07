export interface ImagePatch {
    small: string | null;
    large: string | null;
}

export interface ILaunch {
  id: string;
  name: string;
  date_utc: string;
  launchpad: string;
  success: boolean | null;
  details?: string;
  isFavorite?: boolean;
  links?: {
    webcast: string | null;
    article: string | null;
    wikipedia: string | null;
    patch?: ImagePatch;
  };
}

export interface Tweet {
  edit_history_tweet_ids: string[];
  text: string;
  id: string;
  created_at: string;
  author_id: string;
}

export interface MetaData {
  newest_id: string;
  oldest_id: string;
  result_count: number;
  next_token?: string;
}

export interface TweetsResponse {
  data: Tweet[];
  meta: MetaData;
}

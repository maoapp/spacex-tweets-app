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
  links?: {
    webcast: string | null;
    article: string | null;
    wikipedia: string | null;
    patch?: ImagePatch;
  };
}
import {User} from './user';

export interface Song {
  id?: number;
  name?: string;
  description?: string;
  urlMp3?: string;
  avatar?: string;
  musician?: string;
  user?: User;
}

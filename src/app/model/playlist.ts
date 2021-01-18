import {ICategory} from './category/ICategory';
import {ISong} from './song/ISong';
import {User} from './user';

export interface Playlist {
  id?: number;
  name?: string;
  category?: ICategory;
  description?: string;
  dateCreate?: string;
  user?: User;
  timeUpdate?: string;
  views?: number;
  songs?: ISong;
}

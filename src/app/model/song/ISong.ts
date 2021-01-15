import {IAlbum} from '../album/IAlbum';
import {ICategory} from '../category/ICategory';
import {IUser} from '../IUser';
import {ISinger} from '../singer/ISinger';

export interface ISong {

  id?: number;
  name?: string;
  description?: string;
  urlMp3?: string;
  avatar?: string;
  musician?: string;
  views?: number;
  singer?: any;
  user?: any;
  category?: any;
  album?: any;
}

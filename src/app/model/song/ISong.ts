import {ISinger} from "../singer/ISinger";
import {User} from "../user";
import {ICategory} from "../category/ICategory";
import {IAlbum} from "../album/IAlbum";

export interface ISong {
  id?: number;
  name?: string;
  description?: string;
  urlMp3?: string;
  avatar?: string;
  musician?: string;
  views?: number;
  singer?: ISinger;
  user?: User;
  category?: ICategory;
  album?: IAlbum ;
}

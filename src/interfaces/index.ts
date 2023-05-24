export interface IPost {
  id?: number;
  text: string;
  author: number;
}

export interface IUser {
  id?: number;
  name: string;
  userName: string;
}

export interface IComment {
  id?: number;
  text: string;
  userId: number;
  postId: number;
}

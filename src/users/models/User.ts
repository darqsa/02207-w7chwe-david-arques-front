export interface ProtoUser {
  id: string;
  username: string;
  image: string;
}

export interface User extends ProtoUser {
  friends: string[];
  enemies: string[];
}

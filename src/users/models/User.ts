export interface User {
  id: string;
  username: string;
  image: string;
  status: "friend" | "enemy" | "none";
}

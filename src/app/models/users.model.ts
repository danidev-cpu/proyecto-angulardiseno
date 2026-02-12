export interface Iuser {
  id: string;
  username: string;
  password: string;
  email: string;
  role: 'user' | 'chef';
}

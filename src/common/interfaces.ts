export interface IPostFromBackend {
  id: number;
  created_at: Date | null;
  user: { name: string; };
  text: string;
}

export interface IPost {
  id: number;
  createdAt: Date | null;
  userName: string;
  message: string;
}


import axios from 'axios';

import { IPost, IPostFromBackend } from './interfaces';


export async function getPosts(limit: number, network: string): Promise<IPost[]> {
  const { data }: { data: IPostFromBackend[] } = await axios.get('http://api.massrelevance.com/MassRelDemo/kindle.json', {
    params: {
      limit,
      network,
    }
  });

  return data.map(backPost => ({
    id: backPost.id,
    createdAt: backPost.created_at ? new Date(backPost.created_at) : null,
    userName: backPost.user.name,
    message: backPost.text,
  }));
}
import { type Author } from './author';

export type Post = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt?: string;
  tags: string[];
  content: string;
  preview?: boolean;
};
import {Post} from '@/interfaces/post';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'public', '_posts');

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory, 'utf-8');
}

export function getPostBySlug(slug:string){
    const realSlug = decodeURIComponent(slug);
    const fullPath = join(postsDirectory,  realSlug, 'index.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {...data, slug:realSlug, content} as Post;
}

export function getAllPosts() {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .filter((post) => post.preview)
        .sort((a, b) => (a.date > b.date ? -1 : 1));
    return posts;
}

export function getPostsByTag(tag: string) {
    const realTag = decodeURIComponent(tag);
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .filter((post) => post.tags.includes(realTag))
        .filter((post) => post.preview)
        .sort((a, b) => (a.date > b.date ? -1 : 1));

    return posts;
}

export function getAllTags() {
    const slugs = getPostSlugs();
    const tags = slugs
        .map((slug) => getPostBySlug(slug))
        .filter((post) => post.preview)
        .flatMap((post) => post.tags)
        .filter((tag, index, self) => self.indexOf(tag) === index);

    return tags;
}

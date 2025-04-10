import {Post} from '@/interfaces/post';
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug:string){
    const realSlug = slug;
    const fullPath = join(postsDirectory,  realSlug, 'index.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {...data, slug:realSlug, content} as Post;
}

export function getAllPosts() {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .sort((a, b) => (a.date > b.date ? -1 : 1));

    // console.log(posts);
    return posts;
}

export function getPostsByTag(tag: string) {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .filter((post) => post.tags.includes(tag))
        .sort((a, b) => (a.date > b.date ? -1 : 1));

    return posts;
}

export function getAllTags() {
    const slugs = getPostSlugs();
    const tags = slugs
        .map((slug) => getPostBySlug(slug))
        .flatMap((post) => post.tags)
        .filter((tag, index, self) => self.indexOf(tag) === index);

    return tags;
}

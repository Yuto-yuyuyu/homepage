import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkCodeTitles from 'remark-code-titles'
import rehypeHighlight from 'rehype-highlight';
import remarkRehype from 'remark-rehype';

export default async function markdownToHTML(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)            // GFM拡張
    .use(remarkCodeTitles)     // コードブロックのタイトル
    .use(remarkMath)           // 数式記法
    .use(remarkRehype, { allowDangerousHtml: true }) // HTMLをrehypeに渡す
    .use(rehypeKatex)          // KaTeXでの数式表示
    .use(rehypeHighlight)      // コードブロックのハイライト
    .use(rehypeRaw)            // 生のHTMLを許可
    .use(rehypeStringify)      // HTMLとして出力
    .process(markdown);

  return result.toString();
}

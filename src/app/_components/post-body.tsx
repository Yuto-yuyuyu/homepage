import 'katex/dist/katex.min.css';

type Props = {
    content: string;
};

export default function PostBody({ content }: Props) {
    // console.log("PostBody content", content);
    return (
        <div className="mx-auto ">
            <div className={`prose max-w-none`}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
}
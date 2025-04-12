import TagPreview from "./tag-preview";

export default function TagList({tags} : {tags: string[]}){
    return (
        <div>
            {tags.map((tag, index) => (
                <TagPreview tag={tag} key={index} />
            ))}
        </div>
    );
}
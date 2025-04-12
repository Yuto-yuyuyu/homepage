import TagPreview from "./tag-preview";

export default function TagList({tags} : {tags: string[]}){
    return (
        <div className="flex flex-nowrap overflow-y-auto">
            {tags.map((tag, index) => (
                <TagPreview tag={tag} key={index} />
            ))}
        </div>
    );
}
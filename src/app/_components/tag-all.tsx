import { getAllTags } from "@/lib/api";
import TagPreview from "./tag-preview";

export default function TagAll() {
    const tags = getAllTags();
    return (
        <div>
            {tags.map((tag, index) => (
                <TagPreview tag={tag} key={index} />
            ))}
        </div>
    );
}
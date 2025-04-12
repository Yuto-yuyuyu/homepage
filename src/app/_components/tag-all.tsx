import { getAllTags } from "@/lib/api";
import TagPreview from "./tag-preview";

export default function TagAll() {
    const tags = getAllTags();
    return (
        <div className="bg-[#f0f0f0] flex flex-wrap">
            {tags.map((tag, index) => (
                <TagPreview tag={tag} key={index} />
            ))}
        </div>
    );
}
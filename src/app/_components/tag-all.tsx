import { getAllTags } from "@/lib/api";
import TagPreview from "./tag-preview";

export default function TagAll({pickedTag}: {pickedTag?: string}) {
    const tags = getAllTags();
    return (
        <div className="bg-[#f0f0f0] flex flex-wrap">
            <TagPreview flag={pickedTag === "記事一覧"} />
            {tags.map((tag, index) => (
                <TagPreview tag={tag} key={index}  flag={pickedTag === tag} />
            ))}
        </div>
    );
}
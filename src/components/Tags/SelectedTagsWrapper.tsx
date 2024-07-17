import { Chip } from "../Chip.tsx";

export const SelectedTagsWrapper = () => {
  const tags = ["Maryla", "Test", "Edek", "Albert"];

  return (
    <div className="py-4 flex flex-wrap gap-2">
      {tags.map((e) => <Chip key={e}>{e}</Chip>)}
    </div>
  );
};

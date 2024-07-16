export const SelectedTagsWrapper = () => {
  const tags = ["Maryla", "Test", "Edek"];

  return (
    <p className="p-4 flex flex-wrap gap-2">
      {tags.map((e) => <p key={e}>{e}</p>)}
    </p>
  );
};

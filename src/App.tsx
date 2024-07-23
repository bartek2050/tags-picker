import { MainView } from "./views/MainView.tsx";
import { SelectedTagsContext } from "./context/SelectedTagsContext.ts";
import { useState } from "react";

export const App = () => {
  const [selectedTags, setSelectedTags] = useState(["Maryla", "Gerald", "Edek", "Albert", "Jan"]);
  const addTags = () => console.log("Add TAGS");
  const deleteTags = (tag: string) => {
    const filteredTags = selectedTags.filter((selectedTag) => selectedTag !== tag);
    setSelectedTags(filteredTags);
  };

  return (
    <SelectedTagsContext.Provider value={{ selectedTags, addTags, deleteTags }}>
      <MainView />
    </SelectedTagsContext.Provider>
  );
};
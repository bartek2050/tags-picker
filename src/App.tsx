import { MainView } from "./views/MainView.tsx";
import { SelectedTagsContext } from "./context/SelectedTagsContext.ts";
import { useState } from "react";

export const App = () => {
  const [selectedTags, setSelectedTags] = useState(["Barcelona"]);

  const addTags = () => console.log("Add TAGS");
  const deleteTags = (tag: string) => setSelectedTags(selectedTags.filter(t => t !== tag));

  return (
    <SelectedTagsContext.Provider value={{ selectedTags, addTags, deleteTags }}>
      <MainView />
    </SelectedTagsContext.Provider>
  );
};
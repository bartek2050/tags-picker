import { MainView } from "./views/MainView.tsx";
import { SelectedTagsContext } from "./context/SelectedTagsContext.ts";
import { useState } from "react";

export const App = () => {
  const [selectedTags] = useState(["Maryla", "Gerald", "Edek", "Albert", "Jan"]);
  const addTags = () => console.log("Add TAGS");
  const deleteTags = () => console.log("Delete TAGS");

  return (
    <SelectedTagsContext.Provider value={{ selectedTags, addTags, deleteTags }}>
      <MainView />
    </SelectedTagsContext.Provider>
  );
};
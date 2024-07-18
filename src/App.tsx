import { MainView } from "./views/MainView.tsx";
import { SelectedTagsContext } from "./context/SelectedTagsContext.ts";
import { useState } from "react";

export const App = () => {
  const [selectedTags, setSelectedTags] = useState(["Maryla", "Gerald", "Edek", "Albert", "Jan"]);

  return (
    <SelectedTagsContext.Provider value={[selectedTags, setSelectedTags]}>
      <MainView />
    </SelectedTagsContext.Provider>
  );
};
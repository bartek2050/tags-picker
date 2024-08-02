import { createContext } from "react";

type SelectedTagsContextType = {
  selectedTags: string[];
  addTags: (tags: string[]) => void;
  deleteTags: (tag: string) => void;
};
export const SelectedTagsContext = createContext<SelectedTagsContextType>({
  selectedTags: [""],
  addTags: () => {
  },
  deleteTags: () => {
  }
});
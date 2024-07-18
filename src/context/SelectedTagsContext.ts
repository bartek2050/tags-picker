import React, { createContext, SetStateAction } from "react";

type SelectedTagsContext = [string[], React.Dispatch<SetStateAction<string[]>>];

export const SelectedTagsContext = createContext<SelectedTagsContext>([[""], () => {
}]);
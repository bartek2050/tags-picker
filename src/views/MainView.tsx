import { faCircleInfo, faCog, faTag, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconWrapper } from "../components/IconWrapper.tsx";
import { TagsSearchWrapper } from "../components/Tags/TagsSearchWrapper.tsx";
import React, { useEffect, useState } from "react";

export const MainView = () => {
  const [showTagsSearch, setShowTagsSearch] = useState(false);

  const keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "F1") {
      setShowTagsSearch((prev) => !prev);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => keyDownHandler(e as unknown as React.KeyboardEvent<HTMLDivElement>));

    return () => {
      window.removeEventListener("keydown", (e) => keyDownHandler(e as unknown as React.KeyboardEvent<HTMLDivElement>));
    };
  }, []);

  return (
    <div className="ml-40 mt-40 flex gap-2 font-arial">
      <div
        className="flex flex-col justify-between items-center gap-2 shadow-md rounded w-14 px-7 py-1 h-full"
      >
        <IconWrapper><FontAwesomeIcon icon={faCircleInfo} size="xl" /></IconWrapper>
        <IconWrapper><FontAwesomeIcon icon={faMessage} size="xl" /></IconWrapper>
        <IconWrapper><FontAwesomeIcon icon={faCog} size="xl" /></IconWrapper>
        <button onClick={() => setShowTagsSearch((prev) => !prev)}>
          <IconWrapper><FontAwesomeIcon icon={faTag} size="xl" /></IconWrapper>
        </button>
        <IconWrapper><FontAwesomeIcon icon={faUserPlus} size="xl" /></IconWrapper>
      </div>
      <TagsSearchWrapper showTagSearch={showTagsSearch} setShowTags={(v) => setShowTagsSearch(v)} />
    </div>
  );
};

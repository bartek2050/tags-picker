import { faCircleInfo, faCog, faTag, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconWrapper } from "../components/IconWrapper.tsx";
import { TagsSearchWrapper } from "../components/Tags/TagsSearchWrapper.tsx";
import { useEffect, useState } from "react";

export const MainView = () => {
  const [showTagsSearch, setShowTagsSearch] = useState<boolean | undefined>(false);

  const keyDownHandler = (e: { key: string; }) => {
    if (e.key === "F1") {
      setShowTagsSearch((prev) => !prev);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
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
        <button className="relative" onClick={() => setShowTagsSearch((prev) => !prev)}>
          <IconWrapper active={showTagsSearch}><FontAwesomeIcon icon={faTag} size="xl" /></IconWrapper>
          <p className="italic absolute left-0 bottom-0 font-mono text-xs">F1</p>
        </button>
        <IconWrapper><FontAwesomeIcon icon={faUserPlus} size="xl" /></IconWrapper>
      </div>
      <TagsSearchWrapper showTagSearch={showTagsSearch} setShowTags={(v) => setShowTagsSearch(v)} />
    </div>
  );
};

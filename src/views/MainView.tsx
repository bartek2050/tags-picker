import { faCircleInfo, faCog, faTag, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconWrapper } from "../components/IconWrapper.tsx";
import { TagsSearchWrapper } from "../components/Tags/TagsSearchWrapper.tsx";
import { useState } from "react";

export const MainView = () => {
  const [showTagsSearch, setShowTagsSearch] = useState(false);

  return (
    <div className="ml-40 mt-40 flex gap-2 font-arial">
      <div
        className="flex flex-col justify-between items-center gap-2 shadow-md rounded w-14 px-7 py-1"
      >
        <IconWrapper><FontAwesomeIcon icon={faCircleInfo} size="xl" /></IconWrapper>
        <IconWrapper><FontAwesomeIcon icon={faMessage} size="xl" /></IconWrapper>
        <IconWrapper><FontAwesomeIcon icon={faCog} size="xl" /></IconWrapper>
        <button onClick={() => setShowTagsSearch(true)}>
          <IconWrapper><FontAwesomeIcon icon={faTag} size="xl" /></IconWrapper>
        </button>
        <IconWrapper><FontAwesomeIcon icon={faUserPlus} size="xl" /></IconWrapper>
      </div>
      <TagsSearchWrapper showTagSearch={showTagsSearch} setShowTags={(v) => setShowTagsSearch(v)} />
    </div>
  );
};

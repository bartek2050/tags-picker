import { faCircleInfo, faCog, faTag, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconWrapper } from "../components/IconWrapper.tsx";

export const MainView = () => {
  return (
    <div
      className="flex flex-col justify-between items-center gap-6 shadow border-solid
      border-2 border-gray-800/10 rounded ml-40 mt-40 w-10 px-5 py-1"
    >
      <IconWrapper><FontAwesomeIcon icon={faCircleInfo} size="xl" /></IconWrapper>
      <IconWrapper><FontAwesomeIcon icon={faMessage} size="xl" /></IconWrapper>
      <IconWrapper><FontAwesomeIcon icon={faCog} size="xl" /></IconWrapper>
      <IconWrapper><FontAwesomeIcon icon={faTag} size="xl" /></IconWrapper>
      <IconWrapper><FontAwesomeIcon icon={faUserPlus} size="xl" /></IconWrapper>
    </div>
  );
};

import { faCircleInfo, faCog, faTag, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainView = () => {
  return (
    <div
      className="flex flex-col justify-between items-center gap-8 shadow border-solid
      border-2 border-gray-800/10 rounded ml-40 mt-40 px-6 py-4 w-5"
    >
      <FontAwesomeIcon icon={faCircleInfo} size="xl" />
      <FontAwesomeIcon icon={faMessage} size="xl" />
      <FontAwesomeIcon icon={faCog} size="xl" />
      <FontAwesomeIcon icon={faTag} size="xl" />
      <FontAwesomeIcon icon={faUserPlus} size="xl" />
    </div>
  );
};

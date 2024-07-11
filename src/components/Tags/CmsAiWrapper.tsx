import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faTag } from "@fortawesome/free-solid-svg-icons";

export const CmsAiWrapper = () => {
  return (
    <div className="flex flex-col py-2 gap-2">
      <div>
        <FontAwesomeIcon icon={faBrain} className="text-gray-300" />
        <span className="text-gray-300 font-bold ml-2">CMS AI</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faBrain} className="text-fuchsia-500/70" />
        <span className="font-bold ml-2">Analizuj tekst</span></div>
      <div>
        <FontAwesomeIcon icon={faTag} className="text-fuchsia-500/70 rotate-90" />
        <span className="font-bold ml-2">Najbardziej popularne tagi</span>
      </div>
    </div>

  );
};

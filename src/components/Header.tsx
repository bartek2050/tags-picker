import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import React from "react";

type HeaderProps = {
  header: string,
  setShowTags: (v: boolean) => void
}

export const Header: React.FC<HeaderProps> = ({ header, setShowTags }) => {
  return (
    <div className="flex justify-between pb-2">
      <h1 className="h1 font-bold text-2xl">{header}</h1>
      <button onClick={() => setShowTags(false)}><FontAwesomeIcon icon={faX} size="sm" /></button>
    </div>
  );
};

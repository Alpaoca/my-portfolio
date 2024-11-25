import { ReactElement } from "react";

function InfoItems({
  children,
  src,
  onClick,
}: {
  children: ReactElement;
  src: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={`flex flex-row gap-2 ${onClick ? "cursor-pointer" : undefined}`}
      onClick={onClick}
    >
      <img src={`${src}`} className="h-5" />
      {children}
    </div>
  );
}

export default InfoItems;

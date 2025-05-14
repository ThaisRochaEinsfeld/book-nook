import React from "react";
import { RiSearchLine } from "@remixicon/react";

type SearchInputProps = {
  className?: string;
  wrapperClassName?: string;
  embedded?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  className = "",
  wrapperClassName = "",
  embedded = false,
  ...props
}) => {
  const wrapperClasses = [
    "search-wrapper",
    embedded ? "search-wrapper--embedded" : "",
    wrapperClassName,
  ].join(" ");

  const inputClasses = ["search-input", className].join(" ");

  return (
    <div className={wrapperClasses}>
      <RiSearchLine size={16} className="search-icon" />
      <input type="text" className={inputClasses} {...props} />
    </div>
  );
};

export default SearchInput;

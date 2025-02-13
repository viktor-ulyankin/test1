import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./Search.module.css";
import { useDebounce } from "../../hooks/useDebounce";

type Props = {
  onDebounceChange: (value: string) => void;
};

export const Search: React.FC<Props> = ({ onDebounceChange }) => {
  const [value, setValue] = useState("");
  const debouncedSearch = useDebounce(value, 1000);

  useEffect(() => {
    onDebounceChange(debouncedSearch);
  }, [debouncedSearch, onDebounceChange]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      onChange={handleInputChange}
      value={value}
      className={styles.searchinput}
      placeholder="Search by name"
    />
  );
};

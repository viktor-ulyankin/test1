import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./Search.module.css";
import { useDebounce } from "../../hooks/useDebounce";
import { ReactComponent as Loader } from "./img/loader.svg";
import cn from "classnames";

type Props = {
  onDebounceChange: (value: string) => void;
};

export const Search: React.FC<Props> = ({ onDebounceChange }) => {
  const [value, setValue] = useState("");
  const [load, setLoad] = useState(false);
  const debouncedSearch = useDebounce(value, 1000);

  useEffect(() => {
    onDebounceChange(debouncedSearch);
    setLoad(false);
  }, [debouncedSearch, onDebounceChange]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setLoad(true);
  };

  const handleInputClear = () => {
    setValue("");
    setLoad(true);
  };

  return (
    <div className={styles.root}>
      <input
        onChange={handleInputChange}
        value={value}
        className={styles.input}
        placeholder="Search by name"
      />

      <div className={styles.controls}>
        <Loader className={cn(styles.loader, load && styles.show)} />
        <div className={styles.clear} onClick={handleInputClear} />
      </div>
    </div>
  );
};

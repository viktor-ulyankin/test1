import React, { ChangeEvent, useEffect, useState } from "react";
import { Category } from "./models";

type Value = Category | "";

type Props = {
  onChange: (value: Value) => void;
};

export const CategorySelect: React.FC<Props> = ({ onChange }) => {
  const [value, setValue] = useState<Value>("");

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  return (
    <select
      name="category"
      value={value}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value as Value);
      }}
    >
      <option value="">All categories</option>

      {Object.values(Category).map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

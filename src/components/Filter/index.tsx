import React, { ChangeEvent } from "react";
import styled from "./styled.module.css";

interface IProps {
  data: string[];
  setSelected: any;
}

const Filter = ({ data, setSelected }: IProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSelected((prev: string[]) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };
  return (
    <div className={styled.wrapper}>
      <h2>Filter</h2>
      <div className={styled.list}>
        {data.map((item) => (
          <div key={item}>
            <input
              id={item}
              type="checkbox"
              value={item}
              onChange={handleChange}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;

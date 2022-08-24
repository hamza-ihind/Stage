import React, { useEffect, useState } from "react";
import chroma from "chroma-js";
import Select, { StylesConfig } from "react-select";
import Axios from "axios";

const DropList = (props) => {
  interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }
  const [profs, setProfs] = useState([]);

  const getProfs = () => {
    Axios.get("http://localhost:3001/api/get/prof").then((response) => {
      setProfs(response.data);
    });
  };
  useEffect(() => {
    getProfs();
  }, []);
  const getOptions = (profs) => {
    return profs.map((prof) => {
      return {
        value: prof.matricule,
        label: prof.nom + "|  matricule: " + prof.matricule,
        color: "#000000",
      };
    });
  };
  const options = getOptions(profs);
  const dot = (color = "transparent") => ({
    alignItems: "center",
    display: "flex",

    ":before": {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: "block",
      marginRight: 8,
      height: 10,
      width: 10,
    },
  });

  const colourStyles: StylesConfig<ColourOption> = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? data.color
          : isFocused
          ? color.alpha(0.1).css()
          : undefined,
        color: isDisabled
          ? "#ccc"
          : isSelected
          ? 3 > 2
            ? "white"
            : "black"
          : data.color,
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },
    input: (styles) => ({ ...styles, ...dot() }),
    placeholder: (styles) => ({ ...styles, ...dot("#ccc") }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  };
  return (
    <Select
      placeholder={<div style={{ fontSize: "16px" }}>chercher un prof</div>}
      styles={colourStyles}
      className="basic-single"
      classNamePrefix="select"
      isClearable={false}
      isSearchable={true}
      name="color"
      options={options}
      onChange={(choice) => {
        if (choice) {
          props.onChange(choice);
        }
      }}
    />
  );
};
export default DropList;

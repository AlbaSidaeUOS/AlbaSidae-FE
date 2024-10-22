import React from "react";
import S from "../../uis/RegistUI";

const Age = ({ value, onChange }) => {
  const [minAge, maxAge] = value?.split("~") || ["", ""];

  const handleSelectAge = (age) => {
    if (age === "any") {
      onChange("연령무관");
    } else {
      onChange(`${minAge}~${maxAge}`);
    }
  };

  const handleMinAgeChange = (e) => {
    onChange(`${e.target.value}~${maxAge}`);
  };

  const handleMaxAgeChange = (e) => {
    onChange(`${minAge}~${e.target.value}`);
  };

  return (
    <S.CheckBoxWrapper>
      <S.Button
        isSelected={value === "연령무관"}
        onClick={() => handleSelectAge("any")}
      >
        연령무관
      </S.Button>
      <S.Button
        isSelected={value !== "연령무관"}
        onClick={() => handleSelectAge("select")}
      >
        연령선택
      </S.Button>
      {value !== "연령무관" && (
        <S.AgeSelectWrapper>
          <S.Select value={minAge} onChange={handleMinAgeChange}>
            <option value="">최소 연령</option>
            {[...Array(100).keys()].map((age) => (
              <option key={age} value={age + 1}>
                {age + 1}
              </option>
            ))}
          </S.Select>
          ~
          <S.Select value={maxAge} onChange={handleMaxAgeChange}>
            <option value="">최대 연령</option>
            {[...Array(100).keys()].map((age) => (
              <option key={age} value={age + 1}>
                {age + 1}
              </option>
            ))}
          </S.Select>
        </S.AgeSelectWrapper>
      )}
    </S.CheckBoxWrapper>
  );
};

export default Age;

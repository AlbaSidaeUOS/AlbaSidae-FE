import React, { useState, useEffect } from "react";
import S from "../../uis/RegistUI";

const PeopleNum = ({ value, onChange }) => {
  const [selectedPeopleNum, setSelectedPeopleNum] = useState(value || null);
  const [directInput, setDirectInput] = useState("");

  useEffect(() => {
    if (selectedPeopleNum === "direct") {
      onChange(directInput);
    } else {
      onChange(selectedPeopleNum);
    }
  }, [selectedPeopleNum, directInput, onChange]);

  const handleSelectPeopleNum = (peoplenum) => {
    setSelectedPeopleNum(peoplenum);
  };

  const handleDirectInputChange = (e) => {
    setDirectInput(e.target.value);
  };

  return (
    <S.CheckBoxWrapper>
      <S.Button
        isSelected={selectedPeopleNum === "one"}
        onClick={() => handleSelectPeopleNum("one")}
      >
        1명
      </S.Button>
      <S.Button
        isSelected={selectedPeopleNum === "ten"}
        onClick={() => handleSelectPeopleNum("ten")}
      >
        0명 (10명 미만)
      </S.Button>
      <S.Button
        isSelected={selectedPeopleNum === "hundred"}
        onClick={() => handleSelectPeopleNum("hundred")}
      >
        00명 (100명 미만)
      </S.Button>
      <S.Button
        isSelected={selectedPeopleNum === "direct"}
        onClick={() => handleSelectPeopleNum("direct")}
      >
        직접입력
      </S.Button>

      {selectedPeopleNum === "direct" && (
        <S.DirectInput
          type="number"
          value={directInput}
          onChange={handleDirectInputChange}
          placeholder="인원 수 입력"
        />
      )}
    </S.CheckBoxWrapper>
  );
};

export default PeopleNum;

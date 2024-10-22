import React from "react";
import S from "../../uis/RegistUI";

const Deadline = ({ value, onChange }) => {
  const { selectedDeadline, deadlineDate } = value || {
    selectedDeadline: "",
    deadlineDate: "",
  };

  const handleSelectDeadline = (deadline) => {
    if (deadline === "select") {
      onChange({ selectedDeadline: "select", deadlineDate: "" });
    } else {
      onChange({ selectedDeadline: "immediate", deadlineDate });
    }
  };

  const handleDateChange = (e) => {
    onChange({ selectedDeadline: "immediate", deadlineDate: e.target.value });
  };

  return (
    <S.CheckBoxWrapper>
      <S.Button
        isSelected={selectedDeadline === "select"}
        onClick={() => handleSelectDeadline("select")}
      >
        상시모집
      </S.Button>
      <S.Button
        isSelected={selectedDeadline === "immediate"}
        onClick={() => handleSelectDeadline("immediate")}
      >
        마감일 선택
      </S.Button>
      {selectedDeadline === "immediate" && (
        <S.DatePickerWrapper>
          <S.DateInput
            type="date"
            value={deadlineDate}
            onChange={handleDateChange}
          />
        </S.DatePickerWrapper>
      )}
    </S.CheckBoxWrapper>
  );
};

export default Deadline;

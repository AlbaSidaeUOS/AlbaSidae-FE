import React from "react";
import S from "../../uis/RegistUI";

const WorkPay = ({ value, onChange }) => {
  return (
    <div>
      <S.PayInput
        type="text"
        value={value}
        placeholder="예) 12000"
        onChange={(e) => onChange(e.target.value)}
      />
      &nbsp;원
    </div>
  );
};

export default WorkPay;

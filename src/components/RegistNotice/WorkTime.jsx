import React, { useState, useEffect } from "react";
import S from "../../uis/RegistUI";

const WorkTime = ({ value, onChange }) => {
  const [activeTab, setActiveTab] = useState(value || "threemonth");

  useEffect(() => {
    onChange(activeTab);
  }, [activeTab, onChange]);

  return (
    <S.TabWrapper>
      <S.TabLeft
        active={activeTab === "threemonth"}
        onClick={() => setActiveTab("threemonth")}
      >
        3개월 이하
      </S.TabLeft>
      <S.TabMiddle
        active={activeTab === "sixmonth"}
        onClick={() => setActiveTab("sixmonth")}
      >
        3개월~6개월
      </S.TabMiddle>
      <S.TabMiddle
        active={activeTab === "oneyear"}
        onClick={() => setActiveTab("oneyear")}
      >
        &nbsp;6개월~1년&nbsp;
      </S.TabMiddle>
      <S.TabMiddle
        active={activeTab === "overoneyear"}
        onClick={() => setActiveTab("overoneyear")}
      >
        &nbsp;&nbsp;1년 이상&nbsp;&nbsp;
      </S.TabMiddle>
      <S.TabRight
        active={activeTab === "regardless"}
        onClick={() => setActiveTab("regardless")}
      >
        &nbsp;&nbsp;기간무관&nbsp;&nbsp;
      </S.TabRight>
    </S.TabWrapper>
  );
};

export default WorkTime;

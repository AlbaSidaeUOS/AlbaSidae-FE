import React, { useState } from "react";
import HeaderRegist from "../components/HeaderRegist";
import ResumeProfile from "../components/ResumeProfile";
import S from "../uis/RegistResumeUI";

const RegistResume = () => {
  const selectList = [
    "대학원",
    "대학(4년)",
    "대학(2, 3년)",
    "고등학교",
    "중학교",
    "초등학교",
  ];
  const workTypeList = ["아르바이트", "계약직", "정규직", "인턴쉽", "프리랜서"];
  const locationList = ["서울"];
  const occupationList = [
    "외식, 음료",
    "유통, 판매",
    "문화, 여가, 생활",
    "서비스",
    "사무, 회계",
    "고객상담, 영업, 리서치",
    "생산, 건설, 노무",
    "IT, 인터넷",
    "교육, 강사",
    "디자인",
    "미디어",
    "운전, 배달",
    "병원, 간호, 연구",
  ];
  const [selected, setSelected] = useState("");
  const [workType, setWorkType] = useState([]);
  const [location, setLocation] = useState([]);
  const [occupation, setOccupation] = useState([]);

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
  };
  const handleWorkTypeChange = (e) => {
    const selectedWorkType = e.target.value;
    if (workType.includes(selectedWorkType)) {
      setWorkType(workType.filter((type) => type !== selectedWorkType));
    } else {
      setWorkType([...workType, selectedWorkType]);
    }
  };
  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    if (location.includes(selectedLocation)) {
      setLocation(location.filter((type) => type !== selectedLocation));
    } else {
      setLocation([...location, selectedLocation]);
    }
  };
  const handleOccupationChange = (e) => {
    const selectedOccupation = e.target.value;
    if (occupation.includes(selectedOccupation)) {
      setOccupation(occupation.filter((type) => type !== selectedOccupation));
    } else {
      setOccupation([...occupation, selectedOccupation]);
    }
  };

  return (
    <S.Wrapper>
      <HeaderRegist />
      <S.MainContainer>
        <S.Title>기본정보</S.Title>
        <ResumeProfile />
        <S.Title>이력서 제목</S.Title>
        <S.ResumeTitle
          type="text"
          placeholder="나를 표현할 한마디를 적어보세요."
        />
        <S.Title>학력</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>최종학력</S.SubTitle>
          <S.EducationSelect value={selected} onChange={handleSelectChange}>
            <option value="" disabled>
              선택
            </option>
            {selectList.map((education, index) => (
              <option key={index} value={education}>
                {education}
              </option>
            ))}
          </S.EducationSelect>
        </S.SubTitleWrapper>
        <S.Title>경력</S.Title>
        <S.CareerContent
          type="text"
          placeholder="경력이 있다면 회사명, 근무기간, 담당업무와 내용을 작성해주세요."
        />

        <S.Title>희망근무 조건</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>희망근무지</S.SubTitle>
          <S.CheckBoxWrapper>
            {locationList.map((type) => (
              <S.CheckBoxLabel key={type}>
                <S.CheckBoxInput
                  type="checkbox"
                  name="location"
                  value={type}
                  checked={location.includes(type)}
                  onChange={handleLocationChange}
                />
                {type}
              </S.CheckBoxLabel>
            ))}
          </S.CheckBoxWrapper>
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>희망업직종</S.SubTitle>
          <S.CheckBoxWrapper>
            {occupationList.map((type) => (
              <S.CheckBoxLabel key={type}>
                <S.CheckBoxInput
                  type="checkbox"
                  name="occupation"
                  value={type}
                  checked={occupation.includes(type)}
                  onChange={handleOccupationChange}
                />
                {type}
              </S.CheckBoxLabel>
            ))}
          </S.CheckBoxWrapper>
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>근무형태&nbsp;&nbsp;&nbsp;&nbsp;</S.SubTitle>
          <S.CheckBoxWrapper>
            {workTypeList.map((type) => (
              <S.CheckBoxLabel key={type}>
                <S.CheckBoxInput
                  type="checkbox"
                  name="workType"
                  value={type}
                  checked={workType.includes(type)}
                  onChange={handleWorkTypeChange}
                />
                {type}
              </S.CheckBoxLabel>
            ))}
          </S.CheckBoxWrapper>
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>근무기간&nbsp;&nbsp;&nbsp;&nbsp;</S.SubTitle>
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>근무요일&nbsp;&nbsp;&nbsp;&nbsp;</S.SubTitle>
        </S.SubTitleWrapper>
        <S.Title>자기소개서</S.Title>
        <S.ResumeContent
          type="text"
          placeholder="나에 대해 자유롭게 설명하고 채용기회의 확률을 높이세요."
        />
      </S.MainContainer>
    </S.Wrapper>
  );
};

export default RegistResume;

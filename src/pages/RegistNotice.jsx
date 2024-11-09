import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import S from "../uis/RegistUI";
import HeaderRegist from "../components/HeaderRegist";
import Age from "../components/RegistNotice/Age";
import Deadline from "../components/RegistNotice/Deadline";
import Gender from "../components/RegistNotice/Gender";
import NoticeCareer from "../components/RegistNotice/NoticeCareer";
import NoticeCompanyContent from "../components/RegistNotice/NoticeCompanyContent";
import NoticeCompanyImage from "../components/RegistNotice/NoticeCompanyImage";
import NoticeCompanyName from "../components/RegistNotice/NoticeCompanyName";
import NoticeTitle from "../components/RegistNotice/NoticeTitle";
import PeopleNum from "../components/RegistNotice/PeopleNum";
import SubmitMethod from "../components/RegistNotice/SubmitMethod";
import WorkCategory from "../components/RegistNotice/WorkCategory";
import WorkDays from "../components/RegistNotice/WorkDays";
import WorkPay from "../components/RegistNotice/WorkPay";
import WorkTerm from "../components/RegistNotice/WorkTerm";
import WorkTime from "../components/RegistNotice/WorkTime";
import WorkType from "../components/RegistNotice/WorkType";
import Workplace from "../components/RegistNotice/Workplace";
import ResumeProfile from "../components/RegistResume/ResumeProfile";
import { AuthContext } from "../components/auth/AuthContext";

const RegistNotice = () => {
  const navigate = useNavigate();
  const { isLoggedIn, role, email } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    noticeTitle: "",
    noticeCompanyName: "",
    noticeCompanyContent: "",
    noticeCompanyImage: "",
    peopleNum: 0,
    workCategory: [],
    workType: [],
    noticeCareer: "",
    workTerm: "",
    workDays: [],
    workTime: "",
    workPay: "",
    gender: "",
    age: "",
    deadline: "",
    submitMethod: [],
    place: "",
  });

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    } else if (role !== "COMPANY" && role !== "ADMIN") {
      alert("이 페이지에 접근할 권한이 없습니다.");
      navigate("/");
    }
  }, [isLoggedIn, role, navigate]);

  const handleChange = (field) => (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
    setErrorMessage("");
  };

  const handleSubmit = async () => {
    const emptyFields = Object.entries(formData).filter(
      ([key, value]) => value === "" || value.length === 0
    );
    if (emptyFields.length > 0) {
      setErrorMessage("모든 필드를 입력해주세요.");
      // const missingFields = emptyFields.map(([key]) => key).join(", ");
      // alert(`다음 필드를 입력해주세요: ${missingFields}`);
      return;
    }
    const formDataToSend = new FormData();
    formDataToSend.append("companyImage", formData.noticeCompanyImage);

    const jobPostData = {
      title: formData.noticeTitle,
      companyName: formData.noticeCompanyName,
      companyContent: formData.noticeCompanyContent,
      place: formData.place,
      workCategory: formData.workCategory,
      workType: formData.workType,
      peopleNum: formData.peopleNum,
      career: formData.noticeCareer,
      workTerm: formData.workTerm,
      workDays: formData.workDays,
      workTime: formData.workTime,
      pay: formData.workPay,
      gender: formData.gender,
      age: formData.age,
      deadline: formData.deadline,
      submitMethod: formData.submitMethod,
    };
    formDataToSend.append(
      "jobPost",
      new Blob([JSON.stringify(jobPostData)], { type: "application/json" })
    );

    try {
      const response = await fetch(
        `http://localhost:8080/api/job-posts?email=${encodeURIComponent(
          email
        )}`,
        {
          method: "POST",
          body: formDataToSend,
          mode: "cors",
        }
      );
      const data = await response.json();
      if (response.ok && data.result === true) {
        alert("공고 등록이 완료되었습니다.");
        navigate("/");
      } else {
        alert(data.message || "공고 등록에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("서버 오류가 발생했습니다.");
    }
    console.log(formData);
  };

  return (
    <S.Wrapper>
      <HeaderRegist />
      <S.MainContainer>
        <S.Title>담당자 정보</S.Title>
        <S.ComponentWrapper>
          <ResumeProfile />
        </S.ComponentWrapper>
        <S.Title>근무처 정보</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>공고제목</S.SubTitle>
          <S.ComponentWrapper>
            <NoticeTitle
              value={formData.noticeTitle}
              onChange={handleChange("noticeTitle")}
            />
            {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무회사</S.SubTitle>
          <S.ComponentWrapper>
            <NoticeCompanyName
              value={formData.noticeCompanyName}
              onChange={handleChange("noticeCompanyName")}
            />
            {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>주요 사업내용</S.SubTitle>
          <S.ComponentWrapper>
            <NoticeCompanyContent
              value={formData.noticeCompanyContent}
              onChange={handleChange("noticeCompanyContent")}
            />
            {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>근무 장소</S.SubTitle>
          <S.ComponentWrapper>
            <Workplace
              value={formData.place}
              onChange={handleChange("place")}
            />
            {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.SubTitle>근무처 사진</S.SubTitle>
          <S.ComponentWrapper>
            <NoticeCompanyImage
              value={formData.noticeCompanyImage}
              onChange={handleChange("noticeCompanyImage")}
            />
            {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.Title>모집 내용</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>모집직종</S.SubTitle>
          <S.ComponentWrapper>
            <WorkCategory
              value={formData.workCategory}
              onChange={handleChange("workCategory")}
            />
            {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>고용형태</S.SubTitle>
          <S.ComponentWrapper>
            <WorkType
              value={formData.workType}
              onChange={handleChange("workType")}
            />
            {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>모집인원</S.SubTitle>
          <S.ComponentWrapper>
            <PeopleNum
              value={formData.peopleNum}
              onChange={handleChange("peopleNum")}
            />
            {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>
            &nbsp;&nbsp;&nbsp;&nbsp;경력&nbsp;&nbsp;&nbsp;
          </S.SubTitle>
          <S.ComponentWrapper>
            <NoticeCareer
              value={formData.noticeCareer}
              onChange={handleChange("noticeCareer")}
            />
            {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.Title>근무조건</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>근무기간</S.SubTitle>
          <S.ComponentWrapper>
            <WorkTerm
              value={formData.workTerm}
              onChange={handleChange("workTerm")}
            />
            {errorMessage && (
              <S.ErrorMessage style={{ marginLeft: "75px" }}>
                {errorMessage}
              </S.ErrorMessage>
            )}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무요일</S.SubTitle>
          <S.ComponentWrapper>
            <WorkDays
              value={formData.workDays}
              onChange={handleChange("workDays")}
            />
            {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무시간</S.SubTitle>
          <S.ComponentWrapper>
            <WorkTime
              value={formData.workTime}
              onChange={handleChange("workTime")}
            />
            {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>
            &nbsp;&nbsp;&nbsp;급여&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </S.SubTitle>
          <S.ComponentWrapper>
            <WorkPay
              value={formData.workPay}
              onChange={handleChange("workPay")}
            />
            {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.Title>자격조건</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>성별</S.SubTitle>
          <S.ComponentWrapper>
            <Gender value={formData.gender} onChange={handleChange("gender")} />
            {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>연령</S.SubTitle>
          <S.ComponentWrapper>
            <Age value={formData.age} onChange={handleChange("age")} />
            {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.Title>접수내용</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>모집마감일</S.SubTitle>
          <S.ComponentWrapper>
            <Deadline
              value={formData.deadline}
              onChange={handleChange("deadline")}
            />
            {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>지원방법</S.SubTitle>
          <S.ComponentWrapper>
            <SubmitMethod
              value={formData.submitMethod}
              onChange={handleChange("submitMethod")}
            />
            {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
          </S.ComponentWrapper>
        </S.SubTitleWrapper>

        <S.SubmitButton onClick={handleSubmit}>공고 작성 완료</S.SubmitButton>
      </S.MainContainer>
    </S.Wrapper>
  );
};

export default RegistNotice;

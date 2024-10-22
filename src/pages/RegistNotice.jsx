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
import ResumeProfile from "../components/RegistResume/ResumeProfile";
import { AuthContext } from "../components/auth/AuthContext";

const RegistNotice = () => {
  const navigate = useNavigate();
  const { isLoggedIn, role, user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    companyName: "",
    companyContent: "",
    companyImage: "",
    workCategory: "",
    workType: "",
    peopleNum: 0,
    career: "",
    workTerm: "",
    workDays: "",
    workTime: "",
    pay: "",
    gender: "",
    age: "",
    deadline: "",
    submitMethod: "",
  });
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    } else if (role !== "COMPANY" && role !== "ADMIN") {
      alert("이 페이지에 접근할 권한이 없습니다.");
      navigate("/");
    } else if (user && user.email) {
      const fetchUserData = async () => {
        try {
          // setLoading(true);
          const response = await fetch(
            `https://6153-211-178-236-156.ngrok-free.app/api/users/${user.email}`
          );
          const data = await response.json();
          console.log(data);
          if (response.ok && data.result) {
            setUserData(data.data);
          } else {
            console.error(
              "사용자 정보를 가져오는 데 실패했습니다.",
              data.message
            );
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        } finally {
          // setLoading(false);
        }
      };
      fetchUserData();
    }
  }, [isLoggedIn, role, navigate, user?.email]);
  // if (loading) {
  //   return <div>로딩 중...</div>;
  // }

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!userData) {
      alert("사용자 정보를 불러오고 있습니다. 잠시 후 다시 시도해 주세요.");
      return;
    }
    const requestBody = {
      ...formData,
      company: {
        email: userData?.email,
        password: "qwerqwer",
        name: "",
        birthDate: "",
        phone: userData.phone,
        businessNumber: userData?.businessNumber,
        role: userData.role,
      },
    };

    try {
      const response = await fetch(
        "https://6153-211-178-236-156.ngrok-free.app/api/job-posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
          mode: "cors",
        }
      );

      const data = await response.json();
      if (response.ok && data.result === true) {
        alert(data.message);
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return (
    <S.Wrapper>
      <HeaderRegist />
      <S.MainContainer>
        <S.Title>담당자 정보</S.Title>
        <ResumeProfile />
        <S.Title>근무처 정보</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>공고제목</S.SubTitle>
          <NoticeTitle
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무회사</S.SubTitle>
          <NoticeCompanyName
            value={formData.companyName}
            onChange={(e) => handleChange("companyName", e.target.value)}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>주요 사업내용</S.SubTitle>
          <NoticeCompanyContent
            value={formData.companyContent}
            onChange={(e) => handleChange("companyContent", e.target.value)}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무처 사진</S.SubTitle>
          <NoticeCompanyImage
            value={formData.companyImage}
            onChange={(e) => handleChange("companyImage", e.target.value)}
          />
        </S.SubTitleWrapper>

        <S.Title>모집 내용</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>모집직종</S.SubTitle>
          <WorkCategory
            value={formData.workCategory}
            onChange={(e) => handleChange("workCategory", e.target.value)}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>고용형태</S.SubTitle>
          <WorkType
            value={formData.workType}
            onChange={(e) => handleChange("workType", e.target.value)}
          />
        </S.SubTitleWrapper>

        {/* <S.SubTitleWrapper>
          <S.SubTitle>모집인원</S.SubTitle>
          <PeopleNum
            value={formData.peopleNum}
            onChange={(e) => handleChange("peopleNum", e.target.value)}
          />
        </S.SubTitleWrapper> */}

        <S.SubTitleWrapper>
          <S.SubTitle>
            &nbsp;&nbsp;&nbsp;&nbsp;경력&nbsp;&nbsp;&nbsp;
          </S.SubTitle>
          <NoticeCareer
            value={formData.career}
            onChange={(e) => handleChange("career", e.target.value)}
          />
        </S.SubTitleWrapper>

        <S.Title>근무조건</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>근무기간</S.SubTitle>
          <WorkTerm
            value={formData.workTerm}
            onChange={(e) => handleChange("workTerm", e.target.value)}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무요일</S.SubTitle>
          <WorkDays
            value={formData.workDays}
            onChange={(e) => handleChange("workDays", e.target.value)}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>근무시간</S.SubTitle>
          <WorkTime
            value={formData.workTime}
            onChange={(e) => handleChange("workTime", e.target.value)}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>
            &nbsp;&nbsp;&nbsp;급여&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </S.SubTitle>
          <WorkPay
            value={formData.workPay}
            onChange={(e) => handleChange("workPay", e.target.value)}
          />
        </S.SubTitleWrapper>

        <S.Title>자격조건</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>성별</S.SubTitle>
          <Gender
            value={formData.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>연령</S.SubTitle>
          <Age
            value={formData.age}
            onChange={(e) => handleChange("age", e.target.value)}
          />
        </S.SubTitleWrapper>

        <S.Title>접수내용</S.Title>
        <S.SubTitleWrapper>
          <S.SubTitle>모집마감일</S.SubTitle>
          <Deadline
            value={formData.deadline}
            onChange={(e) => handleChange("deadline", e.target.value)}
          />
        </S.SubTitleWrapper>

        <S.SubTitleWrapper>
          <S.SubTitle>지원방법</S.SubTitle>
          <SubmitMethod
            value={formData.submitMethod}
            onChange={(e) => handleChange("submitMethod", e.target.value)}
          />
        </S.SubTitleWrapper>

        <S.SubmitButton onClick={handleSubmit}>공고 작성 완료</S.SubmitButton>
      </S.MainContainer>
    </S.Wrapper>
  );
};

export default RegistNotice;

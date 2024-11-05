import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderRegist from "../components/HeaderRegist";
import styled from "styled-components";
import { AuthContext } from "../components/auth/AuthContext";

const S = {
  Wrapper: styled.div`
    background-color: #f8f8f8;
    padding-top: 50px;
    padding-bottom: 50px;
  `,
  Container: styled.div`
    background-color: #fff;
    max-width: 500px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 0px auto;
    padding: 20px 35px 30px 35px;
    white-space: nowrap;
  `,
  Title: styled.div`
    font-size: 27px;
    text-align: center;
    font-weight: bold;
    padding: 10px 0 30px 0;
  `,
  InfoRow: styled.div`
    display: flex;
    align-items: center;
    margin: 0px 0px 25px 5px;
  `,
  Label: styled.div`
    flex: 1;
    font-size: 16px;
    font-weight: bold;
  `,
  Input: styled.input`
    flex: 2;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 15px;
    outline: none;
  `,
  TabWrapper: styled.div`
    flex: 2;
    display: flex;
  `,
  TabLeft: styled.div`
    flex: 1;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 10px 0 0 10px;
    background-color: ${({ active }) => (active ? "#fff" : "#f7f7f7")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  `,
  TabRight: styled.div`
    flex: 1;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    border: 1px solid #ddd;
    border-left: none;
    border-radius: 0px 10px 10px 0px;
    background-color: ${({ active }) => (active ? "#fff" : "#f7f7f7")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  `,
  EditButton: styled.button`
    width: 99%;
    padding: 15px;
    background-color: #fdf25d;
    border: 1px solid #fae04b;
    color: black;
    font-size: 18px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  `,
};
// GET 써서 원래 정보 가져오기

const UserInfoChange = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("");
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    birthDate: "",
    gender: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^[0-9]*$/.test(value)) {
      return;
    }
    if (name === "birthDate" && (!/^[0-9]*$/.test(value) || value.length > 6)) {
      return;
    }
    if (name === "password" && value.length > 15) {
      return;
    }
    if (name === "confirmPassword" && value.length > 15) {
      return;
    }
    if (name === "phone" && value.length > 11) {
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <HeaderRegist />
      <S.Wrapper>
        <S.Container>
          <S.Title>필수정보 변경</S.Title>
          <S.InfoRow>
            <S.Label>이메일(변경 불가)</S.Label>
            <S.Input type="text" readOnly />
          </S.InfoRow>
          <S.InfoRow>
            <S.Label>이름</S.Label>
            <S.Input type="text" />
          </S.InfoRow>
          <S.InfoRow>
            <S.Label>생년월일</S.Label>
            <S.Input type="text" />
          </S.InfoRow>
          <S.InfoRow>
            <S.Label>성별</S.Label>
            <S.TabWrapper>
              <S.TabLeft
                active={activeTab === "남"}
                onClick={() => setActiveTab("남")}
              >
                남
              </S.TabLeft>
              <S.TabRight
                active={activeTab === "여"}
                onClick={() => setActiveTab("여")}
              >
                여
              </S.TabRight>
            </S.TabWrapper>
          </S.InfoRow>
          <S.InfoRow>
            <S.Label>휴대폰</S.Label>
            <S.Input type="text" />
          </S.InfoRow>
          <S.InfoRow>
            <S.Label>비밀번호</S.Label>
            <S.Input
              type="password"
              name="password"
              placeholder="비밀번호(8~15자)"
              value={formData.password}
              onChange={handleChange}
            />
          </S.InfoRow>
          <S.InfoRow>
            <S.Label>비밀번호 재입력</S.Label>
            <S.Input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호 재입력"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </S.InfoRow>
          <S.EditButton>수정완료</S.EditButton>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default UserInfoChange;

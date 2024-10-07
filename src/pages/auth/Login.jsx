import React, { useState } from "react";
import styled from "styled-components";
import HeaderLogin from "../../components/auth/HeaderLogin";

const S = {
  Wrapper: styled.div``,
  Container: styled.div`
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
  `,
  Title: styled.h2`
    font-size: 24px;
    text-align: center;
    margin-bottom: 10px;
    font-weight: bold;
  `,
  SubText: styled.p`
    font-size: 14px;
    text-align: center;
    color: #666;
    margin-bottom: 20px;
    a {
      color: #0070f3;
      text-decoration: underline;
      cursor: pointer;
    }
  `,
  TabWrapper: styled.div`
    display: flex;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
  `,
  Tab: styled.div`
    flex: 1;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    font-size: 16px;
    border: 1px solid #ddd;
    border-bottom: none;
    background-color: ${({ active }) => (active ? "#fff" : "#f7f7f7")};
    font-weight: ${({ active }) => (active ? "bold" : "normal")};
  `,
  InputWrapper: styled.div`
    margin-bottom: 15px;
  `,
  Input: styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
  `,
  LoginButton: styled.button`
    width: 100%;
    padding: 15px;
    background-color: #ffe500;
    color: black;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      background-color: #ffd700;
    }
  `,
  LinksWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #0070f3;
    a {
      text-decoration: none;
      cursor: pointer;
    }
  `,
};

const Login = () => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <S.Wrapper>
      <HeaderLogin />
      <S.Container>
        <S.Title>로그인 후 다양한 서비스를 이용해 보세요.</S.Title>
        <S.SubText>
          아직 알바시대 회원이 아니시라면, 지금 <a href="/signup">회원가입</a>을
          해주세요.
        </S.SubText>

        <S.TabWrapper>
          <S.Tab
            active={activeTab === "personal"}
            onClick={() => setActiveTab("personal")}
          >
            개인회원 <br />
            (일자리 찾기)
          </S.Tab>
          <S.Tab
            active={activeTab === "company"}
            onClick={() => setActiveTab("company")}
          >
            기업회원 <br />
            (알바생 찾기)
          </S.Tab>
        </S.TabWrapper>

        <S.InputWrapper>
          <S.Input type="text" placeholder="아이디" />
          <S.Input type="password" placeholder="비밀번호" />
        </S.InputWrapper>

        <S.LoginButton>로그인</S.LoginButton>

        <S.LinksWrapper>
          <a href="/signup">회원가입</a>
          <a href="/find-id">아이디 찾기</a>
          <a href="/find-password">비밀번호 찾기</a>
        </S.LinksWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default Login;

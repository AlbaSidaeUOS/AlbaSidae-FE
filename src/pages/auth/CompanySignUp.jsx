import React from "react";
import styled from "styled-components";
import HeaderSignUp from "../../components/auth/HeaderSignUp";

const S = {
  Wrapper: styled.div``,
  Container: styled.div`
    max-width: 500px;
    margin: 40px auto;
    padding: 10px 40px 10px 40px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
  `,
  Title: styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding: 15px 0 15px 0;
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
  Button: styled.button`
    width: 100%;
    padding: 15px;
    background-color: #0070f3;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      background-color: #005bb5;
    }
  `,
};

const CompanySignUp = () => {
  return (
    <S.Wrapper>
      <HeaderSignUp />
      <S.Container>
        <S.Title>기업회원 가입하기</S.Title>
        <S.InputWrapper>
          <S.Input type="text" placeholder="아이디 (4~15자 영문, 숫자)" />
          <S.Input type="password" placeholder="비밀번호 (8~16자)" />
          <S.Input type="password" placeholder="비밀번호 재입력" />
          <S.Input type="email" placeholder="이메일" />
          <S.Input type="text" placeholder="사업자번호" />
        </S.InputWrapper>
        <S.Button>가입하기</S.Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default CompanySignUp;

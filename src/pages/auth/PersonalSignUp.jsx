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
};

const PersonalSignUp = () => {
  return (
    <S.Wrapper>
      <HeaderSignUp />

      <S.Container>
        <S.Title>개인회원 가입하기</S.Title>
        <S.InputWrapper>
          <S.Input type="text" placeholder="아이디 (4~15자 영문, 숫자)" />
          <S.Input type="password" placeholder="비밀번호 (8~15자)" />
          <S.Input type="password" placeholder="비밀번호 재입력" />
          <S.Input type="text" placeholder="이름" />
          <S.Input type="text" placeholder="생년월일" />
          <S.Input type="email" placeholder="이메일" />
          <S.Input type="text" placeholder="휴대폰 번호" />
          <S.Input type="text" placeholder="인증번호" />
        </S.InputWrapper>
        <S.Button>가입하기</S.Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default PersonalSignUp;

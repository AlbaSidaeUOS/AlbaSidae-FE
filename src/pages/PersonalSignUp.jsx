import React from "react";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;
  `,
  Title: styled.h2`
    font-size: 20px;
    margin-bottom: 20px;
    text-align: center;
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
    </S.Wrapper>
  );
};

export default PersonalSignUp;

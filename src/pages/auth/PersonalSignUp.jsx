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
    font-size: 27px;
    font-weight: bold;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding: 15px 0 15px 0;
  `,
  InputWrapper: styled.div``,
  Input: styled.input`
    width: 96.5%;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 15px 0px 15px 15px;
    outline: none;
  `,
  DoubleWrapper: styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin-bottom: 20px;
    align-items: center;
  `,
  InputFirst: styled.input`
    width: 95%;
    border: none;
    padding: 15px 0px 15px 5px;
    border-bottom: 1px solid #ddd;
    font-size: 16px;
    outline: none;
  `,
  InputSecond: styled.input`
    width: 95%;
    border: none;
    padding: 15px 0px 15px 5px;
    font-size: 16px;
    outline: none;
  `,
  Button: styled.button`
    width: 100%;
    padding: 15px;
    font-size: 16px;
    border-radius: 10px;
    font-weight: bold;
    background-color: #fdf25d;
    border: 1px solid #fae04b;
    margin-bottom: 20px;
    cursor: pointer;
  `,
};

const PersonalSignUp = () => {
  return (
    <S.Wrapper>
      <HeaderSignUp />

      <S.Container>
        <S.Title>개인회원가입</S.Title>

        <S.InputWrapper>
          <S.Input type="text" placeholder="아이디 (4~15자 영문, 숫자)" />

          <S.DoubleWrapper>
            <S.InputFirst type="password" placeholder="비밀번호 (8~15자)" />
            <S.InputSecond type="password" placeholder="비밀번호 재입력" />
          </S.DoubleWrapper>

          <S.Input type="text" placeholder="이름" />
          <S.Input type="text" placeholder="생년월일" />
          <S.Input type="email" placeholder="이메일" />
          <S.DoubleWrapper>
            <S.InputFirst type="text" placeholder="휴대폰 번호" />
            <S.InputSecond type="text" placeholder="인증번호" />
          </S.DoubleWrapper>
        </S.InputWrapper>

        <S.Button>가입하기</S.Button>
      </S.Container>
    </S.Wrapper>
  );
};

export default PersonalSignUp;

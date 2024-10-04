import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;
    text-align: center;
  `,
  Title: styled.h1`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  `,
  Card: styled.div`
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  CardTitle: styled.h2`
    font-size: 18px;
    margin-bottom: 10px;
  `,
  Button: styled(Link)`
    padding: 15px;
    background-color: ${({ type }) =>
      type === "personal" ? "#ffe500" : "#0070f3"};
    color: black;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    width: 100%;
    text-decoration: none;
    text-align: center;
    font-weight: bold;
    margin-top: 10px;
    &:hover {
      opacity: 0.8;
    }
  `,
};

const SignUpSelection = () => {
  return (
    <S.Wrapper>
      <S.Title>알바천국 회원가입을 환영합니다.</S.Title>

      <S.Card>
        <S.CardTitle>개인 회원</S.CardTitle>
        <p>일자리를 찾는 알바생</p>
        <S.Button to="/signup/personal" type="personal">
          개인회원 가입하기
        </S.Button>
      </S.Card>

      <S.Card>
        <S.CardTitle>기업 회원</S.CardTitle>
        <p>알바생을 구하는 사장님 (개인사업자, 사업체 직원 포함)</p>
        <S.Button to="/signup/company" type="company">
          기업회원 가입하기
        </S.Button>
      </S.Card>
    </S.Wrapper>
  );
};

export default SignUpSelection;

// 로그인 페이지용 헤더 컴포넌트

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AlbasidaeLogoLongType from "../../images/AlbasidaeLogo(Long_Type).png";

const S = {
  HeaderWrapper: styled.header`
    white-space: nowrap;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px 15px 25px;
  `,
  Title: styled.div`
    display: flex;
    font-size: 30px;
    font-weight: bold;
  `,
  Job: styled.div`
    font-size: 15px;
  `,
  Resume: styled.div`
    font-size: 15px;
  `,
  Right: styled.div`
    display: flex;
    gap: 13px;
    align-items: center;
  `,
  Link: styled(Link)`
    color: inherit;
    text-decoration: none;
  `,
  Split: styled.div`
    color: grey;
    font-size: 23px;
    font-weight: lighter;
  `,
  AlbasidaeLogo: styled.img`
    margin-top: 10px;
    width: 250px;
  `,
  Left: styled.div`
    display: flex;
    gap: 10px;
    padding-bottom: 5px;
  `,
};

const HeaderSignUp = () => {
  return (
    <S.HeaderWrapper>
      <S.Left>
        <S.Link to="/" className="link">
          <S.AlbasidaeLogo src={AlbasidaeLogoLongType} alt="Logo" />
        </S.Link>
      </S.Left>

      <S.Right>
        <S.Link to="/job" className="link">
          <S.Job>채용정보</S.Job>
        </S.Link>
        <S.Split>|</S.Split>
        <S.Link to="/resume" className="link">
          <S.Resume>인재정보</S.Resume>
        </S.Link>
      </S.Right>
    </S.HeaderWrapper>
  );
};

export default HeaderSignUp;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const S = {
  HeaderWrapper: styled.header`
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
    font-size: 20px;
  `,
  Resume: styled.div`
    font-size: 20px;
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
};

const HeaderSignUp = () => {
  return (
    <S.HeaderWrapper>
      <S.Link to="/" className="link">
        <S.Title>알바시대</S.Title>
      </S.Link>
      <S.Right>
        <S.Link to="/job" className="link">
          <S.Job>채용정보</S.Job>
        </S.Link>
        <S.Split>I</S.Split>
        <S.Link to="/resume" className="link">
          <S.Resume>인재정보</S.Resume>
        </S.Link>
      </S.Right>
    </S.HeaderWrapper>
  );
};

export default HeaderSignUp;

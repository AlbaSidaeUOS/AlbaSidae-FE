import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const S = {
  HeaderWrapper: styled.header`
    border-bottom: 1px solid #ccc;
  `,
  Header: styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 18%;
  `,
  Title: styled.div`
    diplay: flex;
    font-size: 30px;
    font-weight: bold;
  `,
  Nav: styled.nav`
    ul {
      display: flex;
      list-style: none;
      gap: 20px;
      margin: 0;
      padding: 0;
      font-size: 16px;
    }
    li {
      cursor: pointer;
    }
  `,
  HeaderButtons: styled.div`
    display: flex;
    gap: 10px;

    button {
      padding: 10px 15px;
      border: none;
      background-color: #f0f0f0;
      cursor: pointer;
      border-radius: 10px;
      font-size: 14px;

      &:hover {
        background-color: #ddd;
      }
    }
  `,
  HeaderSearch: styled.div`
    padding: 10px;
    width: 50%;
  `,
  SearchInput: styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid #ccc;
  `,
  Login: styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    &:hover {
      text-decoration: underline;
    }
  `,
  SignUp: styled.div`
    display: flex;
    align-items: center;
    font-size: 13px;
    &:hover {
      text-decoration: underline;
    }
  `,
  Profile: styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 2%;
  `,
  Menu: styled.div`
    display: flex;
    padding: 15px;
    padding-left: 25px;
    border-top: 1px solid #ccc;
    justify-content: space-between;
    align-items: center;
  `,
  MainHeader: styled.div`
    padding: 10px;
    padding-left: 20px;
    padding-bottom: 3px;
  `,
  Link: styled(Link)`
    color: inherit;
    text-decoration: none;
  `,
};

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.MainHeader>
        <S.Profile>
          <S.Link to="/login" className="link">
            <S.Login>로그인</S.Login>
          </S.Link>
          <S.Link to="/signup" className="link">
            <S.SignUp>회원가입</S.SignUp>
          </S.Link>
        </S.Profile>

        <S.Header>
          <S.Link to="/" className="link">
            <S.Title>알바시대</S.Title>
          </S.Link>
          <S.HeaderSearch>
            <S.SearchInput type="text" placeholder="검색" />
          </S.HeaderSearch>
        </S.Header>
      </S.MainHeader>

      <S.Menu>
        <S.Nav>
          <ul>
            <li>전체메뉴</li>

            <li>
              <S.Link to="/job">채용정보</S.Link>
            </li>
            <li>
              <S.Link to="/resume">인재정보</S.Link>
            </li>
          </ul>
        </S.Nav>

        <S.HeaderButtons>
          <button>
            <S.Link to="/RegistResume">이력서 등록</S.Link>
          </button>
          <button>
            <S.Link to="/RegistNotice">공고 등록</S.Link>
          </button>
        </S.HeaderButtons>
      </S.Menu>
    </S.HeaderWrapper>
  );
};

export default Header;

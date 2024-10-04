import React from "react";
import styled from "styled-components";

const S = {
  JobCardWrapper: styled.div`
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
  `,
  CompanyName: styled.h3`
    margin: 0;
    font-size: 18px;
  `,
  JobTitle: styled.p`
    margin: 5px 0;
    font-size: 16px;
    color: #333;
  `,
  JobLocation: styled.p`
    margin: 5px 0;
    font-size: 14px;
    color: #666;
  `,
};

const JobCard = ({ company, title, location }) => {
  return (
    <S.JobCardWrapper>
      <S.CompanyName>{company}</S.CompanyName>
      <S.JobTitle>{title}</S.JobTitle>
      <S.JobLocation>{location}</S.JobLocation>
    </S.JobCardWrapper>
  );
};

export default JobCard;

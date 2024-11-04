import React from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import {jobData} from './Job';

const PageFrame = styled.div`
    background-color: #F7F8FA;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const JobDetailContainer = styled.div`
    padding: 30px;
    background-color: #FFFFFF;
    border: 1px solid #DDD;
    border-radius: 10px;
    width: 100%;
    max-width: 1075px;
    margin: 1rem auto 0;
    font-family: Arial, sans-serif;

    &:last-child {
        margin-bottom: 1rem;
    }
`;

const CompanyName = styled.strong`
    display: block;
    color: #000000;
    font-weight: normal;
    text-align: left;
`;

const JobTitle = styled.h1`
    display: block;
    font-size: 25px;
    color: #333;
    text-align: left;
    font-weight: bold;
    margin-bottom: 2rem;
`;

const InfoTitle = styled.h1`
    display: block;
    font-size: 25px;
    color: #333;
    text-align: left;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 2rem;
`;

const InfoContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px 3px;
    gap: 150px;
`;

const InfoContainerColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const InfoRow = styled.div`
    display: flex;
    gap: 100px;
    font-size: 18px;
    padding: 5px 0;
`;

const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    padding: 5px 0;
`;

const Label = styled.span`
    width: 80px;
    font-weight: normal;
    color: #333;
    padding: 7px 0;
`;

const Content = styled.span`
    font-weight: bold;
    color: #333;
`;

function JobDetail() {
    const {id} = useParams();
    const job = jobData.find(job => job.id === parseInt(id));

    return (
        <PageFrame>
            <JobDetailContainer>
                <CompanyName>{job.companyName}</CompanyName>
                <JobTitle>{job.title}</JobTitle>
                <InfoContainerRow>
                    <InfoColumn>
                        <Label>{job.wageType}</Label>
                        <Content>{job.wage}</Content>
                    </InfoColumn>
                    <InfoColumn>
                        <Label>{"기간"}</Label>
                        <Content>{job.workTerm}</Content>
                    </InfoColumn>
                    <InfoColumn>
                        <Label>{"요일"}</Label>
                        <Content>{job.workDays}</Content>
                    </InfoColumn>
                    <InfoColumn>
                        <Label>{"시간"}</Label>
                        <Content>{job.workTime}</Content>
                    </InfoColumn>
                </InfoContainerRow>
            </JobDetailContainer>
            <JobDetailContainer>
                <InfoTitle>{"모집조건"}</InfoTitle>
                <InfoContainerColumn>
                    <InfoRow>
                        <Label>{"모집기간"}</Label>
                        <Content>{job.recruitmentPeriod}</Content>
                    </InfoRow>
                    <InfoRow>
                        <Label>{"모집인원"}</Label>
                        <Content>{job.peopleNum}</Content>
                    </InfoRow>
                    <InfoRow>
                        <Label>{"학력"}</Label>
                        <Content>{job.career}</Content>
                    </InfoRow>
                </InfoContainerColumn>
            </JobDetailContainer>
            <JobDetailContainer>
                <InfoTitle>{"근무지 정보"}</InfoTitle>
                <InfoContainerColumn>
                    <InfoRow>
                        <Content>{job.location}</Content>
                    </InfoRow>
                    <InfoRow>
                        <Label>{"근무지명"}</Label>
                        <Content>{job.companyName}</Content>
                    </InfoRow>
                </InfoContainerColumn>
            </JobDetailContainer>
            <JobDetailContainer>
                <InfoTitle>{"근무조건"}</InfoTitle>
                <InfoContainerColumn>
                    <InfoRow>
                        <Label>{"급여"}</Label>
                        <Content>{job.wageType + " " + job.wage}</Content>
                    </InfoRow>
                    <InfoRow>
                        <Label>{"근무기간"}</Label>
                        <Content>{job.workTerm}</Content>
                    </InfoRow>
                    <InfoRow>
                        <Label>{"근무시간"}</Label>
                        <Content>{job.workTime}</Content>
                    </InfoRow>
                </InfoContainerColumn>
            </JobDetailContainer>
            <JobDetailContainer>
                <InfoTitle>{"상세 모집내용"}</InfoTitle>

            </JobDetailContainer>
            <JobDetailContainer>
                <InfoTitle>{"지원방법"}</InfoTitle>

            </JobDetailContainer>
            <JobDetailContainer>
                <InfoTitle>{"기업정보"}</InfoTitle>

            </JobDetailContainer>
        </PageFrame>
    );
}

export default JobDetail;
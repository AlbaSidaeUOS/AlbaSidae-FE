import React from "react";
import styled from 'styled-components';

const jobData = [
    {
        "id": 0,
        "title": "올리브영 롯데백화점잠실점 금토일 마감 MATE 구인",
        "companyName": "올리브영 롯데백화점잠실점",
        "companyContent": "string",
        "companyImage": "string",
        "workCategory": "string",
        "workType": "string",
        "peopleNum": 0,
        "career": "string",
        "workTerm": "string",
        "workDays": "string",
        "workTime": "16:00 - 22:00",
        "pay": "시급 10,000",
        "gender": "string",
        "age": "string",
        "deadline": "string",
        "submitMethod": "string",
        "company": {
            "id": 0,
            "email": "string",
            "name": "string",
            "role": "PERSONAL"
        }
    }
]

const Container = styled.div`
    width: 100%;
    max-width: 1075px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
`;

const Title = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHead = styled.thead`
    font-weight: bold;
`;

const TableRow = styled.tr`
    &:hover {
        background-color: #f5f5f5;
    }
`;

const TableHeader = styled.th`
    padding: 0.75rem;
    text-align: center;
    border-bottom: 1px solid #ddd;
`;

const TableCellLeft = styled.td`
    padding: 0.75rem;
    border-bottom: 1px solid #ddd;
    text-align: left;
`;

const TableCellCenter = styled.td`
    padding: 0.75rem;
    border-bottom: 1px solid #ddd;
    text-align: center;
`;

const CompanyName = styled.strong`
    display: block;
    color: #000000;
    font-weight: normal;
`;

const JobTitle = styled.p`
    margin: 0.5rem 0 0;
    color: #000000;
    font-weight: bold;
`;

const Wage = styled.span`
    font-weight: bold;
    color: #007bff;
    align-content: center;
`;

const Job = () => {
    return (
        <Container>
            <Title>오늘의 채용정보</Title>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader>기업명 / 공고제목</TableHeader>
                        <TableHeader>근무시간</TableHeader>
                        <TableHeader>급여</TableHeader>
                    </TableRow>
                </TableHead>
                <tbody>
                {jobData.map((job, index) => (
                    <TableRow key={index}>
                        <TableCellLeft>
                            <CompanyName>{job.companyName}</CompanyName>
                            <JobTitle>{job.title}</JobTitle>
                        </TableCellLeft>
                        <TableCellCenter>{job.workTime}</TableCellCenter>
                        <TableCellCenter>
                            <Wage>{job.pay}</Wage>
                        </TableCellCenter>
                    </TableRow>
                ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Job;

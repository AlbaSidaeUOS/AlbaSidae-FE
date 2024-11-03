import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

export const jobData = [
    {
        "id": 0,
        "title": "올리브영 롯데백화점잠실점 금토일 마감 MATE 구인",
        "companyName": "올리브영 롯데백화점잠실점",
        "companyContent": "string",
        "companyImage": "string",
        "workCategory": "string",
        "workType": "string",
        "peopleNum": 0,
        "career": "학력무관",
        "workTerm": "3개월 ~ 6개월",
        "workDays": "금,토,일",
        "workTime": "16:00 - 22:00",
        "wageType": "시급",
        "wage": "10,000",
        "gender": "string",
        "age": "string",
        "recruitmentPeriod": "2024.10.30(수) ~ 2024.11.03(일)",
        "submitMethod": "string",
        "location": "서울 송파구 올림픽로 240 지하 1층 올리브영",
        "posted": "2분 전",
        "company": {
            "id": 0,
            "email": "string",
            "name": "string",
            "role": "PERSONAL"
        }
    },
    {
        "id": 1,
        "title": "[경성맥주 아차산점] '주방보조' 모집합니다(급구)",
        "companyName": "달빛 경성맥주 아차산점",
        "companyContent": "string",
        "companyImage": "string",
        "workCategory": "string",
        "workType": "string",
        "peopleNum": 0,
        "career": "string",
        "workTerm": "string",
        "workDays": "string",
        "workTime": "시간 협의",
        "wageType": "시급",
        "wage": "13,000",
        "gender": "string",
        "age": "string",
        "recruitmentPeriod": "string",
        "submitMethod": "string",
        "location": "서울 광진구",
        "posted": "2분 전",
        "company": {
            "id": 1,
            "email": "string",
            "name": "string",
            "role": "PERSONAL"
        }
    },
    {
        "id": 2,
        "title": "[홈마트연산] 카운터 야간 직원모집",
        "companyName": "홈마트연산",
        "companyContent": "string",
        "companyImage": "string",
        "workCategory": "string",
        "workType": "string",
        "peopleNum": 0,
        "career": "string",
        "workTerm": "string",
        "workDays": "string",
        "workTime": "23:00 ~ 09:00",
        "wageType": "월급",
        "wage": "2,150,000",
        "gender": "string",
        "age": "string",
        "recruitmentPeriod": "string",
        "submitMethod": "string",
        "location": "부산 연제구",
        "posted": "2분 전",
        "company": {
            "id": 2,
            "email": "string",
            "name": "string",
            "role": "PERSONAL"
        }
    }
]

const PageFrame = styled.div`
    background-color: #FFFFFF;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1075px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
`;

const PageTitle = styled.h1`
    font-size: 1.5rem;
    margin: 2rem left 1rem;
`;

const FilterContainer = styled.div`
    padding: inherit;
    background-color: #FFFFFF;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const FilterSection = styled.div`
    display: flex;
    align-items: center;
    gap: 1.8rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    flex-wrap: nowrap;
`;

const FilterTitle = styled.h3`
    font-size: 18px;
    color: #333;
    font-weight: bold;
    margin: 0;
    min-width: 80px;
`;

const FilterGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
    flex-grow: 1;
`;

const FilterButton = styled.button`
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 0.9rem;
    color: ${({active}) => (active ? 'white' : '#333')};
    background-color: ${({active}) => (active ? '#333' : 'white')};
    cursor: pointer;

    &:hover {
        background-color: ${({active}) => (active ? '#333' : '#f0f0f0')};
    }
`;

const DropdownButton = styled.select`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    appearance: none;
    color: #333;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="gray" d="M7 10l5 5 5-5H7z"/></svg>') no-repeat right 10px center;
    background-size: 12px;

    &:hover {
        border-color: #555;
    }

    &focus {
        outline: none;
        border-color: #007BFF;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`;

const StyledButton = styled.button`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    appearance: none;
    color: #333;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="gray" d="M7 10l5 5 5-5H7z"/></svg>') no-repeat right 10px center;
    background-size: 12px;
    min-width: 130px;
    text-align: left;
`

const FilterBox = styled.div`
    width: 100%;
    max-width: 1075px;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
`;

const JobTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-decoration: none;
`;

const JobTableHead = styled.thead`
    font-weight: bold;
`;

const JobTableHeader = styled.th`
    padding: 0.75rem;
    text-align: center;
    border-bottom: 1px solid #ddd;
`;

const JobTableHeaderRow = styled.tr`
    padding: 0.75rem;
`;

const JobTableRow = styled.tr`
    &:hover {
        background-color: #FCFDFF;
    }
`;

const JobTableLeft = styled.td`
    padding: 0.75rem;
    border-bottom: 1px solid #ddd;
    text-align: left;
    text-decoration: none;
    
    &:hover {
        text-decoration: deepskyblue;
    }
`;

const JobTableCenter = styled.td`
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

const WageType = styled.span`
    display: block;
    font-weight: bold;
    color: ${(props) => {
        switch (props.wageType) {
            case "시급":
                return "purple";
            case "월급":
                return "red";
            case "연봉":
                return "green";
            default:
                return "black";
        }
    }};
    align-content: center;
`;

const Wage = styled.p`
    margin: 0.5rem 0 0;
    color: #000000;
    font-weight: normal;
    align-content: center;
`;

const Job = () => {
    const [jobs, setJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 20;

    /*useEffect(() => {
        // API CALL
            .then(response) => {
                setJobs(response.data);
            })
            .catch((error) -=> {
                console.error('데이터를 가져오는데 실패했습니다.', error);
            });
    }, []);*/

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobData// jobs.slice(indexOfFirstJob, indexOfLastJob);

    const totalPages = Math.ceil(jobs.length / jobsPerPage);

    const handlePages = (newPage) => {
        setCurrentPage(newPage);
    }

    const [selectedWorkTerms, setSelectedWorkTerms] = useState([]);
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedTimes, setSelectedTimes] = useState([]);

    const workTerms = ['1일', '1주일 이하', '1주일-1개월', '1개월-3개월', '3개월-6개월', '6개월-1년', '1년 이상'];
    const days = ['평일(월,화,수,목,금)', '주말(토,일)', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
    const times = ['오전', '오전-오후', '오후', '오후-저녁', '저녁', '저녁-새벽', '새벽', '새벽-오전', '종일', '시간협의'];

    const handleFilterClick = (type, value) => {
        if (type === 'workTerm') {
            setSelectedWorkTerms(toggleSelection(selectedWorkTerms, value));
        }
        if (type === 'days') {
            setSelectedDays(toggleSelection(selectedDays, value));
        }
        if (type === 'time') {
            setSelectedTimes(toggleSelection(selectedTimes, value));
        }
    };

    const toggleSelection = (selectedArray, value) => {
        if (selectedArray.includes(value)) {
            return selectedArray.filter(item => item !== value);
        } else {
            return [...selectedArray, value];
        }
    };

    const [region, setRegion] = useState('');
    const [occupation, setOccupation] = useState('');
    const [workCondition, setWorkCondition] = useState(false);

    const handleRegionChange = (e) => setRegion(e.target.value);
    const handleOccupationChange = (e) => setOccupation(e.target.value);
    const toggleWorkCondition = () => setWorkCondition(!workCondition);

    const regions = ['휘경동', '전농동', '이문동', '답십리동', '청량리동'];
    const occupations = ['외식/음료', '유통/판매', '문화/여가/생활', '서비스', '사무/회계', '고객상담/영업/리서치', '생산/건설/노무', 'IT/인터넷', '교육/강사', '디자인', '미디어', '운전/배달', '병원/간호/연구'];

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/job/${id}`)
    }

    return (
        <PageFrame>
            <PageTitle>오늘의 채용정보</PageTitle>
            <FilterContainer>
                <FilterSection>
                    <FilterGroup>
                        <DropdownButton value={region} onChange={handleRegionChange}>
                            <option value="">지역</option>
                            {regions.map((region, index) => (
                                <option key={index} value={region}>{region}</option>
                            ))}
                        </DropdownButton>
                        <DropdownButton value={occupation} onChange={handleOccupationChange}>
                            <option value="">하는일</option>
                            {occupations.map((occupation, index) => (
                                <option key={index} value={occupation}>{occupation}</option>
                            ))}
                        </DropdownButton>
                        <StyledButton onClick={toggleWorkCondition}>근무조건</StyledButton>
                        {workCondition && (
                            <FilterBox>
                                <FilterSection>
                                    <FilterTitle>근무기간</FilterTitle>
                                    <FilterGroup>
                                        {workTerms.map((term) => (
                                            <FilterButton
                                                key={term}
                                                active={selectedWorkTerms.includes(term)}
                                                onClick={() => handleFilterClick('workTerm', term)}
                                            >
                                                {term}
                                            </FilterButton>
                                        ))}
                                    </FilterGroup>
                                </FilterSection>
                                <FilterSection>
                                    <FilterTitle>근무요일</FilterTitle>
                                    <FilterGroup>
                                        {days.map((day) => (
                                            <FilterButton
                                                key={day}
                                                active={selectedDays.includes(day)}
                                                onClick={() => handleFilterClick('days', day)}
                                            >
                                                {day}
                                            </FilterButton>
                                        ))}
                                    </FilterGroup>
                                </FilterSection>
                                <FilterSection>
                                    <FilterTitle>근무시간</FilterTitle>
                                    <FilterGroup>
                                        {times.map((time) => (
                                            <FilterButton
                                                key={time}
                                                active={selectedTimes.includes(time)}
                                                onClick={() => handleFilterClick('time', time)}
                                            >
                                                {time}
                                            </FilterButton>
                                        ))}
                                    </FilterGroup>
                                </FilterSection>
                            </FilterBox>
                        )}
                    </FilterGroup>
                </FilterSection>
            </FilterContainer>
            <JobTable>
                <JobTableHead>
                    <JobTableHeaderRow>
                        <JobTableHeader>기업명 / 공고제목</JobTableHeader>
                        <JobTableHeader>근무지</JobTableHeader>
                        <JobTableHeader>근무시간</JobTableHeader>
                        <JobTableHeader>급여</JobTableHeader>
                        <JobTableHeader>등록일</JobTableHeader>
                    </JobTableHeaderRow>
                </JobTableHead>
                <tbody>
                {currentJobs.map((job) => (
                    <JobTableRow key={job.id} onClick={() => handleClick(job.id)}>
                        <JobTableLeft>
                            <CompanyName>{job.companyName}</CompanyName>
                            <JobTitle>{job.title}</JobTitle>
                        </JobTableLeft>
                        <JobTableCenter>{job.location.split(" ")[0] + " " + job.location.split(" ")[1]}</JobTableCenter>
                        <JobTableCenter>{job.workTime}</JobTableCenter>
                        <JobTableCenter>
                            <WageType wageType={job.wageType}>{job.wageType}</WageType>
                            <Wage>{job.wage}</Wage>
                        </JobTableCenter>
                        <JobTableCenter>
                            {job.posted}
                        </JobTableCenter>
                    </JobTableRow>
                ))}
                </tbody>
            </JobTable>
        </PageFrame>
    );
};

export default Job;

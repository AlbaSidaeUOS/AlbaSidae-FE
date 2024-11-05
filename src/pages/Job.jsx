import React, {useState} from "react";
import S from "../uis/JobUI";
import Header from "../components/Header";
import FilterGroup from "../components/Job/FilterGroup";
import JobPagination from "./JobPagination";
import MOCK_JobData from "../mock/mock-jobData";

const Job = () => {
    const [filteredJobs, setFilteredJobs] = useState(MOCK_JobData);

    const handleFilterChange = (filters) => {
        const {
            selectedWorkTerms,
            selectedDays,
            selectedTimes,
            selectedRegions,
            selectedOccupations,
        } = filters;

        const filtered = MOCK_JobData && MOCK_JobData.filter((job) => {
            const matchesWorkTerms =
                !selectedWorkTerms.length || selectedWorkTerms.includes(job.workTerm);
            const matchesDays =
                !selectedDays.length ||
                selectedDays.some((day) => job.workDays.includes(day));
            const matchesTimes =
                !selectedTimes.length || selectedTimes.includes(job.workTime);
            const matchesRegions =
                !selectedRegions.length || selectedRegions.includes(job.location);
            const matchesOccupations =
                !selectedOccupations.length ||
                selectedOccupations.includes(job.workCategory);

            return (
                matchesWorkTerms &&
                matchesDays &&
                matchesTimes &&
                matchesRegions &&
                matchesOccupations
            );
        });
        setFilteredJobs(filtered);
    };

    return (
        <>
            <Header/>
            <S.PageFrame>
                <FilterGroup onFilterChange={handleFilterChange}/>
                <JobPagination filteredJobs={filteredJobs}/>
            </S.PageFrame>
        </>
    );
};

export default Job;

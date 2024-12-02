import React, { useState, useCallback, useEffect, useContext } from "react";
import S from "../uis/JobUI";
import Header from "../components/Header";
import FilterGroup from "../components/Job/FilterGroup";
import JobPagination from "../components/Job/JobPagination";
import { AuthContext } from "../components/auth/AuthContext";

const Job = () => {
  const { email } = useContext(AuthContext);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const fetchFilteredJobs = async (filters) => {
    const url = filters
      ? "http://localhost:8080/api/job-posts/filter"
      : "http://localhost:8080/api/job-posts";

    const options = filters
      ? {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filters),
        }
      : {};

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Failed to fetch job data");
      }
      const responseData = await response.json();
      setFilteredJobs(responseData?.data || []);
    } catch (error) {
      console.error("Failed to fetch: ", error);
    }
  };

  const handleFilterChange = useCallback(
    (filters) => {
      const {
        selectedWorkTerms = [],
        selectedDays = [],
        selectedTimes = [],
        selectedRegions = [],
        selectedOccupations = [],
        useTimeTable = false,
      } = filters;

      if (
        !selectedWorkTerms.length &&
        !selectedDays.length &&
        !selectedTimes.length &&
        !selectedRegions.length &&
        !selectedOccupations.length &&
        !useTimeTable
      ) {
        fetchFilteredJobs(null);
      } else {
        const requestPayload = {
          id: 0,
          email: email || "",
          workLocations: selectedRegions,
          workCategories: selectedOccupations,
          workTerms: selectedWorkTerms,
          workDays: selectedDays,
          workTimeCategory: selectedTimes,
          useTimeTable: useTimeTable,
        };

        fetchFilteredJobs(requestPayload);
      }
    },
    [email]
  );

  useEffect(() => {
    fetchFilteredJobs(null);
  }, []);

  return (
    <>
      <Header />
      <S.PageFrame>
        <FilterGroup onFilterChange={handleFilterChange} />
        <JobPagination filteredJobs={filteredJobs} />
      </S.PageFrame>
    </>
  );
};

export default Job;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { allJobs } from "../utils/featuredJobsDetails"

const BASE_URL= "https://jobs-api14.p.rapidapi.com/list";

function useJobPosts() {
    const [ jobPosts, setJobPosts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState('');
    const [ searchParams, setSearchParams ] = useState({
        query: 'Web Developer',
        location: 'South Africa',
        distance: '1.0',
        language: 'en_GB',
        remoteOnly: 'false',
        datePosted: 'month',
        employmentTypes: 'fulltime;parttime;intern;contractor',
        index: '0' 
    })


    useEffect(()=>{
        async function getJobs(){
            try {
                const headers = {
                    'x-rapidapi-key': '2f9de1dcc9msh5b80d0531acc8f5p1c1e95jsn9ecb6da3990e',
                    'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
                  }
                const response = await axios.get(BASE_URL,{
                    params: searchParams,
                    headers: headers,
                }
                )
                setJobPosts(response.data.jobs);
                // console.log("Fetched Jobs:::", response.data.jobs)
                setIsLoading(false);
            } catch (err) {
                console.error(err)
                setError(err)
                setIsLoading(false);
            }
        }

        getJobs();
    }, [searchParams])


    async function SearchJob(searchParams) {
        try {
            const params =  {
                query: searchParams.jobTitle,
                location: searchParams.location,
                distance: '1.0',
                language: 'en_GB',
                remoteOnly: 'false',
                datePosted: 'month',
                employmentTypes: 'fulltime;parttime;intern;contractor',
                index: '0'
              }
            const headers = {
                'x-rapidapi-key': '2f9de1dcc9msh5b80d0531acc8f5p1c1e95jsn9ecb6da3990e',
                'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
              }
            const response = await axios.get(BASE_URL,{
                params: params,
                headers: headers,
            }
            )
            setJobPosts(response.data.jobs);
            console.log("Searched Jobs:::", response.data.jobs)
            setIsLoading(false);
        } catch (err){
            console.error(err)
            setError(err);
            setIsLoading(false);
        }
    }
    return {
        isLoading,
        jobPosts,
        SearchJob,
        searchParams,
        setSearchParams
    }
}


export default useJobPosts;
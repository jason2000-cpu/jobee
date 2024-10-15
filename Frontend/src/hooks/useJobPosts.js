import React, { useState, useEffect } from 'react';
import { allJobs } from "../utils/featuredJobsDetails"

function useJobPosts() {
    const [ jobPosts, setJobPosts ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState('');


    useEffect(()=>{
        async function getJobs(){
            setJobPosts(allJobs);
            setIsLoading(false);
        }

        getJobs();
    }, [])


    return {
        isLoading,
        jobPosts
    }
}


export default useJobPosts;
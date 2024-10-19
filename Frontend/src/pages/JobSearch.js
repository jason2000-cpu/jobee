import { useState } from 'react';
import NavBar from '../components/NavBar';
import SearchBar from "../components/SearchBar";
import Card from '../components/UI/Card';
import { workModes, experienceLevels, jobType } from '../utils/searchTags';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { allJobs } from '../utils/featuredJobsDetails';
import useJobPosts from './../hooks/useJobPosts'


function JobSearch() {
    const [ jobTypeIsOpen, setJobTypeIsOpen ] = useState(true);
    const [workModesIsOpen, setWorkModeIsOpen ] = useState(true);
    const [ experienceLevelsIsOpen, setExpereinceLevelsIsOpen ] = useState(true);
    const { isLoading, jobPosts } = useJobPosts();


    const handleClose = (name) => {
        if(name === 'jobType') {
            setJobTypeIsOpen(!jobTypeIsOpen)
        } else if (name === 'workModes') {
            setWorkModeIsOpen(!workModesIsOpen)
        } else {
            setExpereinceLevelsIsOpen(!experienceLevelsIsOpen)
        }
    }

    return (
        <div>
            <NavBar />
            <div className='mx-6 pt-2 space-y-4'>
                <span className='text-3xl font-bold'>Job Search</span>
                <div className='mx-10'>
                    <SearchBar />
                </div>
                <div>
                    <div className='md:flex flex-row gap-4'>
                        <div className='h-[67vh] basis-1/4'>
                            <div className='flex justify-between mx-2 mb-2 text-xl'>
                                <span className='font-semibold'>Filter</span>
                                <span>Clear All</span>
                            </div>
                            <div className='border h-full px-3 space-y-6 overflow-x-scroll scrollbar-hide'>
                                <div className='space-y-2'>
                                    <span className='text-xl'>Salary Range</span>
                                    <div className='md:flex gap-2'>
                                        <input className='border h-8 px-2 py-5 w-44 rounded text-xl' placeholder='Min' />
                                        <input className='border h-8 px-2 py-5 w-44 rounded text-xl' placeholder='Max' />
                                    </div>
                                </div>

                                <div>
                                    <div className='flex justify-between '>
                                        <span className='font-bold text-xl'>Job Type</span>
                                        {
                                            jobTypeIsOpen ? 
                                            <MdOutlineKeyboardArrowUp className='cursor-pointer' size={24} onClick={()=>handleClose('jobType')} /> 
                                            :
                                            <MdOutlineKeyboardArrowDown className='cursor-pointer' size={24} onClick={()=>handleClose('jobType')} />
                                        }
                                    </div>
                                    {
                                        jobTypeIsOpen ? (
                                        <div className='space-y-2'>
                                            {
                                                jobType.map((type) => (
                                                    <div className='space-x-2 flex items-center '>
                                                        <input type='checkbox' className='h-5 w-5' />
                                                        <span className='text-xl'>{type.name} ({type.total})</span>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        ) : null
                                    }
                                </div>

                                <div>
                                    <div className='flex justify-between '>
                                        <span className='font-bold text-xl'>Work Modes</span>
                                        {
                                            workModesIsOpen ? 
                                            <MdOutlineKeyboardArrowUp className='cursor-pointer' size={24} onClick={()=>handleClose('workModes')} /> 
                                            :
                                            <MdOutlineKeyboardArrowDown className='cursor-pointer' size={24} onClick={()=>handleClose('workModes')} />
                                        }
                                    </div>
                                    {
                                        workModesIsOpen ? ( 
                                            <div className='space-y-2'>
                                                {
                                                    workModes.map((type) => (
                                                        <div className='space-x-2  flex items-center '>
                                                            <input type='checkbox' className='h-5 w-5' />
                                                            <span className='text-xl'>{type.name} ({type.total})</span>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ) : null
                                    }
                                </div>


                                <div>
                                    <div className='flex justify-between '>
                                        <span className='font-bold text-xl'>Experience</span>
                                        {
                                            experienceLevelsIsOpen ? 
                                            <MdOutlineKeyboardArrowUp className='cursor-pointer' size={24} onClick={()=>handleClose('experience')} /> 
                                            :
                                            <MdOutlineKeyboardArrowDown className='cursor-pointer' size={24} onClick={()=>handleClose('experience')} />
                                        }                                    
                                    </div>
                                    {
                                        experienceLevelsIsOpen ? ( 
                                            <div className='space-y-2'>
                                                {
                                                    experienceLevels.map((type) => (
                                                        <div className='space-x-2  flex items-center '>
                                                            <input type='checkbox' className='h-5 w-5' />
                                                            <span className='text-xl'>{type.name} ({type.total})</span>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        ) : null
                                    }
                                </div>

               
                            </div>
                        </div>
                        <div className='h-[67vh] basis-3/4'>
                            <div className='flex justify-between mx-2 mb-2'>
                                <span className='font-bold text-xl'>All Jobs (2118)</span>
                                <div>
                                    <input className='border' type='select' />
                                </div>
                            </div>
                            <div className=' h-full md:grid grid-cols-3 gap-4 overflow-scroll scrollbar-hide' >
                                {
                                    isLoading ? (<div>Jobs Loading.....</div>) :
                                    (
                                
                                        jobPosts.map((details) => <Card details={details} /> )
                                
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default JobSearch;
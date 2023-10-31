"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { handleCase, handleFormDetails, handleSkillsChange } from '@/redux/features/auth-slice';
import { useState } from "react"
import { CSSTransition } from 'react-transition-group';
import { useRouter } from 'next/navigation';


const Skills = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { skills, formDetails } = useSelector((state: RootState) => state.auth)
    const [submitted, setSubmitted] = useState(false);
    const softwareSkillsArray = [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node.js',
        'Python',
        'SQL',
        'Java',
        'Ruby',
        'PHP',
        'CSharp',
        'Swift',
        'TypeScript',
        'Redux',
        'GraphQL',
        'MongoDB',
        'Git',
        'Docker',
        'AWS',
        'Azure',
        'Kubernetes',
        'Jenkins',
        'DevOps',
        'Agile',
        'Scrum',
        'UXUI',
        'MobileAppDevelopment',
        'DataScience',
        'MachineLearning',
        'AI',
        'Cybersecurity',
        'Blockchain',
        'VRAR',
        'IoT',
        'BigData',
    ];
    console.log(formDetails);
    const handleSubmits = () => {
        dispatch(handleFormDetails())
        setSubmitted(true)
        router.push("/details")
    }
    const submitAnother = () => {
        dispatch(handleCase(1))
    }
    return (
        <div className='flex flex-col gap-2'>
            {softwareSkillsArray.sort().map((each, index) => {
                return (
                    <FormControlLabel
                        control={
                            <Checkbox checked={skills.each} name={each} onChange={(e) => dispatch(handleSkillsChange({ name: e.target.name, value: e.target.checked }))} />
                        }
                        label={each}
                    />
                )
            })}
            <button onClick={() => handleSubmits()} className='bg-blue-500 p-2 w-fit'>Submit</button>
            <div
                className={`fixed top-0 left-0 w-full h-full flex flex-col gap-2 items-center justify-center bg-green-500 text-white transition-all duration-300 z-50 ${submitted ? 'opacity-100 scale-100 ' : 'scale-0'
                    }`}
            >
                Form Submitted!
                <button className='bg-blue-500 p-2' onClick={submitAnother}>Submit another response</button>
            </div>
        </div>
    )
}

export default Skills
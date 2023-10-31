import React, { useState } from 'react';
import { Box, TextField, InputLabel, Button } from '@mui/material';
import { handleBack, handleInputChange, handleNext } from '@/redux/features/auth-slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Autocomplete from '@mui/lab/Autocomplete';
import { Countries, States, Cities } from 'countries-states-cities-service'


const EducationDetails = () => {
    const { formData } = useSelector((state: RootState) => state.auth)
    const [error, setError] = useState('');
    const countries = Countries.getCountries()
    const countryNames = countries.map(country => country.name);
    const states = States.getStates()
    const state = states.filter((each: any) => each.country_id === formData.countryid)
    const stateNames = state.map(sta => sta.name);
    // console.log(stateNames);


    // console.log(countries);


    // console.log(state);


    const degreeNames = [
        "Bachelor of Technology (B.Tech)",
        "Master of Business Administration (MBA)",
        "Bachelor of Science (B.Sc)",
        "Bachelor of Arts (B.A)",
        "Master of Science (M.Sc)",
        "Doctor of Medicine (M.D)",
        "Doctor of Philosophy (Ph.D)",
        "Bachelor of Fine Arts (BFA)",
        "Master of Engineering (M.Eng)",
        "Bachelor of Commerce (B.Com)",
        "Master of Arts (M.A)",
        "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
        "Bachelor of Education (B.Ed)",
        "Master of Computer Science (MCS)",
        "Bachelor of Music (B.Mus)",
        "Bachelor of Pharmacy (B.Pharm)",
        "Master of Public Health (MPH)",
        "Bachelor of Social Work (BSW)",
        "Bachelor of Dental Surgery (BDS)",
        "Master of Fine Arts (MFA)",
    ];

    const fieldsOfStudy = [
        "Computer Science",
        "Mechanical Engineering",
        "Electrical Engineering",
        "Civil Engineering",
        "Chemical Engineering",
        "Biomedical Engineering",
        "Aerospace Engineering",
        "Environmental Engineering",
        "Materials Science and Engineering",
        "Software Engineering",
        "Industrial Engineering",
        "Biological Engineering",
        "Petroleum Engineering",
        "Nuclear Engineering",
        "Ocean Engineering",
        "Systems Engineering",
        "Geological Engineering",
        "Automotive Engineering",
        "Structural Engineering",
        "Electronics Engineering",
        "Robotics Engineering",
        "Telecommunication Engineering",
        "Computer Engineering",
        "Manufacturing Engineering",
        "Agricultural Engineering",
        "Water Resources Engineering",
        "Mining Engineering",
        "Marine Engineering",
        "Power Systems Engineering",
        "Control Systems Engineering",
        "Mechatronics Engineering",
        "Renewable Energy Engineering",
        "Operations Research",
        "Energy Systems Engineering",
        "Wireless Communication Engineering",
        "Psychology",
        "Business Administration",
        "Biology",
        "English Literature",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Economics",
        "History",
        "Political Science",
        "Sociology",
        "Nursing",
        "Education",
        "Art History",
        "Music",
        "Environmental Science",
        "Marketing",
        "Graphic Design",
        "Philosophy",
        "Geology",
        "Medicine",
        "Law",
        "Architecture",
        "Astronomy",
        "Social Work",
        "Communication Studies",
        "Film Production",
        "Public Health",
        "Culinary Arts",
        "Fashion Design",
    ];

    const dispatch = useDispatch()
    // console.log(formData);

    const handleBlur = (e: any) => {
        if (new Date(formData.startdate) > new Date(formData.enddate)) {
            setError('Start date cannot be greater than end date');
        }
        else {
            setError("")
        }
    }
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <div className='flex flex-col gap-3 mt-5'>
                <div className='flex items-center gap-2'>
                    <InputLabel htmlFor="universityname" className='text-blue-500 w-[100px]'>University:</InputLabel>
                    <TextField
                        className='w-[320px]'
                        id="universityname"
                        label="universityname"
                        value={formData.universityname}
                        name='universityname'
                        onBlur={(e) => handleBlur(e)}

                        onChange={(e) => dispatch(handleInputChange({ name: e.target.name, value: e.target.value }))}
                    />
                </div>
                <div className='flex items-center gap-2'>
                    <InputLabel htmlFor="coursename" className='text-blue-500 w-[100px]'>coursename:</InputLabel>
                    <FormControl >
                        <Autocomplete
                            id="coursename"
                            className='w-[320px]'

                            options={degreeNames}
                            value={formData.coursename}
                            onBlur={(e) => handleBlur(e)}

                            onChange={(_, newValue) => {
                                dispatch(handleInputChange({ name: 'coursename', value: newValue }));
                            }}
                            renderInput={(params) => (
                                <TextField {...params} variant="outlined" />
                            )}
                            renderOption={(props, option) => (
                                <li key={option} {...props}>{option}</li>
                            )}
                        />
                    </FormControl>
                </div>
                <div className='flex items-center gap-2 cursor-no-drop'>
                    <InputLabel htmlFor="fieldofstudy" className='text-blue-500 w-[100px]'>fieldofstudy:</InputLabel>
                    <FormControl>
                        <Autocomplete
                            id="fieldofstudy"
                            className='w-[320px]'

                            options={fieldsOfStudy}
                            value={formData.fieldofstudy}
                            onBlur={(e) => handleBlur(e)}
                            onChange={(_, newValue) => {
                                dispatch(handleInputChange({ name: 'fieldofstudy', value: newValue }));
                            }}
                            renderInput={(params) => (
                                <TextField {...params} variant="outlined" />
                            )}
                            renderOption={(props, option) => (
                                <li key={option} {...props}>{option}</li>
                            )}
                        />
                    </FormControl>
                </div>
                <div className='flex items-center gap-2'>
                    <InputLabel htmlFor="gpa" className='text-blue-500 w-[100px]'>GPA:</InputLabel>
                    <TextField
                        className='w-[320px]'
                        id="gpa"
                        label="GPA"
                        name='gpa'
                        type='number'
                        value={formData.gpa}
                        onBlur={(e) => handleBlur(e)}
                        onChange={(e) => {
                            const inputValue = parseFloat(e.target.value)
                            if (e.target.value == "") {
                                dispatch(handleInputChange({ name: e.target.name, value: inputValue }));
                            }
                            if (inputValue >= 0 && inputValue <= 10) {
                                dispatch(handleInputChange({ name: e.target.name, value: inputValue }));
                            }
                        }}

                    />
                </div>
                <div className='flex items-center gap-2 cursor-no-drop'>
                    <InputLabel htmlFor="country" className='text-blue-500 w-[100px]'>country:</InputLabel>
                    <FormControl>
                        <Autocomplete
                            id="country"
                            className='w-[320px]'
                            options={countryNames}
                            value={countries.find(country => country.id === formData.countryid)?.name || ''}
                            onBlur={(e) => handleBlur(e)}
                            onChange={(_, newValue) => {
                                const selectedCountry = countries.find(country => country.name === newValue);
                                console.log(selectedCountry);
                                dispatch(handleInputChange({ name: "country", value: selectedCountry?.name }));
                                dispatch(handleInputChange({ name: "countryid", value: selectedCountry?.id }));
                                // setFormData({ selectedCountryId: selectedCountry ? selectedCountry.id : null });
                            }}
                            renderInput={(params) => (
                                <TextField {...params} variant="outlined" />
                            )}
                            renderOption={(props, option) => (
                                <li key={option} {...props}>{option}</li>
                            )}
                        />
                    </FormControl>
                </div>
                <div className='flex items-center gap-2 cursor-no-drop'>
                    <InputLabel htmlFor="state" className='text-blue-500 w-[100px]'>state:</InputLabel>
                    <FormControl>
                        <Autocomplete
                            id="state"
                            className='w-[320px]'
                            options={stateNames}
                            value={formData.state}
                            onBlur={(e) => handleBlur(e)}
                            onChange={(_, newValue) => {
                                dispatch(handleInputChange({ name: "state", value: newValue }));
                                // setFormData({ selectedCountryId: selectedCountry ? selectedCountry.id : null });
                            }}
                            renderInput={(params) => (
                                <TextField {...params} variant="outlined" />
                            )}
                            renderOption={(props, option) => (
                                <li key={option} {...props}>{option}</li>
                            )}
                        />
                    </FormControl>
                </div>
                <div className="flex  items-center gap-2">
                    <InputLabel htmlFor="startdate" className='text-blue-500 w-[100px]'>startdate:</InputLabel>
                    <TextField
                        className='w-[320px]'
                        id="startdate"
                        name='startdate'
                        type='date'
                        value={formData.startdate}
                        onBlur={(e) => handleBlur(e)}

                        onChange={(e) => dispatch(handleInputChange({ name: e.target.name, value: e.target.value }))}
                    />
                </div>
                <div className="flex  items-center gap-2">
                    <InputLabel htmlFor="enddate" className='text-blue-500 w-[100px]'>enddate:</InputLabel>
                    <div className='flex flex-col gap-2'>
                        <TextField
                            className='w-[320px]'
                            id="enddate"
                            name='enddate'
                            type='date'
                            value={formData.enddate}
                            onBlur={(e) => handleBlur(e)}
                            onChange={(e) => dispatch(handleInputChange({ name: e.target.name, value: e.target.value }))}
                        />
                        {error && <div className="text-red-500">{error}</div>}
                    </div>
                </div>



                <Button variant="contained" onClick={() => {
                    formData.universityname != "" && formData.coursename != "" && formData.fieldofstudy != "" && formData.gpa != "" ?
                        dispatch(handleNext()) : toast.error("Enter All Details!!")
                }} className='text-black bg-blue-300 w-[100px] fixed bottom-10 right-40 hover:text-white'>Next</Button>
                <Button variant="contained" onClick={() => {
                    dispatch(handleBack())
                }} className='text-black bg-blue-300 w-[100px] fixed bottom-10 left-40 hover:text-white'>back</Button>
            </div>
        </Box>
    )
}

export default EducationDetails
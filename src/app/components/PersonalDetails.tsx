import React, { useState } from 'react';
import { Box, TextField, InputLabel, Button } from '@mui/material';
import { handleInputChange, handleNext } from '@/redux/features/auth-slice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PersonalDetails = () => {
    const dispatch = useDispatch()
    const { formData } = useSelector((state: RootState) => state.auth)
    // console.log(formData);
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <div className='flex flex-col gap-3 mt-28'>
                <div className='flex items-center gap-2'>
                    <InputLabel htmlFor="outlined-controlled" className='text-blue-500 w-[100px]'>FirstName:</InputLabel>
                    <TextField
                        className='w-[320px]'
                        id="outlined-controlled"
                        label="FirstName"
                        value={formData.firstname}
                        name='firstname'
                        onChange={(e) => dispatch(handleInputChange({ name: e.target.name, value: e.target.value }))}
                    />
                </div>
                <div className='flex items-center gap-2'>
                    <InputLabel htmlFor="LastName" className='text-blue-500 w-[100px]'>LastName:</InputLabel>
                    <TextField
                        className='w-[320px]'
                        id="LastName"
                        name='lastname'
                        label="LastName"
                        value={formData.lastname}
                        onChange={(e) => dispatch(handleInputChange({ name: e.target.name, value: e.target.value }))}
                    />
                </div>
                <div className='flex items-center gap-2 cursor-no-drop'>
                    <InputLabel htmlFor="FullName" className='text-blue-500 w-[100px]'>FullName:</InputLabel>
                    <TextField
                        name='fullname'
                        className='w-[320px] cursor-no-drop'
                        disabled
                        id="FullName"
                        // label="FullName"
                        defaultValue={formData.firstname + " " + formData.lastname}
                        onChange={(e) => dispatch(handleInputChange({ name: e.target.name, value: e.target.value }))}
                    />
                </div>
                <div className='flex items-center gap-2'>
                    <InputLabel htmlFor="email" className='text-blue-500 w-[100px]'>Email:</InputLabel>
                    <TextField
                        className='w-[320px]'
                        id="email"
                        label="email"
                        name='email'
                        type='email'
                        value={formData.email}
                        onChange={(e) => dispatch(handleInputChange({ name: e.target.name, value: e.target.value }))}
                    />
                </div>
                <div className='flex items-center gap-2'>
                    <InputLabel htmlFor="mobile" className='text-blue-500 w-[100px]'>Mobile No:</InputLabel>
                    <TextField
                        className='w-[320px]'
                        id="mobile"
                        label="mobile No"
                        name='mobile'
                        type='number'
                        value={formData.mobile}
                        onChange={(e) => dispatch(handleInputChange({ name: e.target.name, value: e.target.value }))}

                    />
                </div>
                <div className='flex items-center gap-2'>
                    <InputLabel htmlFor="address" className='text-blue-500 w-[100px]'>Address:</InputLabel>
                    <TextField
                        className='w-[320px]'
                        id="address"
                        label="address"
                        name='address'
                        type='text'
                        value={formData.address}
                        onChange={(e) => dispatch(handleInputChange({ name: e.target.name, value: e.target.value }))}
                    />
                </div>
                <div className="flex  items-center gap-2">
                    <InputLabel htmlFor="dateofbirth" className='text-blue-500 w-[100px]'>DOB:</InputLabel>
                    <TextField
                        className='w-[320px]'
                        id="dateofbirth"
                        name='dateofbirth'
                        type='date'
                        value={formData.dateofbirth}
                        onChange={(e) => dispatch(handleInputChange({ name: e.target.name, value: e.target.value }))}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <FormLabel id="demo-controlled-radio-buttons-group" className='text-blue-500 w-[100px]'>Gender</FormLabel>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            value={formData.gender}
                            name="gender"
                            onChange={(e) => dispatch(handleInputChange({ name: e.target.name, value: e.target.value }))}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <Button variant="contained" onClick={() => {
                    formData.firstname != "" && formData.lastname != "" && formData.email != "" && formData.mobile != "" && formData.dateofbirth != "" ?
                        dispatch(handleNext()) : toast.error("Enter All Details!!")
                }} className='text-black bg-blue-300 w-[100px] fixed bottom-10 right-40 hover:text-white'>Next</Button>
            </div>
        </Box>
    );
}

export default PersonalDetails;

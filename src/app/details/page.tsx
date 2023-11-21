"use client"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { handleCase } from '@/redux/features/auth-slice';
import { useRouter } from 'next/navigation';

const Details = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const { formDetails } = useSelector((state: RootState) => state.auth)
    const response = () => {
        router.push("/")
    }
    return (
        <div className='flex flex-col gap-5 justify-center items-center'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className='bg-gray-400'>
                            <TableCell>NAME</TableCell>
                            <TableCell align="right">EMAIL</TableCell>
                            <TableCell align="right">MOBILENO</TableCell>
                            <TableCell align="right">DOB</TableCell>
                            <TableCell align="right">GENDER</TableCell>
                            <TableCell align="right">UNIVERSITY</TableCell>
                            <TableCell align="right">COURSE NAME</TableCell>
                            <TableCell align="right">FIELD OF STUDY</TableCell>
                            <TableCell align="right">GPA</TableCell>
                            <TableCell align="right">STARTDATE</TableCell>
                            <TableCell align="right">ENDDATE</TableCell>
                            <TableCell align="right">COUNTRY</TableCell>
                            <TableCell align="right">STATE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {formDetails.map((each: any, index: number) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {each?.firstname + " " + each?.lastname}
                                </TableCell>
                                <TableCell align="right">{each?.email}</TableCell>
                                <TableCell align="right">{each?.mobile}</TableCell>
                                <TableCell align="right">{each?.dateofbirth}</TableCell>
                                <TableCell align="right">{each?.gender}</TableCell>
                                <TableCell align="right">{each?.universityname}</TableCell>
                                <TableCell align="right">{each?.coursename}</TableCell>
                                <TableCell align="right">{each?.fieldofstudy}</TableCell>
                                <TableCell align="right">{each?.gpa}</TableCell>
                                <TableCell align="right">{each?.startdate}</TableCell>
                                <TableCell align="right">{each?.enddate}</TableCell>
                                <TableCell align="right">{each?.country}</TableCell>
                                <TableCell align="right">{each?.state}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <button className='bg-blue-500 p-2 w-fit' onClick={() => response()}>submit another response</button>
        </div>
    )
}

export default Details
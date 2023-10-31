"use client"
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Typography from '@mui/material/Typography';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { handleCase } from '@/redux/features/auth-slice';
import PersonalDetails from './components/PersonalDetails';
import EducationDetails from './components/EducationDetails';
import Skills from './components/Skills';

export default function CustomizedTimeline() {
  const timelineStyle = {
    transform: 'rotate(-90deg)',
  };
  const dispatch = useDispatch()
  const { condition } = useSelector((state: RootState) => state.auth)
  // console.log(condition, "cond");

  // React.useEffect(() => {
  //   renderPage()
  // }, [condition])
  const renderPage = () => {
    switch (condition) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <div className='mt-24'>
          <EducationDetails />
        </div>;
      case 3:
        return <div className='mt-24'>
          <Skills />
        </div>;
      default:
        return <div>Page Not Found</div>;
    }
  };
  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <Timeline position="alternate" sx={{ flexDirection: 'row' }} className='flex justify-center mb-12 fixed top-0 z-20 bg-white'>
        <TimelineItem >
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
          </TimelineOppositeContent>
          <TimelineSeparator>
            <div className='flex flex-row justify-center w-full gap-16 cursor-pointer' onClick={() => dispatch(handleCase(1))}>
              <TimelineConnector sx={timelineStyle} />
              <div>
                <TimelineDot className={`${condition <= 3 ? "bg-blue-500  shadow-xl" : ""}`}>
                  <AccountBoxIcon />
                </TimelineDot>
              </div>
              <TimelineConnector sx={timelineStyle} />
            </div>
            <h3>
              PersonalDetails
            </h3>
          </TimelineSeparator>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
          </TimelineOppositeContent>
          <TimelineSeparator>
            <div className='flex flex-row justify-center w-full gap-16 cursor-pointer' onClick={() => dispatch(handleCase(2))}>
              <TimelineConnector sx={timelineStyle} />
              <div>
                <TimelineDot className={`${condition >= 2 ? "bg-red-300  shadow-xl" : ""}`}>
                  <SchoolIcon />
                </TimelineDot>
              </div>
              <TimelineConnector sx={timelineStyle} />
            </div>
            <h3>
              Education details
            </h3>
          </TimelineSeparator>
        </TimelineItem>
        <TimelineItem >

          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
          </TimelineOppositeContent>

          <TimelineSeparator>
            <div className='flex flex-row justify-center w-full gap-16 cursor-pointer' onClick={() => dispatch(handleCase(3))}>
              <div>
                <TimelineDot className={`${condition === 3 ? "bg-green-400 shadow-xl" : ""}`}>
                  <WorkspacePremiumIcon />
                </TimelineDot>
              </div>
              <TimelineConnector sx={timelineStyle} />
            </div>
            <h3 className='pr-16'>
              skills
            </h3>
          </TimelineSeparator>
        </TimelineItem>

      </Timeline>
      {renderPage()}
      <div>

      </div>
    </div>
  );
}
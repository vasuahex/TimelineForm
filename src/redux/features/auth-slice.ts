import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
    condition: number,
    formData: any,
    skills: any,
    formDetails: any
}

const initialState: InitialState = {
    condition: 1,
    formData: {
        firstname: '',
        lastname: '',
        fullname: '',
        email: '',
        mobile: '',
        address: '',
        dateofbirth: '',
        gender: '',
        universityname: '',
        coursename: '',
        fieldofstudy: '',
        gpa: "",
        startdate: '',
        enddate: '',
        state: '',
        country: '',
        countryid: "",
        description: ''
    },
    skills: {
        HTML: false,
        CSS: false,
        JavaScript: false,
        React: false,
        Nodejs: false,
        Python: false,
        SQL: false,
        Java: false,
        Ruby: false,
        PHP: false,
        CSharp: false,
        Swift: false,
        TypeScript: false,
        Redux: false,
        GraphQL: false,
        MongoDB: false,
        Git: false,
        Docker: false,
        AWS: false,
        Azure: false,
        Kubernetes: false,
        Jenkins: false,
        DevOps: false,
        Agile: false,
        Scrum: false,
        UXUI: false,
        MobileAppDevelopment: false,
        DataScience: false,
        MachineLearning: false,
        AI: false,
        Cybersecurity: false,
        Blockchain: false,
        VRAR: false,
        IoT: false,
        BigData: false,
    },
    formDetails: []
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        handleCase: (state, action: PayloadAction<number>) => {
            state.condition = action.payload
        },
        handleInputChange: (state, action) => {
            const { name, value } = action.payload;
            state.formData = {
                ...state.formData,
                [name]: value,
            }
        },
        handleNext: (state) => {
            state.condition += 1
        },
        handleBack: (state) => {
            state.condition -= 1
        },
        handleSkillsChange: (state, action) => {
            const { name, value } = action.payload
            state.skills = {
                ...state.skills,
                [name]: value,
            }
        },
        handleFormDetails: (state) => {
            const selectedSkills = Object.keys(state.skills).filter(skill => state.skills[skill]);
            state.formData.skills = selectedSkills;
            state.formDetails.push(state.formData)
            // state.formDetails.push(state.skills)
        }
    }

})

export const { handleCase, handleInputChange, handleNext, handleBack, handleSkillsChange, handleFormDetails } = authSlice.actions
export default authSlice.reducer
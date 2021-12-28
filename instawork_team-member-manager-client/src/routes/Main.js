import ListMembers from "./ListMembers"
import AddMember from "./AddMember";
import EditMember from "./EditMember"
import {Routes, Route, BrowserRouter} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {Alert, AlertTitle, Paper} from "@mui/material";

function Main() {

    const [successAlert, setSuccessAlert] = useState(false)
    const [failAlert, setFailureAlert] = useState(false)

    const setSuccessStatus = (status) => {
        setSuccessAlert(status)
    }

    const setFailureStatus = (status) => {
        setFailureAlert(status)
    }

    useEffect(() => {
        setTimeout(() => {
            setSuccessAlert(false)
            setFailureAlert(false)
        }, 10000)
    }, [successAlert, failAlert])

    const SuccessfulAlert = (
        <div>
            <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Your changes have been saved!
            </Alert>
        </div>
    )

    const FailureAlert = (
        <div>
            <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                Error: Unable to save changes.
            </Alert>
        </div>
    )

    return (
        <div>
            <Routes>
                <Route path="/" element={<ListMembers/>}/>
                <Route path="add-member" element={<AddMember
                    setFailureStatus={setFailureStatus}
                    setSuccessStatus={setSuccessStatus}/>
                }/>
                <Route path="edit-member" element={<EditMember
                    setFailureStatus={setFailureStatus}
                    setSuccessStatus={setSuccessStatus}/>
                }/>
            </Routes>
            <Paper elevation={3} style={{
                width: "25%",
                position: "absolute",
                right: 0,
                top: 20,
                marginRight: 20,
            }}>
                {successAlert && SuccessfulAlert}
                {failAlert && FailureAlert}
            </Paper>
        </div>

    );
}

export default Main;

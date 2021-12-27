import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {useState} from "react";
import {
    Button,
    FormControl,
    FormControlLabel,
    Grid,
    Paper,
    RadioGroup,
    TextField,
    Typography
} from "@mui/material";
import Radio from '@mui/material/Radio';
import {useLocation, useNavigate} from "react-router-dom";

export default function EditMember(props) {

    const selectedMember = useLocation().state
    const navigate = useNavigate()

    const EditMemberURL = "http://127.0.0.1:8000/manager/editMember/"
    const DeleteMemberURL = "http://127.0.0.1:8000/manager/deleteMember/"
    const [member, setMember] = useState(selectedMember)
    const [isChecked, setIsChecked] = useState(true)

    function HandleMemberRequest(requestType){
        const formData = new FormData()
        for(let [key, value] of Object.entries(member)){
            formData.append(key, value)
        }
        let requestOptions = {
            method: 'POST',
            body: formData,
            redirect: 'follow'
        }

        fetch(requestType, requestOptions)
            .then(response => response.text())
            .then(status => {
                status === 'SUCCESS' ? props.setSuccessStatus(true) : props.setFailureStatus(true)
            })
            .catch(error => console.log('error', error));

        navigate(-1)
    }

    const saveFieldInput = (event) => {
        let value = event.target.value;
        let key = event.target.name;
        setMember({
            ...member,
            [key]: value
        })
    }


    return (
        <Paper
            elevation={3}
            sx={{
                minWidth: 275,
                maxWidth: 400,
                bgcolor: '#ffffff',
                padding: 2,
                borderRadius: 10,
                margin: "auto",
                textAlign: "center",
                paddingTop: 5
            }}>
            <Box sx={{
                width: '100%',
                maxWidth: 360,
                margin: 'auto'
            }}>
                <FormControl>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h4' gutterBottom component='div'>Edit member</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='subtitle1' gutterBottom component='div'>Edit contact info, location, and role</Typography>
                            <Divider />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant='h6'
                                gutterBottom
                                component='div'
                                style={{
                                    textAlign: "left",
                                    paddingLeft: 40
                                }}
                            >
                                Info
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required
                                       id="outlined-basic"
                                       label="First Name"
                                       variant="outlined"
                                       name="first_name"
                                       value={member.first_name}
                                       style = {{width: "100%"}}
                                       onChange={saveFieldInput}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required
                                       id="outlined-basic"
                                       label="Last Name"
                                       variant="outlined"
                                       name="last_name"
                                       value={member.last_name}
                                       style = {{width: "100%"}}
                                       onChange={saveFieldInput}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required
                                       id="outlined-basic"
                                       label="Email"
                                       variant="outlined"
                                       name="email"
                                       value={member.email}
                                       style = {{width: "100%"}}
                                       onChange={saveFieldInput}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-basic"
                                label="Phone Number"
                                variant="outlined"
                                name="phone_number"
                                value={member.phone_number}
                                style = {{width: "100%"}}
                                onChange={saveFieldInput}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant='h6'
                                gutterBottom
                                component='div'
                                style={{
                                    textAlign: "left",
                                    paddingLeft: 40
                                }}
                            >
                                Role
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-required
                                    aria-label="role"
                                    defaultValue="R"
                                    name="role"
                                    value={member.role}
                                    onChange={saveFieldInput}
                                >
                                    <FormControlLabel value="R" control={<Radio />} label="Regular - Can't delete members" />
                                    <Divider />
                                    <FormControlLabel value="A" control={<Radio />} label="Admin - Can delete members" />
                                    <Divider />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                variant="contained"
                                onClick={() => HandleMemberRequest(EditMemberURL)}
                            >
                                Save
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="outlined"
                                    color="error"
                                    onClick={() => HandleMemberRequest(DeleteMemberURL)}
                            >
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </FormControl>
            </Box>
        </Paper>
    );
}

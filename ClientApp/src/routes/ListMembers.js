import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useEffect, useState} from "react";
import {Grid, IconButton, Paper, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {Link} from "react-router-dom";


export default function ListMembers() {

    const MemberListURL = "http://127.0.0.1:8000/manager/getMemberList/"
    const [memberList, setMemberList] = useState([]);
    const [numMembers, setNumMembers] = useState(0)


    function generate(listOfMembers) {
        return listOfMembers.map(function(member, i) {
            let name = member["first_name"] + " " + member["last_name"];
            if(member["role"] === 'A') name += " (admin)"
            return (
                <div>
                    <ListItem key={i} component={Link} to="/edit-member" state={member}>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircleIcon/>
                            </ListItemIcon>
                            <ListItemText
                                primary={name}
                                secondary={
                                    <div>
                                        <div>{member["phone_number"]}</div>
                                        <div>{member["email"]}</div>
                                    </div>
                                }
                            />
                        </ListItemButton>
                    </ListItem>
                    <Divider/>
                </div>
            )
        });
    }

    useEffect(() => {
        async function getMemberList(){
            let requestOptions = {
                method: 'GET',
                redirect: 'follow'
            }

            await fetch(MemberListURL, requestOptions)
                .then(response => response.json())
                .then(function(result){
                    console.log(result["num_members"])
                    console.log(result["member_list"])
                    setMemberList(result["member_list"])
                    setNumMembers(result["num_members"])
                })
                .catch(error => console.log('error', error));
        }
        getMemberList()
    }, [])

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
                textAlign: "center"
        }}>
            <Link to="/add-member" >
                <IconButton
                    style={{
                        left: 170,
                        position: "relative",
                    }}
                >
                    <AddIcon
                        fontSize={"large"}
                    >
                    </AddIcon>
                </IconButton>
            </Link>
            <Box sx={{
                width: '100%',
                maxWidth: 360,
                margin: 'auto',
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h4' gutterBottom component='div'>Team members</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='subtitle1' gutterBottom component='div'>You have {numMembers} members</Typography>
                        <Typography variant='subtitle2' gutterBottom component='div' style={{color: "gray"}}>To edit/delete, click on the member</Typography>
                        <Typography variant='subtitle2' gutterBottom component='div' style={{color: "gray"}}>To add a member, click on the button above</Typography>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <nav aria-label="main mailbox folders">
                            <List>
                                {generate(memberList)}
                            </List>
                        </nav>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Card from '@mui/material/Card'
import {useEffect, useState} from "react";

export default function ListMembers() {

    const MemberListURL = "http://127.0.0.1:8000/manager/getMemberList/"
    const [memberList, setMemberList] = useState([]);


    function getMemberList(){
        fetch(MemberListURL)
            .then(response => response.json())
            .then(result => setMemberList(result["member_list"]))
            .catch(error => console.log('error', error));
    }

    function generate(listOfMembers) {
        return listOfMembers.map(function(member, i) {
            var name = member["first_name"] + " " + member["last_name"];
            if(member["role"] === 'A') name += " \(admin\)"
            return (
                <div>
                    <ListItem key={i}>
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

    useEffect(getMemberList, [])

    return (
        <Card sx={{
            minWidth: 275,
            maxWidth: 500,
            bgcolor: '#ffffff'
        }}>
            <Box sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: '#f3f3f3',
                margin: 'auto'
            }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        {generate(memberList)}
                    </List>
                </nav>
            </Box>
        </Card>
    );
}

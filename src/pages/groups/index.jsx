import React from "react"
import {
    Box,
    Typography,
    TextField,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Divider,
    Paper,
} from "@mui/material"
import {Add, Delete, ShoppingCart} from "@mui/icons-material"

const Groups = () => {
    const groupName = "n17"
    const items = [
        {
            id: 1,
            title: "Osh",
            createdBy: "Otabek",
            time: "03:00",
            date: "01-06-2025",
        },
    ]
    const members = [
        {id: 1, name: "Otabek"},
        {id: 2, name: "Dostonbek"},
    ]

    return (
        <Box p={2}>
            {/* Group Title */}
            <Typography variant="h5" fontWeight="bold" mb={2}>
                {groupName}
            </Typography>

            {/* Main layout: Items & Members */}
            <Box display="flex" gap={2}>
                {/* Items Section */}
                <Paper elevation={3} sx={{flex: 1, p: 2}}>
                    <Box display="flex" alignItems="center" mb={2}>
                        <Typography variant="h6" mr={1}>
                            Items
                        </Typography>
                        <Box
                            bgcolor="blue"
                            color="white"
                            px={1}
                            borderRadius={1}>
                            {items.length}
                        </Box>
                    </Box>

                    <Box display="flex" gap={1} mb={2}>
                        <TextField size="small" placeholder="Title" fullWidth />
                        <IconButton color="primary">
                            <Add />
                        </IconButton>
                    </Box>

                    <List>
                        {items.map((item) => (
                            <React.Fragment key={item.id}>
                                <ListItem
                                    secondaryAction={
                                        <>
                                            <IconButton
                                                edge="end"
                                                color="success">
                                                <ShoppingCart />
                                            </IconButton>
                                            <IconButton
                                                edge="end"
                                                color="error">
                                                <Delete />
                                            </IconButton>
                                        </>
                                    }>
                                    <ListItemText
                                        primary={item.title}
                                        secondary={`Created By ${item.createdBy} (${item.time}, ${item.date})`}
                                    />
                                </ListItem>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </List>
                </Paper>

                {/* Members Section */}
                <Paper elevation={3} sx={{width: 200, p: 2}}>
                    <Box display="flex" alignItems="center" mb={2}>
                        <Typography variant="h6" mr={1}>
                            Members
                        </Typography>
                        <Box
                            bgcolor="blue"
                            color="white"
                            px={1}
                            borderRadius={1}>
                            {members.length}
                        </Box>
                    </Box>

                    <List>
                        {members.map((member) => (
                            <React.Fragment key={member.id}>
                                <ListItem
                                    secondaryAction={
                                        member.name !== "Otabek" && (
                                            <IconButton
                                                edge="end"
                                                color="error">
                                                <Delete />
                                            </IconButton>
                                        )
                                    }>
                                    <ListItemText primary={member.name} />
                                </ListItem>
                                <Divider />
                            </React.Fragment>
                        ))}
                    </List>
                </Paper>
            </Box>
        </Box>
    )
}

export default Groups

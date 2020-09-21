import React, {useEffect} from "react";
import {connect} from "react-redux";
import './RoboFriendsApp.css'
import {createStyles, Grid} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import CardList from "./CardList";
import {RobotCardTs} from "./robofriend";
import {requestRobots, setSearchFieldAction} from "./redux/actions";

const mapStateToProps = (state: any) => {
    return {
        searchField: state.searchRobotsReducers.searchField,
        robots: state.requestRobotsReducers.robots
    }
}

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        mainTitle: {
            fontFamily: 'SEGA LOGO FONT',
            fontWeight: 200,
            color: '#0ccac4',
            marginTop: '20px'
        },
        searchField: {
            width: '25ch',
            background: '#ffffff',
            marginTop: '4ch',
            marginLeft: 90
        },

    }),
);

interface RoboFriendProps {
    searchField: string,
    dispatch: any,
    robots: []
}

function RoboFriendsApp({searchField, dispatch, robots}: RoboFriendProps) {
    const classes = useStyles();
    useEffect(() => {
        requestRobots(dispatch);
    });

    function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
        dispatch(setSearchFieldAction(event.target.value));
    }

    return (
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                justify="center"
            >
                {robots.length > 0 ? (
                        <>
                            <Grid item>
                                <Typography variant="h3" className={classes.mainTitle}>
                                    RoboFriends
                                </Typography>
                                <TextField id="filled-basic" className={classes.searchField} label="search robots"
                                           variant="filled" onChange={handleOnChange}/>
                            </Grid>
                            <CardList robots={robots.filter((robot: RobotCardTs) => {
                                if (searchField.length) {
                                    if (robot.name.toLowerCase().includes(searchField.toLowerCase())) {
                                        return robot
                                    }
                                    return null;
                                } else {
                                    return robot
                                }
                            })}/>
                        </>
                    ) :
                    (
                        <Grid item>
                            <Typography variant="h3" className={classes.mainTitle}>
                                Loading
                            </Typography>
                        </Grid>
                    )
                }

            </Grid>
        </div>
    )
}

export default connect(mapStateToProps,)(RoboFriendsApp);
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import './RoboFriendsApp.css'
import {createStyles, Grid} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import CardList from "./CardList";
import {RobotCardTs} from "./robofriendTypes";
import {requestRobots, setSearchFieldAction} from "../redux/actions";

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

interface RootState {
    requestRobotsReducers: {
        robots: [],
    },
    searchRobotsReducers: {
        searchField: string,
    }

}
type Props = {

};
export const RoboFriendsApp: React.FC<Props> = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const robots1 = (state: RootState) => state.requestRobotsReducers.robots;
    const robots = useSelector(robots1);

    const searchFieldSelector = (state: RootState) => state.searchRobotsReducers.searchField;
    const searchField = useSelector(searchFieldSelector);

    useEffect(() => {
        requestRobots(dispatch);
    }, [dispatch]);

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
                {robots && robots.length > 0 ? (
                        <>
                            <Grid item>
                                <Typography variant="h3" className={classes.mainTitle}>
                                    RoboFriends
                                </Typography>
                                <TextField id="filled-basic" className={classes.searchField} label="search robots"
                                           variant="filled" onChange={handleOnChange}/>
                            </Grid>
                            <CardList robots={robots.filter((robot: RobotCardTs) => {
                                if (searchField && searchField.length) {
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

export default RoboFriendsApp;
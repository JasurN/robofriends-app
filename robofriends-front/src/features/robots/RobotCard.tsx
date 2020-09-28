import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {createStyles, Grid} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import { Robot } from './robotsSlice'

const useStyles = makeStyles(() =>
    createStyles({
        card: {
            minWidth: 220,
            minHeight: 320,
            background: '#9eebcf',
            transition: 'transform .2s',
            "&:hover": {
                transform: 'scale(1.05)'
            }
        },
        image: {
            height: 200,
            width: 200,
            margin: '0 auto',
        },
    }),
);
export default function RobotCard(props: Robot) {
    const classes = useStyles();
    return (
        <Grid item>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.image}
                    image={`https://robohash.org/${props.id}?size=200x200`}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align='center'>
                        <Box fontWeight="fontWeightBold">
                            {props.name}
                        </Box>
                    </Typography>
                    <Typography variant="subtitle1" component="p" align='center'>
                        {props.email}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
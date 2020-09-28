import { createStyles, Grid } from '@material-ui/core'
import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import RobotCard from './RobotCard'
import { Robot, Robots } from './robotsSlice'

const useStyles = makeStyles(() =>
  createStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    },
    cardContainer: {
      marginTop: '2ch'
    },
    card: {
      minWidth: 250,
      maxWidth: 300
    }
  })
)

export default function CardList(props: Robots) {
  const classes = useStyles()

  return (
    <Grid
      container
      direction="row"
      justify="center"
      spacing={2}
      className={classes.cardContainer}
      style={{ borderTop: '5px solid black' }}
    >
      {props.robots.map((robot: Robot) =>

        <RobotCard key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
      )}
    </Grid>
  )
}
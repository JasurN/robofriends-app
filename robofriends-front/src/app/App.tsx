import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { createStyles, Grid } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import CardList from '../features/robots/CardList'
import { fetchIssue, Robot } from '../features/robots/robotsSlice'
import { RootState } from './rootReducer'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
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
    }

  })
)

type Props = {};
export const App: React.FC<Props> = () => {
  const [searchField, setSearchField] = useState('')
  const classes = useStyles()
  const dispatch = useDispatch()

  const robotsSelector = (state: RootState) => state.robots.robots
  const robots = useSelector(robotsSelector)

  useEffect(() => {
    dispatch(fetchIssue())
  }, [dispatch])

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchField(event.target.value);
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
                           variant="filled" onChange={handleOnChange} />
              </Grid>
              <CardList robots={robots.filter((robot: Robot) => {
                if (searchField && searchField.length) {
                  if (robot.name.toLowerCase().includes(searchField.toLowerCase())) {
                    return robot
                  }
                  return null
                } else {
                  return robot
                }
              })} />
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

export default App
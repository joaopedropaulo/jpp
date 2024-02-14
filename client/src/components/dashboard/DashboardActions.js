import React from 'react';
import { Button, Grid, Box, Container, makeStyles } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import SchoolIcon from '@material-ui/icons/School';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import WorkIcon from '@material-ui/icons/Work';
import ListAltIcon from '@material-ui/icons/ListAlt';
import styles from '../../styles/Styles';

const useStyles = makeStyles((theme) => styles(theme));

export const DashboardActions = (props) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box className={classes.dashboardActionsContainer}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={5}>
              <Grid item>
                <Button
                  size="large"
                  href={'/edit-profile'}
                  color="secondary"
                  startIcon={<AccountCircleIcon />}
                  variant="contained"
                  className={classes.dashboardActionsButtons}
                >
                  {props.width === 'xl' || props.width === 'lg'
                    ? 'Edit Profile'
                    : 'Profile'}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="large"
                  href={'/edit-experience'}
                  color="secondary"
                  startIcon={<WorkIcon />}
                  variant="contained"
                  className={classes.dashboardActionsButtons}
                >
                  {props.width === 'xl' || props.width === 'lg'
                    ? 'Edit Experience'
                    : 'Experience'}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="large"
                  href={'/edit-education'}
                  color="secondary"
                  startIcon={<SchoolIcon />}
                  variant="contained"
                  className={classes.dashboardActionsButtons}
                >
                  {props.width === 'xl' || props.width === 'lg'
                    ? 'Edit Education'
                    : 'Education'}
                </Button>
              </Grid>
              <Grid item>
                <Button
                  size="large"
                  href={'/edit-generic-sections'}
                  color="secondary"
                  startIcon={<ListAltIcon />}
                  variant="contained"
                  className={classes.dashboardActionsButtons}
                >
                  {props.width === 'xl' || props.width === 'lg'
                    ? 'Edit Other'
                    : 'Other'}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default withWidth()(DashboardActions);

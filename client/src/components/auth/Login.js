import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { login } from '../../actions/auth';
import { Paper, Grid, TextField, Button, makeStyles } from '@material-ui/core';
import { Face, Fingerprint } from '@material-ui/icons';
import styles from '../../styles/Styles';

const useStyles = makeStyles((theme) => styles(theme));

const Login = ({ login, isAuthenticated }) => {
  const classes = useStyles();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className={classes.loginRootBox}>
      <Grid container>
        <Grid item xs={false} sm={3} />
        <Grid item xs={12} sm={6}>
          <form onSubmit={onSubmit}>
            <Paper className={classes.loginPaper}>
              <Grid container className={classes.loginGridContainer}>
                <Grid item xs={1} className={classes.loginIcons}>
                  <Face />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    autoComplete="on"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    autoFocus
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
              <Grid container className={classes.loginGridContainer}>
                <Grid item xs={1} className={classes.loginIcons}>
                  <Fingerprint />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    autoComplete="on"
                    id="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>

              <Button
                variant="contained"
                color="primary"
                style={{ textTransform: 'none', marginTop: '24px' }}
                type="submit"
              >
                Login
              </Button>
            </Paper>
          </form>
        </Grid>
        <Grid item xs={false} sm={3} />
      </Grid>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAutenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);

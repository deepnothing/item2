import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export class UserOptions extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="User Options" />
            <TextField
              placeholder="Document Name"
              label="DocName"
              onChange={handleChange('documentName')}
              defaultValue={values.documentName}
              margin="normal"
              fullWidth
            />
            <br />


            <TextField
              placeholder="item Count"
              label="item count Count"
              onChange={handleChange('pageCount')}
              defaultValue={values.pageCount}
              margin="normal"
              fullWidth
            />
            <br />
            <FormControl>
              <InputLabel>Turnaround Time</InputLabel>
              <Select onChange={handleChange('tTime')}>
                <MenuItem value='Regular'>Regular</MenuItem>
                <MenuItem value='Rush'>Rush</MenuItem>
                <MenuItem value='SuperRush'>SuperRush</MenuItem>
              </Select>
            </FormControl>
            <br />
            <TextField
              placeholder="Price"
              label="Price"
              onChange={handleChange('price')}
              defaultValue={values.price}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default UserOptions;
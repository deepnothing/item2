import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirmation extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { projectTitle, specialNotes, documentName, fileType, documentType, sourceLanguage, targetLanguage, serviceType, wordCount, pageCount, tTime, price }
        } = this.props;
        return (
            <MuiThemeProvider>
                <>
                    <Dialog
                        open
                        fullWidth
                        maxWidth='sm'
                    >
                        <AppBar title="Confirm Order Details" />
                        <List>
                            <ListItem>
                                <ListItemText primary="Project Title" secondary={projectTitle} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Document Name" secondary={documentName} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="File Type" secondary={fileType} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Document Type" secondary={documentType} />
                            </ListItem>

                            <ListItem>
                                <ListItemText primary="Service Type" secondary={serviceType} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Turnaround Time" secondary={tTime} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Price" secondary={price} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Special Notes" secondary={specialNotes} />
                            </ListItem>
                        </List>
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
                        >Confirm & Continue</Button>
                    </Dialog>
                </>
            </MuiThemeProvider>
        );
    }
}
export default Confirmation;

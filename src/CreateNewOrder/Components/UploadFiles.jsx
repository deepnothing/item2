import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { DropzoneDialog } from 'material-ui-dropzone';
import Button from '@material-ui/core/Button';
import { AttachFile, AudioTrack, Description, PictureAsPdf, Theaters } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export class UploadFiles extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            files: []
        };
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    handleSave(files) {
        //Saving files to state for further use and closing Modal.
        this.setState({
            files: files,
            open: false
        });
    }

    handleOpen() {
        this.setState({
            open: true,
        });
    }

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
                        <AppBar title="Upload your files" />
                        <div>
                            <Button onClick={this.handleOpen.bind(this)}>
                                Upload Files
                </Button>
                            <DropzoneDialog
                                open={this.state.open}
                                onSave={this.handleSave.bind(this)}
                                // acceptedFiles={['image/*', '.pdf']}

                                showPreviews={true}
                                maxFileSize={5000000}
                                onClose={this.handleClose.bind(this)}
                            />

                        </div>
                        <br />
                        <TextField
                            placeholder="Enter Project Title"
                            label="Project Title"
                            onChange={handleChange('projectTitle')}
                            defaultValue={values.projectTitle}
                            margin="normal"
                            fullWidth
                        />
                        <br />
                        <TextField
                            placeholder="Enter Your Special Notes"
                            label="Notes"
                            onChange={handleChange('specialNotes')}
                            defaultValue={values.specialNotes}
                            margin="normal"
                            fullWidth
                        />
                        <br />
                        <Link to="/"> <Button
                            color="secondary"
                            variant="contained"
                            fullWidth


                        >Cancel</Button></Link>

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
export default UploadFiles;

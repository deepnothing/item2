import React, { Component } from 'react';
import UploadFiles from './Components/UploadFiles';
import UserOptions from './Components/UserOptions';
import Confirmation from './Components/Confirmation';
import Success from './Components/Success';

export class CreateNewOrder extends Component {
  state = {
    step: 1,
    uploadFiles: '',
    projectTitle: '',
    specialNotes: '',
    documentName: '',
    fileType: '',
    documentType: '',
    sourceLanguage: '',
    targetLanguage: '',
    serviceType: '',
    wordCount: '',
    pageCount: '',
    tTime: '',
    price: '',
    remove: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

 

  render() {
    const { step } = this.state;
    const { uploadFiles, projectTitle, specialNotes, documentName, fileType, documentType, sourceLanguage, targetLanguage, serviceType, wordCount, pageCount, tTime, price } = this.state;
    const values = { uploadFiles, projectTitle, specialNotes, documentName, fileType, documentType, sourceLanguage, targetLanguage, serviceType, wordCount, pageCount, tTime, price };

    switch (step) {
      case 1:
        return (
          <UploadFiles
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <UserOptions
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default CreateNewOrder;

import React, { Component } from 'react'
import ExteriorColor from './ExteriorColor';
import ExteriorType from './ExteriorType';
import InteriorColor from './InteriorColor';
import InteriorType from './InteriorType';
import Confirmation from './Confirmation';
import Success from './Success';
import Render from './Render';

export default class DesignForm extends Component {
  state = {
    step: 1,
    exteriorType: "",
    username: "",
    interiorColor: "",
    firstName: "",
    lastName: "",
    exteriorColor: "",
    interiorType: "",
  }
  // return to previous step
  prevStep = () => {
    const {step} = this.state;
    this.setState({step:step - 1});
  }
  //advance to next step
  nextStep = () => {
    const {step} = this.state;
    this.setState({step:step + 1});
  }
  //handle user input change
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }
  //handle image selector input change
  handleImageChange = input => e => {
    this.setState({[input]: e.target.id});
  }

  render() {
    //destructure state object into our output variables
    const { step } = this.state;
    const { email, username, password, firstName, lastName, interiorColor, interiorType,exteriorColor,exteriorType } = this.state;
    const values = { email, username, password, firstName, interiorColor, interiorType,exteriorColor,exteriorType}

    //switch that increments or decrements on next/back button moves through component pages and captures user input
    const renderCurrentStep = () => {

        switch (step) {
            case 1: 
              return (<>
                <ExteriorType
                nextStep= {this.nextStep}
                handleChange={this.handleChange}
                handleImageChange={this.handleImageChange}
                values={values}
                />
              </>)
            case 2: 
              return (
                <ExteriorColor
                nextStep= {this.nextStep}
                prevStep= {this.prevStep}
                handleChange={this.handleChange}
                handleImageChange={this.handleImageChange}
                values={values}
                />
              )
            case 3: 
              return (
                <InteriorType 
                nextStep= {this.nextStep}
                prevStep= {this.prevStep}
                handleChange={this.handleChange}
                handleImageChange={this.handleImageChange}
                values={values}
                />
              )
              case 4: 
              return (
                <InteriorColor 
                nextStep= {this.nextStep}
                prevStep= {this.prevStep}
                handleChange={this.handleChange}
                handleImageChange={this.handleImageChange}
                values={values}
                />
              )
              case 5: 
              return (
                <Confirmation
                nextStep= {this.nextStep}
                prevStep= {this.prevStep}
                values={values}
                />
              )
            case 6:
              return (
                <Success />
              )
            // never forget the default case
            default: 
               // do nothing
          }
        };
        //Renders the dynamic image and creates form pages     
        return (<>
            <div className= "contentImageContainer"> 
                <h1> render values from user select here</h1>
            </div>
            <div>{renderCurrentStep()}</div>
            </>)

  }
}

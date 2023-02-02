import React from 'react'

const testingSwitch = () => {
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
            // never forget the default case, otherwise VS code would be mad!
            default: 
               // do nothing
          }
        };
        
        return (<>
            <div className= "content"> 
                <h1> content test</h1>
            </div>
            <div>{renderCurrentStep()}</div>
            </>)
}



export default testingSwitch

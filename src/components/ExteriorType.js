import React from 'react'

const ExteriorType = ({nextStep,handleChange,handleImageChange,values}) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
      }
  
  return (
    
      <form>
          
    <div class="container">
      <div class ="title-container">
      <h3 class="title">Select an Exterior Finish Type</h3>
      </div>
      <div className='circles-container'>
    <button class="circle-button" type='button'>
        <img src="image1.jpg" name="red" class="circle-img" type="button" id= "red" onClick={handleImageChange("exteriorType")}/>
    </button>
    <button class="circle-button" type='button'>
        <img src="image1.jpg" name="black" class="circle-img" type="button" id= "black" onClick={handleImageChange("exteriorType")}/>
    </button>
    <button class="circle-button" type='button'>
        <img src="image1.jpg" name="blue" class="circle-img" type="button" id= "blue" onClick={handleImageChange("exteriorType")}/>
    </button>
    <button class="circle-button" type='button'>
        <img src="image1.jpg" name="green" class="circle-img" type="button" id= "green" onClick={handleImageChange("exteriorType")}/>
    </button>
    <button class="circle-button" type='button'>
        <img src="image1.jpg" name="yellow" class="circle-img" type="button" id= "yellow" onClick={handleImageChange("exteriorType")}/>
    </button>
    <button class="circle-button" type='button'>
        <img src="image1.jpg" name="purple" class="circle-img" type="button" id= "purple" onClick={handleImageChange("exteriorType")}/>
    </button>
      </div>
    </div>
        
        
        <br />
        <h1>{values.exteriorType}</h1>
        <button
          onClick={ Continue }
          type="submit"
        >
          Next
        </button>
      </form>

)
}


export default ExteriorType
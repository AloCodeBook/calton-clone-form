import React from 'react'

const InteriorColor = ({prevStep, nextStep,handleImageChange,values}) => {
    
    const Continue = e => {
        e.preventDefault();
        nextStep();
    }
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
  
  
  
    return (
    <form>
          
    <div class="container">
      <div class ="title-container">
      <h3 class="title">Select an Interior Color</h3>
      </div>
      <div className='circles-container'>
    <button class="circle-button" type='button'>
        <img src="image1.jpg" name="red" class="circle-img" type="button" id= "red" onClick={handleImageChange("interiorColor")}/>
    </button>
    <button class="circle-button" type='button'>
        <img src="image1.jpg" name="black" class="circle-img" type="button" id= "black" onClick={handleImageChange("interiorColor")}/>
    </button>
    <button class="circle-button" type='button'>
        <img src="image1.jpg" name="blue" class="circle-img" type="button" id= "blue" onClick={handleImageChange("interiorColor")}/>
    </button>
    <button class="circle-button" type='button'>
        <img src="image1.jpg" name="green" class="circle-img" type="button" id= "green" onClick={handleImageChange("interiorColor")}/>
    </button>
    <button class="circle-button" type='button'>
        <img src="image1.jpg" name="yellow" class="circle-img" type="button" id= "yellow" onClick={handleImageChange("interiorColor")}/>
    </button>
    <button class="circle-button" type='button'>
        <img src="image1.jpg" name="purple" class="circle-img" type="button" id= "purple" onClick={handleImageChange("interiorColor")}/>
    </button>
      </div>
    </div>
           
        <br />
        <h1>{values.interiorColor}</h1>
        <button
            onClick={ Previous }
            type="submit"
          >
            Previous
          </button>
        <button
          onClick={ Continue }
          type="submit"
        >
          Next
        </button>
      </form>
  )
}

export default InteriorColor
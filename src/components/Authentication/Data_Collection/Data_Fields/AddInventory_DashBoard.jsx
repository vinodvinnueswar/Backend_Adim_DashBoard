
import React from 'react'
import { useState } from 'react'
import { API_Path } from '../../../../helpers/ApiPath'

const AddInventory_DashBoard = () => {
    const [name, setName] = useState("")
    const [category,setCategory] =useState("")
    const [price, setPrice] = useState("")
    const [file,setFile] = useState(null)
    const [webUrl , setWebUrl] = useState("")
    const [loading, setLoading] = useState("")


    // category Filter
    // const handleCategoryChange = (event) => {
    //   const value = event.target.value;
    //   if(category.includes(value)){
    //     setCategory(category.filter((item) => item !== value));
    //   }else{
    //     setCategory([...category, value])
    //   }
    // }

    // Image Upload
    const handleImageUpload = (event) => {
      setFile(event.target.files[0])
    }



    const handleInventorySubmit = async(e) => {
      e.preventDefault()

      try {
        const loginToken = localStorage.getItem('loginToken');
        if(!loginToken){
          console.error("User not authenticated");
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('price',price);
        formData.append('image',file);
        formData.append('category',category);
        formData.append('webUrl' ,webUrl);
        
        // category.forEach((value)=>{
        //   formData.append('category',value);
        // });


        const response = await fetch(`${API_Path}/inventory/add-inventory`,{
          method:'POST',
          headers:{
            'token' : `${loginToken}`
          },
          body: formData
        });
        const data = await response.json()
        if(response.ok){
          console.log(data);
          setName("");
          setPrice("");
          setCategory("");
          setFile(null);
          setWebUrl("")
          alert("Inventory Added Successfully");
           console.log("This is InventoryID:" ,data.inventoryId);
        const inventoryId = data.inventoryId

        localStorage.setItem('inventoryId', inventoryId)
        }


      } catch (error) {
        console.log('Failed to add Inventory');
        alert("failed to add Inventory")

        
      }
    }

 

  return (
    <div className="Add-Inventory">
        <form className="Inventory-Field" onSubmit={handleInventorySubmit}>
          <h2>Upload New Invitation</h2>
            <label htmlFor="">Invitation Title</label>
            <input type="text" name="name"value={name} onChange={(e) => setName(e.target.value)} id="" />
              
            <label htmlFor="">Category</label>
            <select value={category}  onChange={(e) => setCategory(e.target.value)}>
            <option value=""></option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday" >Birthday</option>
            <option value="Halfsaree" >Halfsaree</option>
            <option value="Housewarming">HouseWarming</option>
           </select>

            <label htmlFor="">Price</label>
            <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} id="" />

            <label htmlFor="">Upload Featured Photos</label>
            <input type="file" name="image"  onChange={handleImageUpload } id="" /> <br />
            
            <label>Website URL</label>
            <input
              type="url"
              placeholder="Enter website URL"
              value={webUrl}
              onChange={(e) => setWebUrl(e.target.value)}
            />
            <br /><br />
            
            <button className='btn-submit' type='submit'>
              Submit
            </button>

        </form>
    </div>
  )
}

export default AddInventory_DashBoard
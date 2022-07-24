import { useState } from 'react'
import {  useDispatch} from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
  const [formData, setformData] = useState({
    title: '',
    desc:'',
    price: '',
    img: '',
    category:'',
  })
  const onChange = (e) =>{
    setformData((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value,
  
    }))}

  const { title, img, desc, price , category} = formData 

  const dispatch = useDispatch()

    const onSubmit = (e) =>{
        e.preventDefault()

        const goalData = { title, img, desc, price , category} 

        dispatch(createGoal(goalData))
       
    }
 
 return (
<section className="form">
    <form onSubmit={onSubmit} >
        <div className="form-group">
            <label htmlFor="text">Title</label>
            <input type="text" 
            name='title'
             id='title' 
            value={title} 
            onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="text">Desc</label>
            <input type="text" 
            name='desc'
             id='desc' 
            value={desc} 
            onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="text">Price</label>
            <input type="number" 
            name='price'
             id='price' 
            value={price} 
            onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="text">Img</label>
            <input type="text" 
            name='img'
             id='img' 
            value={img} 
            onChange={onChange} />
        </div>
        <div className="form-group">
            <label htmlFor="text">Category</label>
            <input type="text" 
            name='category'
             id='category' 
            value={category} 
            onChange={onChange} />
        </div>
        <div className="form-group">
            <button className="btn btn-block" type='submit'>
                Add Product
            </button>
        </div>
    </form>
</section>
  )
}

export default GoalForm
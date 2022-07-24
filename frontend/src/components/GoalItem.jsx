 
 import { useDispatch } from 'react-redux'
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({ goal }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      {/* <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div> */}
      <h2>{goal.title}</h2>
      <h2>{goal.desc}</h2>
      <h2>{goal.price}</h2>
      <h2>{goal.category}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default GoalItem
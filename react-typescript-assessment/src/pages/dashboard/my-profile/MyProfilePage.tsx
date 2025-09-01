import UserForm from '../../../components/UserForm'
import { useMyContext } from '../../../context/MyContext'

const MyProfilePage = () => {

  const { state } = useMyContext();
  
  console.log(state)
  
  return (
    <div>
      <UserForm item={state.login} viewOnly={true} />
    </div>
  )
}

export default MyProfilePage
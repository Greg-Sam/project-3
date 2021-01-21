import { Redirect } from 'react-router-dom'
import LogOutModal from '../Components/LogOutModal/LogOutModal'


const Logout = () => {
  localStorage.clear()


return (

  
  <>
  <LogOutModal />
  {/* <Redirect to='/' /> */}
  </>
)

}

export default Logout
import React from 'react'
import './App.css'
import Router from './Router'

const App: React.FC = () => {
  // const profileValue = {
  //   name: '',
  //   age: '',
  //   phone: '',
  //   address: '',
  //   job: '',
  //   email: '',
  //   role: ''
  // }
  // const [profile, setProfile] = useState<Profile>(profileValue)

  // useEffect(() => {
  //   userService.getProfile().then(resp => setProfile(resp.data)).catch(error => console.log('error', error))
  // }, [])

  return (
    <>
      <Router />
    </>
  );
}

export default App

import {Route, Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/auth/ProtectedRoute'
import ForgotPassword from './components/auth/ForgotPassword'
import LogIn from './components/auth/LogIn'
import SignUp from './components/auth/SignUp'
import LogOut from './components/auth/LogOut'
import {DBProvider} from './contexts/DBContext'
import {useAuth} from './contexts/authContext'

const App = ({}) => {
    const {currentUser} = useAuth()

    return (
        <>
            <Routes>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/logout" element={<LogOut/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="*" element={
                    <ProtectedRoute>
                        <DBProvider currentUser={currentUser}>
                            <Dashboard/>
                        </DBProvider>
                    </ProtectedRoute>
                }/>
            </Routes>
        </>
    )
}

export default App
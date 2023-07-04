import {Route, Routes} from 'react-router-dom'
import Dashboard from './comps/home/Dashboard'
import ProtectedRoute from './comps/auth/ProtectedRoute'
import ForgotPassword from './comps/auth/ForgotPassword'
import LogIn from './comps/auth/LogIn'
import SignUp from './comps/auth/SignUp'
import LogOut from './comps/auth/LogOut'

const App = ({}) => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/logout" element={<LogOut/>}/>
                <Route path="/forgot-password" element={<ForgotPassword/>}/>
                <Route path="*" element={
                    <ProtectedRoute>
                        <Dashboard/>
                    </ProtectedRoute>}/>
            </Routes>
        </>
    )
}

export default App
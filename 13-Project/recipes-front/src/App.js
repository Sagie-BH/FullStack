import RecipeList from './components/RecipeList/RecipeList';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './components/Auth/AuthContext';
import PrivateRoute from './components/Auth/PrivateRoute';

const Book = () => {
    return (
        <h1>Book</h1>
    )
}

const App = () => {
    const { currentUser } = useAuth();
    return (
        <Router>
            <Routes>
                <Route path='/login' element={currentUser ?
                    <Navigate to='/recipes' /> : <Login />}></Route>
                <Route path='/recipes'
                    element={
                        <PrivateRoute>
                            <RecipeList />
                        </PrivateRoute>
                    }>
                </Route>
                <Route path='*' element={<Navigate to='/login' />} />
                <Route path='/books' element={<Book />} />
            </Routes>
        </Router>
    )
}

export default App;
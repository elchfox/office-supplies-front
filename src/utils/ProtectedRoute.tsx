import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children }: any) => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    
    if (!isLoggedIn) {
        navigate("/login", { replace: true });
        return <div></div>
    }

    return children
};

export default ProtectedRoute;
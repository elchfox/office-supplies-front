import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generalData } from '../store/thunks/generalData';
import { RootState } from '../store';

const SplashScreen = ({ children }: any) => {
    const { loading } = useSelector((state: RootState) => state.general)
    const dispatch = useDispatch<any>();
    useEffect(() => {
        dispatch(generalData())
        return () => {
        };
    }, []);


    if (loading) {
        return <></>
    }
    return (
        children
    );
};

export default SplashScreen;
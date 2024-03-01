import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomRouter() {


    const navigation = () =>{
        const navigate = useNavigate();
        navigate('/home');
    }


    return navigation
    }
  

export default CustomRouter;
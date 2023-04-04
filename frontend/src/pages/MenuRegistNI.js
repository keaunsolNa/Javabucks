
import { Navigate } from 'react-router-dom';
import MenuRegistNIForm from '../components/form/MenuRegistNIForm';

function MenuRegistNI() {

    /* 로그인 상태가 아닌데 호출할 경우 메인으로 */
    const loginStatus = !!localStorage.getItem('isLogin');

    if(!loginStatus) {
        return <Navigate to="/login" replace={ true }/>
    }

    return(
        <>  
            <h1>영양 성분 등록 페이지</h1>
            <MenuRegistNIForm/>
        </>
    );
}

export default MenuRegistNI;
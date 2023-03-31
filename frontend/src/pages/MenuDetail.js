import Menu from "../components/items/Menu";
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callDeleteMenuAPI } from '../apis/MenuAPICalls';

function MenuDetail() {

    console.log('MenuDetail.js')
    /* 로그인 상태 확인 */
    const loginStatus = !!localStorage.getItem('isLogin');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    const result = useSelector(state => state.menuReducer);
    const updateHandler = () => navigate(`/menu/modify/${id}`);
    const deleteHandler = () => dispatch(callDeleteMenuAPI(id));

    useEffect(
        () => {
            /* 메뉴 삭제 완료 확인 후 /menu로 이동 */
            if (result.delete) {
                alert('메뉴 삭제');
                navigate(`/menu`);
            }
        }, // eslint-disable-next-line
        [result]
    );

    return (
        <div>
            <h1>메뉴 상세</h1>
            <h1>
                { 
                // (loginStatus) && 
                    <>
                        <button onClick={ updateHandler }>메뉴 수정</button>
                        <button onClick={ deleteHandler }>메뉴 삭제</button>
                    </>
                }
            </h1>
            <Menu id={ id }/>
        </div>
    );
}

export default MenuDetail;
import { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { callGetMenuAPI } from '../../apis/MenuAPICalls';

function Menu({ id }) {

    const result = useSelector(state => state.menuReducer);
    const drink = result.drink;
    const dispatch = useDispatch();

    useEffect(
        () => {
            /* menu 호출 API */
            dispatch(callGetMenuAPI(id));
        },
        []
    );

    return (

        drink && (
            <>
                <h3>메뉴 이름 : { drink[0].DRINK_NAME_KOR }</h3>
                <h3>메뉴 영문이름 : { drink[0].DRINK_NAME_ENG }</h3>
                <h3>메뉴 가격 : { drink[0].DRINK_PRICE }</h3>
                <h3>메뉴 크기 : { drink[0].DRINK_SIZE }</h3>
                <h3>메뉴 종류 : { drink[0].DRINK_TYPE }</h3>
                <h3>메뉴 설명 : { drink[0].DRINK_INFO }</h3>
                {/* <img src={ menu.detail.image } style={ { maxWidth: 500 } } alt={ menu.menuName }/> */}
            </>
        )
    );
}

export default Menu;
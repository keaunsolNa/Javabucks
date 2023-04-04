
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { callRegistNIMenuAPI } from '../../apis/MenuAPICalls';

function MenuRegistNIForm() {

    const result = useSelector(state => state.menuReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    /* 입력 값 state 저장 */            
    const [registNIMenu, setRegistNIMenu] = useState(
        {
            calorie: 0,
            carbohydrate: 0,
            sugers: 0,
            salt_ni: 0,
            protein: 0,
            province: 0,
            cholesterol: 0,
            trans_fat: 0,
            caffeine: 0,
            saturated_fat: 0
        }
    );
    
    /* 입력 값 변경 시 이벤트 핸들러 */
    const onChangeHandler = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        value = parseInt(value);

        setRegistNIMenu(
            {
                ...registNIMenu,
                [name] : value
            }
        );

    }


      useEffect(
        () => {
            /* 메뉴 등록 완료 확인 후 /menu로 이동 */
            if(result.registNI) {
                alert('메뉴 등록');
                navigate(`/menu`);
            }
        },
        [result]
      );

    const onClickHandler = () => {
        dispatch(callRegistNIMenuAPI(registNIMenu));
    }

    return(
        <div style={{ 
            fontsize: '24px',
            marginLeft: '37%',
            textAlign: 'left'
          }}>
            <label>칼로리 : </label>
            <input type="text" name="calorie" value={ registNIMenu.calorie } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <label>탄수화물 : </label>
            <input type="text" name="carbohydrate" value={ registNIMenu.carbohydrate } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <label>당류 : </label>
            <input type="text" name="sugers" value={ registNIMenu.sugers } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <label>나트륨 : </label>
            <input type="text" name="salt_ni" value={ registNIMenu.salt_ni } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <label>단백질: </label>
            <input type="number" name="protein" value={ registNIMenu.protein } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <label>지방: </label>
            <input type="number" name="province" value={ registNIMenu.province } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <label>콜레스테롤: </label>
            <input type="number" name="cholesterol" value={ registNIMenu.cholesterol } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <label>트랜스지방: </label>
            <input type="number" name="trans_fat" value={ registNIMenu.trans_fat } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <label>카페인: </label>
            <input type="number" name="caffeine" value={ registNIMenu.caffeine } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <label>포화지방: </label>
            <input type="number" name="saturated_fat" value={ registNIMenu.saturated_fat } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <button onClick={ onClickHandler }>메뉴 등록</button>
        </div>
    );
}

export default MenuRegistNIForm;
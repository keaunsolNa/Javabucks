import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callModifyMenuAPI } from '../../apis/MenuAPICalls';

function MenuModifyForm() { 

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector(state => state.menuReducer);

    /* 입력 값 state 저장 */
    const [modifyMenu, setModifyMenu] = useState(
        {
            id: 0,
            drinkNameKor: '',
            drinkNameEng: '',
            drinkPrice: 0,
            drinkTypeKor: '에스프레소',
            drinkTypeEng: 'Espresso',
            drinkSize: 'Tall',
            drinkHotIce: 'HotOnly',
            allergyTriggers: '',
            drinkInfo: '',
            image: ''
        }
    );

    /* 입력 값 변경 시 이벤트 핸들러 */
    const onChangeHandler = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        let drinkTypeEngInput = "";
        /* json-server에 저장될 데이터 타입 맞추기 위한 코드 */
        switch(name) {
            case 'drinkPrice' : 
                value = parseInt(value); 
                break;

            case 'drinkTypeKor' :

                switch(value) {

                    case '리저브 에스프레소' : 
                        drinkTypeEngInput = 'Reserve Espresso';
                        break;

                    case '리저드 드립' :
                        drinkTypeEngInput = 'Reserve Drip';
                        break;

                    case '리프레셔' :
                        drinkTypeEngInput = 'Javabucks Refreshers';
                        break;

                    case '콜드 브루' :
                        drinkTypeEngInput = 'Cold Brew';
                        break;
                        
                    case '블론드' :
                        drinkTypeEngInput = 'Blonde Coffee';
                        break;

                    case '에스프레소' :
                        drinkTypeEngInput = 'Espresso';
                        break;

                    case '디카페인 커피' :
                        drinkTypeEngInput = 'Decaf Coffe';
                        break;

                    case '프라푸치노' :
                        drinkTypeEngInput = 'Frappuccino';
                        break;

                    case '블렌디드' :
                        drinkTypeEngInput = 'Blended';
                        break;

                    case '피지오' :
                        drinkTypeEngInput = 'Javabucks Fizzio';
                        break; 

                    case '티바나' :
                        drinkTypeEngInput = 'Teavana';
                        break; 

                    case '브루드 커피' :
                        drinkTypeEngInput = 'Brewed Coffe';
                        break; 

                    case '아포카토/기타' :
                        drinkTypeEngInput = 'Others';
                        break; 

                    case '병음료' :
                        drinkTypeEngInput = 'RTD';
                        break; 

                    default : 
                        drinkTypeEngInput = ' ';
                        break;
                }

        }

        setModifyMenu(
            {
                ...modifyMenu,
                id : id, 
                drinkTypeEng : drinkTypeEngInput,
                [name] : value
            }
        );

    }

    /* 파일 첨부 시 동작하는 이벤트 핸들러 */
    const fileChangeHandler = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);

        setModifyMenu(
            {
                ...modifyMenu,
                image : base64                    
            }
        );
    }

     /* FileReader API를 통해 input type="file"에 첨부 된 파일을 base64 인코딩 형식으로 변환 */
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
    }

    useEffect(
        () => {
            /* 메뉴 수정 완료 확인 후 /menu로 이동 */
            if(result.modify) {
                alert('메뉴 수정');
                navigate(`/menu`);
            }
        },
        [result]
      );

    const onClickHandler = () => {
        /* modifyMenu에 대한 유효성 검사 후 호출 */
        dispatch(callModifyMenuAPI(modifyMenu));
    }

    return(
        <div style={{ 
            fontsize: '24px',
            marginLeft: '37%',
            textAlign: 'left'
          }}>
            <h1>{ id }번 메뉴 수정</h1>
            <label>메뉴 이름(한글) : </label>
            <input type="text" name="drinkNameKor" value={ modifyMenu.drinkNameKor } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <label>메뉴 이름(영문) : </label>
            <input type="text" name="drinkNameEng" value={ modifyMenu.drinkNameEng } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <label>메뉴 가격 : </label>
            <input type="number" name="drinkPrice" value={ modifyMenu.drinkPrice } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <label>음료 종류 : </label>
            <select name="drinkTypeKor" value={ modifyMenu.drinkTypeKor } onChange={ onChangeHandler }>
                <option>리저브 에스프레소</option>
                <option>리저드 드립</option>
                <option>리프레셔</option>
                <option>콜드 브루</option>
                <option>블론드</option>
                <option>에스프레소</option>
                <option>디카페인 커피</option>
                <option>프라푸치노</option>
                <option>블렌디드</option>
                <option>피지오</option>
                <option>티바나</option>
                <option>브루드 커피</option>
                <option>아포카토/기타</option>
                <option>병음료</option>
            </select>
            <br/>
            <br/>
            <input type="text" name="drinkTypeEng" hidden={true} value={ modifyMenu.drinkTypeEng } onChange={ onChangeHandler }/>
            <label>음료 사이즈 : </label>
            <select name="drinkSize" value={ modifyMenu.drinkSize } onChange={ onChangeHandler }>
                <option>Short</option>
                <option>Tall</option>
                <option>Grande</option>
                <option>Venti</option>
            </select>
            <br/>
            <br/>
            <label>HOT/ICE 여부  : </label>
            <select name="drinkHotIce" value={ modifyMenu.drinkHotIce } onChange={ onChangeHandler }>
                <option>HotOnly</option>
                <option>IceOnly</option>
                <option>Both</option>
            </select>
            <br/>
            <br/>
            <label>알레르기 유발 요인  : </label>
            <input type="text" name="allergyTriggers" value={ modifyMenu.allergyTriggers } onChange={ onChangeHandler }/>
            <br/>
            <br/>
            <label>메뉴 설명 : </label>
            <textarea rows="10" cols="40"  name="drinkInfo" value={ modifyMenu.drinkInfo } onChange={ onChangeHandler } ></textarea>
            <br/>
            <br/>
            <label>사진 : </label>
            <input 
                type="file" 
                name="image"
                accept='image/*'
                onChange={ fileChangeHandler }/>
            <br/>
            <br/>
            <button onClick={ onClickHandler }>메뉴 수정</button>
        </div>
    )
}

export default MenuModifyForm;
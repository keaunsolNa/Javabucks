import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MenuItem from '../items/MenuItem';
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";
import { callGetMenuCategoryAPI } from "../../apis/MenuAPICalls";


function MenuList() {
    const result = useSelector(state => state.menuReducer);

    const menuList = result.menulist;

    const dispatch = useDispatch();

    const [menuCategory, setMenuCategory] = useState(
        {
            drinkTypeKor: ''
        }
    );

    let categoryName = ''
    let value = ''

    const onChangeHandler = (e) => {

        categoryName  = e.target.name;
        value = e.target.value;
        setMenuCategory((prevMenuCategory) => {
            return {
                ...prevMenuCategory,
                [categoryName ]: value,
            };
        });

        dispatchHandler();
    }

    const dispatchHandler = async() => {

        const updatedMenuCategory = {
            ...menuCategory,
            [categoryName ]: value,
        };
    
        dispatch(callGetMenuCategoryAPI(updatedMenuCategory.drinkTypeKor));
        
    }

    useEffect(
        () => {
            /* menuList 호출 API */
            dispatch(callGetMenuListAPI());
        },
        []
    );
    

    return (
        menuList && (
            <div>
                <select name="drinkTypeKor" value={ menuCategory.drinkTypeKor } onChange={ onChangeHandler }>
                    <option>전체</option>
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
                <div className="menuBox">
                    { menuList.map(menu => <MenuItem key={ menu.DRINK_ID } menu={ menu }/>) }
                </div>
            </div>
        )
    );
}

export default MenuList;
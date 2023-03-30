import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MenuItem from '../items/MenuItem';
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";


function MenuList() {
    const result = useSelector(state => state.menuReducer);

    console.log(result)
    const menuList = result.menulist;

    console.log(menuList)
    const dispatch = useDispatch();

    useEffect(
        () => {
            /* menuList 호출 API */
            console.log('MenuList.js useEffect')
            dispatch(callGetMenuListAPI());
        },
        []
    );
    

    return (
        menuList && (
            <div>
                <div className="menuBox">
                    { menuList.map(drink => <MenuItem key={ drink.DRINK_ID } drink={ drink }/>) }
                </div>
            </div>
        )
    );
}

export default MenuList;
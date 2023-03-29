import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MenuItem from '../items/MenuItem';
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";


function MenuList() {

    const result = useSelector(state => state.menuReducer);

    const menuList = result.menulist;
    const dispatch = useDispatch();

    useEffect(
        () => {
            /* menuList 호출 API */
            dispatch(callGetMenuListAPI());
        },
        []
    );
    

    return (
        menuList && (
            <div className="menuBox">
                { menuList.map(drink => <MenuItem key={ drink.DRINK_ID } drink={ drink }/>) }
            </div>
        )
    );
}

export default MenuList;
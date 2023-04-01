import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MenuItem from '../items/MenuItem';
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";


function MenuList() {
    const result = useSelector(state => state.menuReducer);

    const menuList = result.menulist;

    const background = {
        display: 'inlineBlock',
        margin: '5px',
    }


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
            <div>
                <div className="menuBox">
                    { menuList.map(menu => <MenuItem key={ menu.DRINK_ID } menu={ menu }/>) }
                </div>
            </div>
        )
    );
}

export default MenuList;
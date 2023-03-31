import { Link } from  'react-router-dom';

function MenuItem({ menu }) {
    console.log('MenuItem 호출....')
    return (
        <>
            <Link to={ `/menu/${ menu.DRINK_ID }` }>
                <div className="menuItem">
                    <h3>이름 : { menu.DRINK_NAME_KOR }</h3>
                    <h3>가격 : { menu.DRINK_PRICE }</h3>
                    <h4>종류 : { menu.DRINK_TYPE }</h4>
                </div>
            </Link>
        </>
    );
}

export default MenuItem;

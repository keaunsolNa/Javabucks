import { Link } from  'react-router-dom';

function MenuItem({ drink }) {
    console.log('MenuItem 호출....')
    return (
        <>
            <Link to={ `/menu/${ drink.DRINK_ID }` }>
                <div className="menuItem">
                    <h3>이름 : { drink.DRINK_NAME_KOR }</h3>
                    <h3>가격 : { drink.DRINK_PRICE }</h3>
                    <h4>종류 : { drink.DRINK_TYPE }</h4>
                </div>
            </Link>
        </>
    );
}

export default MenuItem;

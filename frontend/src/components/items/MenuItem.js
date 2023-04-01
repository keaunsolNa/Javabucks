import { Link } from  'react-router-dom';
// backgroundimg={`(${ menu.DRINK_IMAGE })`}
function MenuItem({ menu }) {
    return (
        <div style={{ 
            backgroundImage: `url(${menu.DRINK_IMAGE})`,
            backgroundSize: `cover`
          }}>
            <Link to={ `/menu/${ menu.DRINK_ID }` }>
                <div className="menuItem"  >
                    <h3>이름 : { menu.DRINK_NAME_KOR }</h3>
                    <h3>가격 : { menu.DRINK_PRICE }</h3>
                    <h4>종류 : { menu.DRINK_TYPE }</h4>
                    {/* <img src={ menu.DRINK_IMAGE } style={ { maxWidth: 500 } } alt={ menu.DRINK_NAME_KOR }/> */}
                </div>
            </Link>
        </div>
    );
}

export default MenuItem;

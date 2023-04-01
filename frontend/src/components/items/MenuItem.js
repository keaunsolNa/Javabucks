import { Link } from  'react-router-dom';
// backgroundimg={`(${ menu.DRINK_IMAGE })`}
function MenuItem({ menu }) {
    return (
        <div className='menuImageWrapper'>

            <Link to={ `/menu/${ menu.DRINK_ID }` }>
                <div style={{ 
                    backgroundImage: `url(${menu.DRINK_IMAGE})`,
                    backgroundSize: `cover`
                }} className='menuImage'>
                </div>
                <h3> { menu.DRINK_NAME_KOR }</h3>
            </Link>
        </div>
    );
}

export default MenuItem;

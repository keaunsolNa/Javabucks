import { Link } from  'react-router-dom';

function MenuItem({ menu }) {
    console.log(menu)
    return (
        <Link to={ `/menu/${ menu.id }` }>
            <div className="menuItem">
                {/* <h3>이름 : { lists.value }</h3> */}
                {/* <h3>test : { lists.testtest }</h3> */}
                <h3>이름 : { menu.menuName }</h3>
                <h3>가격 : { menu.menuPrice }</h3>
                <h4>종류 : { menu.categoryName }</h4>
            </div>
        </Link>
    );
}
// function MenuItem({ menu }) {
//     console.log(menu)
//     return (
//         <Link to={ `/menu/${ menu.id }` }>
//             <div className="menuItem">
//                 {/* <h3>이름 : { lists.value }</h3> */}
//                 {/* <h3>test : { lists.testtest }</h3> */}
//                 <h3>이름 : { menu.menuName }</h3>
//                 <h3>가격 : { menu.menuPrice }</h3>
//                 <h4>종류 : { menu.categoryName }</h4>
//             </div>
//         </Link>
//     );
// }

export default MenuItem;

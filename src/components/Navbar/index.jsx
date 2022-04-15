// import React from 'react'
// import { Link } from "react-router-dom";
// import Education from '../Education';

// function Navbar() {
//     return (
//         <nav id="navbar-animmenu">
//             <ul class="show-dropdown main-navbar">
//                 <div className='mainpos'>
//                     <li>
//                         {/* <a href=" "><i class="fas fa-tachometer-alt"></i>Anasayfa</a> */}
//                         <Link to='/'>Anasayfa</Link>
//                     </li>
//                 </div>
//                 <div className='position'>
//                     <li>
//                         {/* <a href=" "><i class="far fa-address-book"></i>Eğitim İşlemleri</a> */}
//                         <Link exact to='/education' component={Education}>Eğitim İşlemleri</Link>
//                     </li>
//                     <li>
//                         {/* <a href=" "><i class="far fa-clone"></i>Bilet İşlemleri</a> */}
//                         <Link to='/ticket'>Bilet İşlemleri</Link>
//                     </li>
//                     <li>
//                         {/* <a href=" "><i class="far fa-calendar-alt"></i>Kiralama İşlemleri</a> */}
//                         <Link to='/rent'>Kiralama İşlemleri</Link>
//                     </li>
//                     <li>
//                         {/* <a href=" "><i class="far fa-chart-bar"></i>Hava Durumu</a> */}
//                         <Link to='/weather'>Hava Durumu</Link>
//                     </li>
//                     <li>
//                         {/* <a href=" "><i class="far fa-chart-bar"></i>Konaklama Bilgileri</a> */}
//                         <Link to='/stopover'>Konaklama İşlemleri</Link>
//                     </li>
//                 </div>
//             </ul>
//         </nav>
//     )
// }

// export default Navbar
import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand">
            <Link to='/' className="navbar-brand">Ana Sayfa</Link>
            <div className="collpase navbar-collpase" >
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to='/stopover' className="nav-link">Konaklama İşlemleri</Link>
                    </li>
                    <li className="navbar-item" >
                        <Link to='/education' className="nav-link">Eğitim Bilgileri</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to='/ticket' className="nav-link">Bilet İşlemleri</Link>
                    </li>
                    <li className="navbar-item" >
                        <Link to='/weather' className="nav-link">Hava Durumu</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
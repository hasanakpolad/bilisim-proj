import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand">
            <Link to='/' className="navbar-brand">Ana Sayfa</Link>
            <div className="collpase navbar-collpase" >
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item" >
                        <Link to='/rent' className="nav-link">Kiralama İşlemleri</Link>
                    </li>
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
                    <li className="navbar-item" >
                        <Link to='/user' className="nav-link">Kullanıcı İşlemleri</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
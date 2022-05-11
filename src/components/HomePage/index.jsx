import React from 'react'
import { Link } from 'react-router-dom'
import Education from '../Fragments/Education'
import Ticket from '../Fragments/Ticket'
import Stopover from '../Fragments/Stopover'
import Rent from '../Fragments/Rent'
import User from '../Fragments/User'
import './style.css'

function HomePage() {
    const Edudata = [{
        text: "Düştüysek kalkarız daha ölmedik ya!"
    }]
    const RentData = [{
        text: "Kiralık eşyalar burada!"
    }]
    const Ticketdata = [{
        text: "Bilet işlemleri artık daha kolay!"
    }]
    const Stepdata = [{
        text: "Evden uzakta kalmak ancak bu kadar eğlenceli olabilir!"
    }]
    const UserData = [{
        text: "Üye olup tüm bu imkanlardan faydalanabilirsin!"
    }]
    return (
        <div className='itemList'>
            <Link className='link' to='/rent'>
                <div className='gridList'>
                    <div className='innerGridList'>
                        <h1>Kiralama İşlemleri</h1>
                        <br /><br /><br />
                        <div>
                            <Rent item={RentData} />
                        </div>
                    </div>
                </div>
            </Link>
            <Link className='link' to='/education'>
                <div className='gridList'>
                    <div className='innerGridList'>
                        <h1>Eğitim İşlemleri</h1>
                        <br /><br /><br />
                        <div>
                            <Education item={Edudata} />
                        </div>
                    </div>
                </div>
            </Link>
            <Link className='link' to='/Ticket'>
                <div className='gridList'>
                    <div className='innerGridList'>
                        <h1>Bilet İşlemleri</h1>
                        <br /><br /><br />
                        <div>
                            <Ticket item={Ticketdata} />
                        </div>
                    </div>
                </div>
            </Link>
            <Link className='link' to='/stopover'>
                <div className='gridList'>
                    <div className='innerGridList'>
                        <h1>Konaklama İşlemleri</h1>
                        <br /><br /><br />
                        <div>
                            <Stopover item={Stepdata} />
                        </div>
                    </div>
                </div>
            </Link>
            <Link className='link' to='/user'>
                <div className='gridList'>
                    <div className='innerGridList'>
                        <h1>Kullanıcı İşlemleri</h1>
                        <br /><br /><br />
                        <div>
                            <User item={UserData} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default HomePage
import React from 'react'
import './style.css'
import Education from '../Fragments/Education'
import Ticket from '../Fragments/Ticket'
import { Link } from 'react-router-dom'

function HomePage() {
    const Edudata = [{
        text: "textData1"
    },
    {
        text: "textData2"
    },
    {
        text: "textData3"
    }, {
        text: "textData4"
    }]
    const Ticketdata = [{
        text: "textData1"
    },
    {
        text: "textData2"
    },
    {
        text: "textData3"
    }, {
        text: "textData4"
    }]
    const Stepdata = [{
        text: "Konaklama"
    },
    {
        text: "[Kayak merkezi adı] Kayak Merkezimiz [Yıl]'ından itibaren hizmet" +
            "vermektedir.Misafirlerimize sunmuş olduğu imkanlar ile en çok tercih" +
            "edilen kayak merkezleri arasındadır." +
            " Bünyesinde sahip olduğu [pist sayısı] adet pist ile misafirlerine hizmet" +
            " vermektedir." +
            "  Kayak keyfini daha fazla yaşamak isteyen misafirlerimiz için[otel" +
            "  sayısı] adet otel ve pansiyon ile hizmeti verilmektedir." +
            "  Sahip olduğu deneyimli kadrosu ile kayak öğrenmek isteyen misafirlerimiz" +
            " rahatça kayak keyfini öğrenek sürecek.< br > " +
            " Daha fazla bilgi için ilgili sayfalarda mevcuttur İyi Eğlenceler dileriz."
    }]
    return (
        <div className='itemList'>
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
            <Link className='link' to='/Ticket'>
                <div className='gridList'>
                    <div className='innerGridList'>
                        <h1>Konaklama İşlemleri</h1>
                        <br /><br /><br />
                        <div>
                            <Ticket item={Stepdata} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default HomePage
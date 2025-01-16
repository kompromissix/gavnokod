import './Make.scss'
import img from './img/IMAGE2.png'
import img2 from './img/IMAGE.png'
import img3 from './img/IMAGE3.png'

export default function Make(){
    return(
        <>
            <section>
                <div>
                    <div>
                        <p>Making</p>
                        <p>tables</p>
                        <p>heroes</p>
                    </div>
                    <div>
                        <p>Chairs, cabinets, but especially tables by Joli are durable products, designed to last and to be used intensively.</p>
                    </div>
                    <div>
                        <button type="button">
                            <p>About us</p>
                        </button>
                        <p>Collections</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
import './Make.scss'
import img from './img/IMAGE1.png'
import img2 from './img/IMAGE.png'
import img3 from './img/IMAGE3.png'

export default function Make(){
    return(
        <>
            <section className='background1'>
                <div className='left_pizdec_absolut'>
                    <div>
                        <h2>making</h2>
                        <h2>tables</h2>
                        <h2>heroes</h2>
                    </div>
                    <div>
                        <p>Chairs, cabinets, but especially tables by Joli are durable products, designed to last and to be used intensively.</p>
                    </div>
                    <div className='left_pizdec_absolut_button'>
                        <button type="button">
                            <p>about us</p>
                        </button>
                        <p>collections</p>
                    </div>
                </div>
                <div className='right_pizdec_absolut'>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className='right_pizdec_absolut_bottom'>
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
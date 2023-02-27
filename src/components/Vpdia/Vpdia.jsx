import './Vpdia.css'

export default function Vpdia(props) {
    return (
        <div className='main-vpdia'>
            <div className='status'>
                <h2>Vendas por dia da semana</h2>
                <div>
                    <svg height="20" width="20">
                        <polygon points='0,15 15,15 7,0' fill="#28C76F" />
                    </svg>
                    <p>Dia com mais vendas</p>  
                </div>
                <p className='result'>quarta-feira</p>
                <div>
                    <svg height="20" width="20">
                        <polygon points='0,0 15,0 7,15' fill="#EA5455" />
                    </svg>
                    <p>Dia com menos vendas</p>
                </div>
                <p className='result'>domingo</p>
            </div>

            <div className='graphics'>
                <div className='meta'></div>
                <div>
                    <div className='pilar' style={{height: '45px'}}></div>
                    <p>dom</p>
                </div>

                <div>
                    <div className='pilar' style={{height: '100px'}}></div>
                    <p>seg</p>
                </div>

                <div>
                    <div className='pilar' style={{height: '60px'}}></div>
                    <p>ter</p>
                </div>

                <div>
                    <div className='pilar' style={{height: '130px'}}></div>
                    <p>qua</p>
                </div>

                <div>
                    <div className='pilar' style={{height: '110px'}}></div>
                    <p>qui</p>
                </div>

                <div>
                    <div className='pilar' style={{height: '105px'}}></div>
                    <p>sex</p>
                </div>

                <div>
                    <div className='pilar' style={{height: '55px'}}></div>
                    <p>sab</p>
                </div>
                
            </div>
        </div>
    )
}
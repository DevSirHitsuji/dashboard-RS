import "./Csells.css"

export default function Csells(props) {
    let percent = (parseFloat(props.advanced)*100)/parseFloat(props.expected)

    return ( 
        <div className='screenClose'>
            <h2>Vendas Fechadas</h2>
            <div className="statisticRadial flex-center">
                <div className="radial flex-center" style={{background: 'conic-gradient(#CE9FFC 0%, #7367F0 , #CE9FFC ' + percent + '%, rgb(69, 61, 105) 0%)'}}>
                    <div className="center flex-center">
                        <p>{percent} % Alcançado</p>
                    </div>
                </div>
            </div>
            
            <div className="stats">
                <div>
                    <svg height="20" width="20">
                        <circle cx="10" cy="10" r="7" fill="#7777" />
                    </svg>
                    <p>Esperado: {props.expected}</p>
                </div>
                <div>
                    <svg height="20" width="20">
                        <circle cx="10" cy="10" r="7" fill="#7367F0" />
                    </svg>
                    <p>Avançado: {props.advanced}</p>
                </div>
            </div>
        </div>
    )
}
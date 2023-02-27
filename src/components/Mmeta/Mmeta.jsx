import './Mmeta.css'

export default function Mmeta(props) {
    let percent = (parseFloat(props.advanced)*100)/parseFloat(props.expected)
    
    return (
        <div className='screenMeta'>
            <h2>Metas mensal</h2>
            <div className="statisticRadial flex-center">
                <div className="radial flex-center" style={{background: 'conic-gradient(#DF9780 0%, #A66DE9, #DF9780 ' + percent + '%, rgb(69, 61, 105) 0%)'}}>
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
                        <circle cx="10" cy="10" r="7" fill="#DF9780" />
                    </svg>
                    <p>Avançado: {props.advanced}</p>
                </div>
            </div>
        </div>
    )
}
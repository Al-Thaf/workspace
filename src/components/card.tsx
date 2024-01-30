import './styles.css'
import { CardProps } from './types'

function Card({ content, onClick }: CardProps) {
    return (
        <div className='card' onClick={onClick}>
            <div className='logo'>

            </div>
            <div className='content'>
                {content}
            </div>

        </div>
    )
}

export default Card
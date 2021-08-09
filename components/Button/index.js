import s from './Dashboard.module.sass'
import clsx from 'clsx'


export const Button = ({children, disabled, color, onClick, className}) => {
    
    return (
        <button
        onClick={onClick}
        type='button'
        className={clsx(className, s.button)}>
            {children}
        </button>
    )
}

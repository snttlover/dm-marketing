import s from './MainBlock.module.sass'
import {Box} from '@material-ui/core'

export const MainBlock = ({children, title}) => {
    return (
        <Box className={s.box} >
            <h6 className={s.title}>
                {title}
            </h6>
            {children}
        </Box>
    )
}

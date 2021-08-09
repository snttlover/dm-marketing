import s from './Dashboard.module.sass'
import { Box } from '@material-ui/core'
import { Button } from '../Button'
import { MainBlock } from '../MainBlock'

export const Dashboard = () => {
    return (
        <Box className={s.dashboard}>
            <Box className={s.col}>
                <MainBlock title='Мой баланс'>

                </MainBlock>

                <MainBlock title='Динамика портфеля'>

                </MainBlock>
            </Box>
            <Box className={s.col}>

                <MainBlock title='Курсы активов'>

                </MainBlock>
            </Box>
        </Box>
    )
}

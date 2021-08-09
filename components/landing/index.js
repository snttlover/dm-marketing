import s from './Landing.module.sass'
import {Box} from '@material-ui/core'
import { Button } from '../Button'

export const Landing = () => {
    return (
        <div>
            <Box>
                Мой баланс
            </Box>
            <Box>
                Динамика портфеля
            </Box>
            <Box>
                Курсы активов
            </Box>
            <Button>
                Button
            </Button>
        </div>
    )
}

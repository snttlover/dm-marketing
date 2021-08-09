
import { useRouter } from 'next/router';
import { MainLayout } from './../../components/MainLayout/index';
import { MainBlock } from '../../components/MainBlock';
import ReactPlayer from 'react-player'
import s from '../../styles/events.module.sass'
import VisibilityIcon from '@material-ui/icons/Visibility';

export default function Event(props) {
    const router = useRouter()
    const { id } = router.query
    console.log(id);

    return (
        <MainLayout title='Events'>
            <MainBlock title={'Обзор портфеля'}>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    light={false}
                    width={'100%'}
                    height={'540px'}
                    controls={true}
                />
                <div className={s.subGrid}>
                    <div className={s.desc}>
                        {`Вы поймёте, кто такой верстальщик, какие знания ему нужны и чем он отличается от frontend-разработчика. Расскажем, какие перспективы ждут верстальщиков в 2021 году.
Техническая информация:

- Длительность: 1-1,5 часа;
- Вебинар проводится на YouTube. Дополнительное ПО не требуется;
- Запись появится на следующий день;
- На вебинаре можно и нужно задавать вопросы`}
                    </div>
                    <div className={s.properties}>
                        <div> <VisibilityIcon className={s.icon}/>126 просмотров</div>
                        <div>Ведущий: Дмитрий Потапов</div>

                    </div>
                </div>
                {/* <div className={s.recommends}>
                    <div className={s.recommendTitle}>
                        Рекомендуем
                    </div>
                </div> */}
            </MainBlock>
        </MainLayout>
    )
}
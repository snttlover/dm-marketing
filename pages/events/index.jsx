
import { MainBlock } from '../../components/MainBlock'
import { MainLayout } from '../../components/MainLayout'
import s from '../../styles/events.module.sass'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import { Button } from '../../components/Button/index';
import thumbnail from './../../assets/thumbnails/image 1.png'
import Link from 'next/link';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ReactPlayer from 'react-player';
import { useState } from 'react';

const Events = props => {
  const comingElements = [
    {
      id: Math.random(),
      title: 'Обзор портфеля',
      views: 120,
      description: 'обзор портфеля 2021',
      date: '' + new Date(),
      leading: 'Дмитрий Потапов',
      image: thumbnail,

    },
    {
      id: Math.random(),
      title: 'Обзор портфеля',
      views: 120,
      description: 'обзор портфеля 2021',
      date: '' + new Date(),
      leading: 'Дмитрий Потапов',
      image: thumbnail,

    },
    {
      id: Math.random(),
      title: 'Обзор портфеля',
      views: 120,
      description: 'обзор портфеля 2021',
      date: '' + new Date(),
      leading: 'Дмитрий Потапов',
      image: thumbnail,

    },
    {
      id: Math.random(),
      title: 'Обзор портфеля',
      views: 120,
      description: 'обзор портфеля 2021',
      date: '' + new Date(),
      leading: 'Дмитрий Потапов',
      image: thumbnail,

    },
    {
      id: Math.random(),
      title: 'Обзор портфеля',
      views: 120,
      description: 'обзор портфеля 2021',
      date: '' + new Date(),
      leading: 'Дмитрий Потапов',
      image: thumbnail,

    },
    {
      id: Math.random(),
      title: 'Обзор портфеля',
      views: 120,
      description: 'обзор портфеля 2021',
      date: '' + new Date(),
      leading: 'Дмитрий Потапов',
      image: thumbnail,

    },
    {
      id: Math.random(),
      title: 'Обзор портфеля',
      views: 120,
      description: 'обзор портфеля 2021',
      date: '' + new Date(),
      leading: 'Дмитрий Потапов',
      image: thumbnail,

    },
    {
      id: Math.random(),
      title: 'Обзор портфеля',
      views: 120,
      description: 'обзор портфеля 2021',
      date: '' + new Date(),
      leading: 'Дмитрий Потапов',
      image: thumbnail,

    },
    {
      id: Math.random(),
      title: 'Обзор портфеля',
      views: 120,
      description: 'обзор портфеля 2021',
      date: '' + new Date(),
      leading: 'Дмитрий Потапов',
      image: thumbnail,

    },
  ]
  const pastElements = []
  const [isActive, setActive] = useState(true)
  return (
    <MainLayout title='Events'>
      <MainBlock title='Вебинары'>
        <div className={s.select}>
          <div className={`${s.select_element} ${isActive?s.activeWeb:''}`} onClick={()=> setActive(true)}>
            <span>Предстоящие</span>
            <span>
              <FiberManualRecordIcon style={{ width: 12 }} />
            </span>
            <span>{comingElements.length}</span>
          </div>
          <div className={`${s.select_element} ${!isActive?s.activeWeb:''}`} onClick={()=> setActive(false)}>
            <span>Прошедшие</span>
            <span>
              <FiberManualRecordIcon style={{ width: 12 }} />
            </span>
            <span>{pastElements.length}</span>

          </div>
        </div>
        <div className={s.videoGrid}>
          {comingElements.map((item, index) => {
            let now = new Date(item.date)
            let days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
            let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноябрья', 'декабрья'];
            let week = days[now.getDay()];
            let month = months[now.getMonth()];
            let hours = parseInt(now.getHours())>9?now.getHours():'0'+now.getHours()
            let minutes=parseInt(now.getMinutes())>9?now.getMinutes():'0'+now.getMinutes()
            let fullDate = `${week} ${now.getDate()} ${month} ${hours}:${minutes} МСК`
            let thumbStyle = {
              borderRadius: 3

            }
            return (
              <Link href={`events/${item.id}`} key={item.id}>
                <a className={index === 0 ? s.mainVideo : s.smallVideo}>
                  <div style={{display: 'block', position: 'relative'}}>
                    <div style={{width: '100%', height: '100%', zIndex: '999', position: 'absolute'}} className={s.thumbHover}></div>
                    <ReactPlayer
                      className={s.video}
                      url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                      light={true}
                      controls
                      playing={false}
                      width={'100%'}
                      height={index === 0 ? 165 : '100%'}
                      style={thumbStyle}
                      playIcon={<></>}


                    />
                  </div>

                  <div className={index === 0 ? '' : s.column}>
                    <div className={s.date}>{fullDate}</div>
                    <div className={s.title}>{item.title}</div>
                    <div className={s.leading}>{item.leading}</div>
                    <div className={s.views}>
                      <VisibilityIcon className={s.icon} />
                      {item.views}
                    </div>
                  </div>
                </a>
              </Link>
            )
          })}

        </div>
        <div className={s.footer}>
          <Button>ЕЩЁ</Button>
        </div>
      </MainBlock>
    </MainLayout>
  )
}




export default Events

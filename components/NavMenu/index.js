import s from './NavMenu.module.sass'
import { Box, Drawer, List, ListItemIcon, ListItemText } from '@material-ui/core'
import Link from 'next/link'
import russian from '../../assets/russian.png'
import logo from '../../assets/logo.svg'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import IndeterminateCheckBoxRoundedIcon from '@material-ui/icons/IndeterminateCheckBoxRounded';
import WatchLaterRoundedIcon from '@material-ui/icons/WatchLaterRounded';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SettingsIcon from '@material-ui/icons/Settings';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useState } from 'react'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core/styles';
export const NavMenu = ({ children }) => {
    const router = useRouter()
    const [isNotification, setNotification] = useState(false)
    const [isLanguage, setLanguage] = useState(null);
    const changeLanguage = (event) => {
        setLanguage(event.currentTarget);
    };
    const StyledMenu = withStyles({
        paper: {
          background: '#192030',
        },
      })(Menu)
    return (
        <Box className={s.navMenu} >
            <Box
                className={s.drawer}>
                <Box className={s.logo}>
                    {/* <img src={logo}/> */}
                    <img src={logo} style={{ height: 70, width: 100 }} />

                </Box>
                <Box className={s.linkList}>
                    <Link href='/' >
                        <a className={`${s.link} ${router.pathname == "/" ? s.active : ""}`}>
                            <HomeRoundedIcon></HomeRoundedIcon>
                            <span>Главная</span>

                        </a>

                    </Link>
                    <Link href='/events' >
                        <a className={`${s.link} ${router.route.split('/').includes('events') ? s.active : ""}`}>
                            <VideoLibraryIcon></VideoLibraryIcon>
                            <span>Вебинары</span>

                        </a>

                    </Link>
                    <Link href='/deposit' >
                        <a className={`${s.link} ${router.route.split('/').includes('deposit') ? s.active : ""}`}>
                            <AddCircleRoundedIcon></AddCircleRoundedIcon>
                            <span>Пополнить</span>

                        </a>

                    </Link>
                    <Link href='/withdraw'>
                        <a className={`${s.link} ${router.route.split('/').includes('withdraw') ? s.active : ""}`}>
                            <IndeterminateCheckBoxRoundedIcon></IndeterminateCheckBoxRoundedIcon>
                            <span>Вывести</span>

                        </a>

                    </Link>
                    <Link href='/history' >
                        <a className={`${s.link} ${router.route.split('/').includes('history') ? s.active : ""}`}>
                            <WatchLaterRoundedIcon></WatchLaterRoundedIcon>
                            <span>История</span>

                        </a>

                    </Link>
                    <Link href='/settings' >
                        <a className={`${s.link} ${router.route.split('/').includes('settings') ? s.active : ""}`}>
                            <SettingsIcon></SettingsIcon>
                            <span>Настройки</span>

                        </a>

                    </Link>
                </Box>


            </Box>
            <Box className={s.main}>
                <Box className={s.header}>
                    <Box className={s.col}>
                        <a className={s.headerLink}>Поддержка</a>
                        <a className={s.headerLink}>FAQ</a>

                    </Box>
                    <Box className={s.col}>
                        <div>
                            <a className={s.headerActive} onClick={changeLanguage}>
                                <img src={russian} style={{ height: 20, width: 20 }} />
                                <i className="fas fa-caret-down"></i>
                            </a>
                            <StyledMenu
                                id="simple-menu"
                                anchorEl={isLanguage}
                                keepMounted
                                open={Boolean(isLanguage)}
                                onClose={() => setLanguage(null)}
                                TransitionComponent={Fade}
                            >
                                <div className={s.dropDownElement} onClick={() => setLanguage(null)}>
                                    <img src={russian} style={{ height: 20, width: 20 }}/>
                                    Russian
                                </div>
                                
                            </StyledMenu>
                        </div>

                        <a className={s.headerActive} onClick={() => setNotification(true)}>
                            <i className="fas fa-bell"></i>
                        </a>

                        <a className={s.headerActive}>
                            <i className="fas fa-user"></i>
                            Profile
                        </a>

                    </Box>
                </Box>
                <main>
                    {children}

                </main>
            </Box>
            <Drawer anchor={'right'} open={isNotification} onClose={() => setNotification(false)}>
                <div className={s.drawer}>
                    <div className={s.drawerTitle}>Уведомления</div>
                    Уведомлений пока нет
                </div>
            </Drawer>
        </Box>
    )
}

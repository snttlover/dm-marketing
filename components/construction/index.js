import { Button } from './../Button/index'
import Link from 'next/link'

export const Construction = props => {
  return (
    <div className='home'>
      <h1>Добро пожаловать!</h1>
      <h3>Эта страница находится в разработке!</h3>
      <Link href='/events'>
        <a>
          <Button>Перейти к вебинарам</Button>
        </a>
      </Link>
      <style jsx>
        {`
          .home {
            color: white;
          }
        `}
      </style>
    </div>
  )
}

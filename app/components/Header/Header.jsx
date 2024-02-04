import Styles from './Header.module.css'

export const Header = () => {
    return (
      <header className={Styles['header']}>
        <a href="./index.html" className={Styles['logo']}>
          <img
            className={Styles['logo__image']}
            src="./images/logo.svg"
            alt="Логотип Pindie"
          />
        </a>
        <nav className={Styles['menu']}>
          <ul className={Styles['menu__list']}>
            <li className={Styles['menu__item']}>
              <a href="" className={Styles['menu__link']}>
                Начать
              </a>
            </li>
            <li className={Styles['menu__item']}>
              <a href="" className={Styles['menu__link']}>
                Сохраненые
              </a>
            </li>
            <li className={Styles['menu__item']}>
              <a href="" className={Styles['menu__link']}>
                ######
              </a>
            </li>
          </ul>
          <div className={Styles['auth']}>
            <button className={Styles['auth__button']}>Войти</button>
          </div>
        </nav>
      </header>
    )
  }
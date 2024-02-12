import { useState, useEffect, useRef } from 'react';
import { Box, Container, Grid, Hidden, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import Link from 'next/link';

import MobileMenu from './MobileMenu';
import styles from './Navigation.module.scss';
import SearchMenu from './SearchMenu';

export default function Navigation(props: any) {
  const { noWhiteBackground } = props;

  console.log(noWhiteBackground);

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchMenuOpen, setSearchMenuOpen] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [scale, setScale] = useState(0);

  const [offsetXSearch, setOffsetXSearch] = useState(0);
  const [offsetYSearch, setOffsetYSearch] = useState(0);
  const [scaleSearch, setScaleSearch] = useState(0);
  //@ts-ignore
  const elem = useRef(null);
  const elemSearch = useRef(null);

  const calculateValues = () => {
    //@ts-ignore
    if (elem === null) return;
    console.log(elem);

    //@ts-ignore
    const elemH = elem?.current.getBoundingClientRect().height || 0,
      //@ts-ignore
      elemW = elem.current.getBoundingClientRect().width || 0;

    //@ts-ignore
    const elemSearchH = elemSearch?.current.getBoundingClientRect().height || 0,
      //@ts-ignore
      elemSearchW = elemSearch.current.getBoundingClientRect().width || 0;

    const w = window.innerWidth;
    const h = window.innerHeight;
    //const offsetValue = Number(cssStyles.getPropertyValue('--offset-value'));
    const offsetValue = Number(
      //@ts-ignore

      getComputedStyle(elem.current).getPropertyValue('--offset-value')
    );

    const offsetValueSearch = Number(
      //@ts-ignore

      getComputedStyle(elem.current).getPropertyValue('--offset-value')
    );

    setOffsetX(w / 2 - elemW / 2 - offsetValue);
    setOffsetY(h / 2 - elemH / 2 - offsetValue);

    setOffsetXSearch(w / 2 - elemSearchW / 2 - offsetValueSearch);
    setOffsetYSearch(h / 2 - elemSearchH / 2 - offsetValueSearch);

    const radius = Math.sqrt(h ** 2 + w ** 2);

    setScale(radius / (elemW / 2) / 2 + 0.1);
    setScaleSearch(radius / (elemSearchW / 2) / 2 + 0.1);

    // return scale;
  };

  const resizeHandler = () => {
    window.requestAnimationFrame(() => {
      calculateValues();
    });
  };

  const openMenu = (type: string) => {
    console.log('open');
    console.log(elem);

    if (type === 'nav-menu') {
      //@ts-ignore
      elem.current.style.setProperty('--translate-x', `${offsetX}px`);
      //@ts-ignore
      elem.current.style.setProperty('--translate-y', `${offsetY}px`);
      //@ts-ignore
      elem.current.style.setProperty('--scale', scale);

      setMenuOpen(true);
      setSearchMenuOpen(false);
    } else {
      //@ts-ignore
      elemSearch.current.style.setProperty(
        '--translate-x',
        `${-offsetXSearch}px`
      );
      //@ts-ignore
      elemSearch.current.style.setProperty(
        '--translate-y',
        `${offsetYSearch}px`
      );
      //@ts-ignore
      elemSearch.current.style.setProperty('--scale', scaleSearch);

      setMenuOpen(false);
      setSearchMenuOpen(true);
    }
    //@ts-ignore
    // elem.current.style.setProperty('opacity', scale);
  };

  const closeMenu = (type: string) => {
    console.log('close');
    // console.log(elem);
    if (type === 'nav-menu') {
      //@ts-ignore
      elem.current.style.setProperty('--scale', 1);
      //@ts-ignore
      elem.current.style.setProperty('--translate-x', 0);
      //@ts-ignore
      elem.current.style.setProperty('--translate-y', 0);

      setMenuOpen(false);
    } else {
      // console.log(elem);
      //@ts-ignore
      elemSearch.current.style.setProperty('--scale', 1);
      //@ts-ignore
      elemSearch.current.style.setProperty('--translate-x', 0);
      //@ts-ignore
      elemSearch.current.style.setProperty('--translate-y', 0);

      setSearchMenuOpen(false);
    }
    //@ts-ignore
    // elem.style.setProperty('opacity', 0);
  };

  const animateMenu = (type: string = 'nav-menu') => {
    if (type === 'nav-menu') {
      !menuOpen ? openMenu(type) : closeMenu(type);
    } else {
      !searchMenuOpen ? openMenu(type) : closeMenu(type);
    }

    if (type === 'nav-menu') {
      document.body.classList.toggle('js-nav-menu-open');
    } else {
      document.body.classList.toggle('js-search-menu-open');
    }
    //@ts-ignore
    // toggleBtn?.current.classList.toggle('shown');
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler, false);
    calculateValues();
  }, []);

  return (
    <div>
      {/*  ${menuOpen ? styles.navigationNoWhiteBackground : null} */}
      <nav
        className={`${styles.navigation} ${
          menuOpen ? 'js-navigation-open' : ''
        }`}
      >
        <Box
          className={`
            ${styles.navigationLeft} 
            ${
              noWhiteBackground ? styles.navigationLeftNonWhiteBackground : null
            },
          `}
        >
          <span
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => animateMenu('nav-menu')}
          >
            <IconButton size="large">
              {menuOpen ? (
                <MenuOpenIcon />
              ) : (
                <MenuIcon
                  style={{ color: noWhiteBackground ? '#fff' : 'inherit' }}
                />
              )}
            </IconButton>
            <Hidden mdDown>
              <span className={`${styles.hiddenIconText} white-menu-text`}>
                Menu
              </span>
            </Hidden>
          </span>

          <Hidden mdUp>
            {menuOpen || noWhiteBackground ? (
              <Link href="/">
                <img className={styles.logo} src="/images/Logo (White).svg" />
              </Link>
            ) : (
              <Link href="/">
                <img className={styles.logo} src="/images/Logo (Black).svg" />
              </Link>
            )}
          </Hidden>
        </Box>

        <Hidden mdDown>
          <Box className={styles.navigationCenter}>
            <Link href="/">
              {menuOpen || noWhiteBackground ? (
                <img
                  className={styles.logoCenter}
                  src="/images/Logo (White).svg"
                />
              ) : (
                <img
                  className={styles.logoCenter}
                  src="/images/Logo (Black).svg"
                />
              )}
            </Link>
          </Box>
        </Hidden>

        <Box className={styles.navigationRight}>
          <Link href="tel:6138297874;236">
            <span className={styles.advisorLink}>
              <LocalPhoneIcon />
              <span className="white-menu-text">Talk to an advisor</span>
            </span>
          </Link>

          {/* <IconButton onClick={() => animateMenu('search-menu')} size="large">
            <SearchIcon />
          </IconButton>

          <div>
            <IconButton size="large">
              <AccountCircleIcon />
            </IconButton>
            <Hidden mdDown>
              <span className={styles.hiddenIconText}>Account</span>
            </Hidden>
          </div> */}
        </Box>
      </nav>

      <div className="nav-bg btn" ref={elem}></div>

      <div className="nav-bg-search btn-search" ref={elemSearch}></div>

      <MobileMenu open={menuOpen} />

      <SearchMenu open={searchMenuOpen} />
    </div>
  );
}

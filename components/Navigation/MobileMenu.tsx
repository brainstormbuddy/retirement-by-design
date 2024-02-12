import Link from 'next/link';
import styles from './MobileMenu.module.scss';

export default function MobileMenu(props: any) {
  return (
    <div
      className={`${styles.mobileMenuContainer} mobileMenuContainer ${
        props.open ? 'mobileMenuOpen' : ''
      }`}
    >
      <p className={styles.mobileMenuSectionHeading}>Resources</p>

      <div className={styles.mobileMenuSectionLinks}>
        {/* <Link href="/articles">Articles</Link> */}
        <Link href="/workshops">Workshops</Link>
        <Link href="/podcast">Podcast</Link>
        <Link href="/books/the-pursuit-of-retirement">Book</Link>
      </div>

      <div className="mt-4"></div>

      <p className={styles.mobileMenuSectionHeading}>Company</p>

      <div
        className={`${styles.mobileMenuSectionLinks} ${styles.mobileMenuSectionLinksSmall}`}
      >
        <div>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>

          {/* <Link href="/our-team">Our team</Link> */}
        </div>
        {/* <div>
           <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div> */}
      </div>
    </div>
  );
}

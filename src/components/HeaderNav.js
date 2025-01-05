import styles from "./Nav.module.css"

function HeaderNav() {
  return (
    <nav className={styles.nav}>
      <h3 className="">The Venture Agency.</h3>
      <h4 className={styles.menu}>Menu</h4>
    </nav>
  );
}

export default HeaderNav;

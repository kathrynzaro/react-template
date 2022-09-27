import { Outlet, Link } from 'react-router-dom';
import styles from './Layout.css';

export default function Layout() {
  return (
    <div className={styles.Layout}>
      <header>
        <nav>
          <Link to="">Home</Link>
          <Link to="pizza">Pizza</Link>
          <Link to="cats">Cats</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

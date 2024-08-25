import Link from "next/link";
import styles from "./styles.module.scss"

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.Header__list} >
          <li>
            <Link href="/">
              Home
            </Link>
          </li>

          <li>
            <Link href="/store">
              Store
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};
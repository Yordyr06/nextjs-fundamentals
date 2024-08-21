"use client"
import Link from "next/link";

export const Header = () => {
  console.log("Header");

  return (
    <header>
      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>

          <Link href="/store">
            <li>Store</li>
          </Link>
          
          <Link href="/category">
            <li>Category</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
};
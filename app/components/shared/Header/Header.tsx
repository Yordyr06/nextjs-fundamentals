"use client"
import Link from "next/link";
import { FC } from "react";

export default function Header() {
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
          
          <Link href="/store/categories">
            <li>Categories</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
};
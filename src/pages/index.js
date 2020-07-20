import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <h1>Hey Jamila</h1>
      <p>I love you</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}
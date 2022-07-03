import React from "react"

const Layout = ({ location, children }) => {

  return (
    <div>
      <header>Header</header>

      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  )
}

export default Layout

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="min-h-[80vh] text-text-primary">{children}</main>
      <Footer />
    </div>
  )
}

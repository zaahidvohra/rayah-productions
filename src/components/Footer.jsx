import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-6 text-center text-sm text-text-body font-body">
      <p>&copy; {new Date().getFullYear()} Rayah Productions. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="https://instagram.com/moin_2896" target="_blank" rel="noreferrer" className="hover:text-primary">Instagram</a>
        <a href="https://www.linkedin.com/in/moin-vahora-2ba727120" target="_blank" rel="noreferrer" className="hover:text-primary">LinkedIn</a>
        <a href="https://www.youtube.com/channel/UCkWn6vJ34Cs05YyYaU_CAaA" target="_blank" rel="noreferrer" className="hover:text-primary">YouTube</a>
      </div>
    </footer>
  )
}

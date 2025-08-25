import './globals.css'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import MobileSidebar from '@/components/MobileSidebar'

export const metadata = {
  title: 'Furniq Furniture Admin',
  description: 'Admin panel for Furniq Furniture',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <div className="flex">
          <Sidebar />
          <MobileSidebar />
          <div className="flex flex-col flex-1 min-h-screen">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto pt-16 md:pt-0">
              <div className="p-4 md:p-6">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
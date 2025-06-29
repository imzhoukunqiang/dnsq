import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header fixed={true} />
      <main className="flex-1 mx-auto max-w-7xl p-4 w-full mt-0">
        <Outlet />
      </main>
      <Footer fixed={false}/>
    </div>
  )
}

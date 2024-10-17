import Sidebar from '@/components/Sidebar'

function DashboardLayout({ children }) {
  return (
    <main className="flex items-start">
      <div className="hidden md:flex min-w-[250px]">
        <Sidebar />
      </div>
      
      { children }
    </main>
  )
}
export default DashboardLayout

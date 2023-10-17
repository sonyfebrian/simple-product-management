import { UserNav } from "@/components/UserNav"

import ProductCard from "@/components/ProductCard"


const Dashboard = () => {
  return (
    <>
      <div className="hidden border-b h-full flex-1 flex-col space-y-8 p-4 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your product !
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
      </div>

      <ProductCard />
    </>
  )
}

export default Dashboard
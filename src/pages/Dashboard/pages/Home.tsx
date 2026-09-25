
import DemographicCard from "../../../features/dashboard/ui/ecommerce/DemographicCard";
import EcommerceMetrics from "../../../features/dashboard/ui/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "../../../features/dashboard/ui/ecommerce/MonthlySalesChart";
import MonthlyTarget from "../../../features/dashboard/ui/ecommerce/MonthlyTarget";
import RecentOrders from "../../../features/dashboard/ui/ecommerce/RecentOrders";
import StatisticsChart from "../../../features/dashboard/ui/ecommerce/StatisticsChart";
import PageMeta from "../../../shared/ui/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | GreenAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for GreenAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />

          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>

        <div className="col-span-12">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}

import PageBreadcrumb from "../../../shared/ui/common/PageBreadCrumb";
import ComponentCard from "../../../shared/ui/common/ComponentCard";
import PageMeta from "../../../shared/ui/common/PageMeta";
import BasicTableOne from "../../../shared/ui/tables/BasicTables/BasicTableOne";


export default function BasicTables() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | GreenAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for GreenAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Basic Tables" />
      <div className="space-y-6">
        <ComponentCard title="Basic Table 1">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}

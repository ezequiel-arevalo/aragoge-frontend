import { useState } from 'react';
import { PlanningDetail } from "./components/PlanningDetail";
import CustomBreadcrumb from '@/components/breadcrumb/CustomBreadcrumb';

export const PlanningDetailPage = () => {
  const [planningTitle, setPlanningTitle] = useState('');

  const breadcrumbItems = [
    { to: "/marketplace", label: "Marketplace", isLink: true },
  ];

  return (
    <>
      <CustomBreadcrumb items={breadcrumbItems} currentTitle={planningTitle || "This Planning"} />

      <PlanningDetail setTitle={setPlanningTitle} />
    </>
  );
};
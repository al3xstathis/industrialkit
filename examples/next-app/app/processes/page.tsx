"use client";
import { Button, DataGrid, StatusIndicator } from "industrialkit";

export default function ProcessesPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Process Management</h1>
        <Button variant="primary">New Process</Button>
      </div>

      <DataGrid
        columns={[
          { key: "id", header: "PID", width: "100px" },
          { key: "name", header: "Process Name" },
          {
            key: "status",
            header: "Status",
            width: "120px",
            render: (value) => <StatusIndicator status={value} showLabel />,
          },
          { key: "cpu", header: "CPU Usage", width: "100px" },
          { key: "memory", header: "Memory", width: "100px" },
          { key: "started", header: "Started", width: "200px" },
        ]}
        data={[
          {
            id: "P1001",
            name: "Data Collection Service",
            status: "processing",
            cpu: "45%",
            memory: "128MB",
            started: "2024-01-15 08:00:00",
          },
          {
            id: "P1002",
            name: "Monitoring Agent",
            status: "success",
            cpu: "12%",
            memory: "64MB",
            started: "2024-01-15 08:00:00",
          },
          {
            id: "P1003",
            name: "Alert Handler",
            status: "warning",
            cpu: "78%",
            memory: "256MB",
            started: "2024-01-15 08:00:00",
          },
        ]}
        selectable
      />
    </div>
  );
}

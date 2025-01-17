// src/stories/DataGrid.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Badge } from "../components/primitive/badge";
import { DataGrid } from "../components/primitive/datagrid";

const meta: Meta<typeof DataGrid> = {
  title: "IndustryDB/DataGrid",
  component: DataGrid,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-4xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DataGrid>;

interface Product {
  id: string;
  name: string;
  category: string;
  status: string;
  stock: number;
  lastUpdated: string;
}

const sampleData: Product[] = [
  {
    id: "PRD001",
    name: "Industrial Polymer",
    category: "RAW",
    status: "IN_STOCK",
    stock: 1500,
    lastUpdated: "2025-01-14 15:30:22",
  },
  {
    id: "PRD002",
    name: "Carbon Fiber Mesh",
    category: "PRC",
    status: "LOW_STOCK",
    stock: 150,
    lastUpdated: "2025-01-14 14:22:15",
  },
  {
    id: "PRD003",
    name: "Aluminum Alloy",
    category: "RAW",
    status: "OUT_OF_STOCK",
    stock: 0,
    lastUpdated: "2025-01-14 12:15:30",
  },
  {
    id: "PRD004",
    name: "Thermal Coating",
    category: "FIN",
    status: "IN_STOCK",
    stock: 750,
    lastUpdated: "2025-01-14 11:45:12",
  },
];

const columns = [
  {
    key: "id",
    header: "ID",
    width: "100px",
    sortable: true,
  },
  {
    key: "name",
    header: "Name",
    minWidth: "200px",
    flex: 1,
    sortable: true,
  },
  {
    key: "category",
    header: "Category",
    width: "100px",
    sortable: true,
    render: (value: string) => <Badge variant="outline">{value}</Badge>,
  },
  {
    key: "status",
    header: "Status",
    width: "150px",
    sortable: true,
    render: (value: string) => {
      const statusColors = {
        IN_STOCK: "green",
        LOW_STOCK: "yellow",
        OUT_OF_STOCK: "red",
      } as const;

      return (
        <Badge
          color={statusColors[value as keyof typeof statusColors]}
          variant="solid"
        >
          {value}
        </Badge>
      );
    },
  },
  {
    key: "stock",
    header: "Stock",
    width: "100px",
    sortable: true,
  },
  {
    key: "lastUpdated",
    header: "Last Updated",
    width: "180px",
    sortable: true,
  },
];

export const Default: Story = {
  render: () => <DataGrid columns={columns} data={sampleData} />,
};

export const Selectable: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Product[]>([]);

    return (
      <div className="space-y-4">
        {selectedRows.length > 0 && (
          <div className="flex items-center gap-2 rounded border border-gray-200 bg-gray-50 p-2 font-mono text-sm">
            <span className="font-bold">Selected:</span>
            <span>{selectedRows.length} items</span>
          </div>
        )}
        <DataGrid
          columns={columns}
          data={sampleData}
          selectable
          onRowSelect={setSelectedRows}
        />
      </div>
    );
  },
};

export const Terminal: Story = {
  render: () => (
    <DataGrid
      columns={columns}
      data={sampleData}
      variant="terminal"
      selectable
    />
  ),
};

export const SingleSelect: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Product[]>([]);

    return (
      <DataGrid
        columns={columns}
        data={sampleData}
        selectable
        selectMode="single"
        onRowSelect={setSelectedRows}
      />
    );
  },
};

export const InContext: Story = {
  render: () => {
    const [selectedRows, setSelectedRows] = useState<Product[]>([]);

    return (
      <div className="space-y-6 rounded border border-gray-200 bg-gray-50 p-4">
        <div className="space-y-2">
          <div className="font-mono text-sm font-bold">
            Inventory Management
          </div>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Badge variant="outline" color="green">
                RAW
              </Badge>
              <Badge variant="outline" color="yellow">
                PRC
              </Badge>
              <Badge variant="outline" color="blue">
                FIN
              </Badge>
            </div>
            <DataGrid
              columns={columns}
              data={sampleData}
              selectable
              onRowSelect={setSelectedRows}
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="font-mono text-sm font-bold">System View</div>
          <div className="p-2">
            <DataGrid
              columns={columns}
              data={sampleData.filter((item) => item.status === "LOW_STOCK")}
            />
          </div>
        </div>
      </div>
    );
  },
};

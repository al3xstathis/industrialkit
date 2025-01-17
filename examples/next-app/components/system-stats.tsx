"use client";
import { Panel, PanelRow, StatusIndicator } from "industrialkit";

export function SystemStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Panel variant="bordered">
        <PanelRow
          label="System Status"
          value={
            <div className="flex items-center justify-end gap-2">
              <StatusIndicator status="success" />
              <span>Operational</span>
            </div>
          }
        />
      </Panel>

      <Panel variant="bordered">
        <PanelRow
          label="Active Processes"
          value={
            <div className="flex items-center justify-end gap-2">
              <span className="text-lg font-bold">127</span>
              <span className="text-xs text-green-500">+12%</span>
            </div>
          }
        />
      </Panel>

      <Panel variant="bordered">
        <PanelRow
          label="Memory Usage"
          value={
            <div className="flex items-center justify-end gap-2">
              <span className="text-lg font-bold">72%</span>
              <span className="text-xs text-yellow-500">Warning</span>
            </div>
          }
        />
      </Panel>

      <Panel variant="bordered">
        <PanelRow
          label="Network Load"
          value={
            <div className="flex items-center justify-end gap-2">
              <span className="text-lg font-bold">45 Mb/s</span>
              <span className="text-xs text-gray-500">Normal</span>
            </div>
          }
        />
      </Panel>
    </div>
  );
}

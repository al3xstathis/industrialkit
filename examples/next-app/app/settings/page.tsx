// examples/next-app/app/settings/page.tsx
"use client";
import {
  Accordion,
  AccordionItem,
  Badge,
  Button,
  Dialog,
  Form,
  FormField,
  FormGroup,
  FormSection,
  Input,
  NumericInput,
  Option,
  Panel,
  PanelRow,
  Select,
  Switch,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  Terminal,
  useToast,
} from "industrialkit";
import { useState } from "react";

export default function SettingsPage() {
  const { showToast } = useToast();
  const [showBackupDialog, setShowBackupDialog] = useState(false);
  const [showResetDialog, setShowResetDialog] = useState(false);

  // Sample system information
  const systemInfo = {
    version: "2.5.0",
    uptime: "15 days, 7 hours",
    lastUpdate: "2024-01-10 15:30:00",
    environment: "Production",
    nodeVersion: "v20.10.0",
    database: "PostgreSQL 16.1",
    os: "Linux 6.1.0",
  };

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-xl font-bold">System Settings</h1>
          <p className="text-sm text-gray-500">
            Configure system preferences and maintenance options
          </p>
        </div>
        <Badge variant="solid" color="green">
          Version {systemInfo.version}
        </Badge>
      </div>

      <Tabs defaultValue="general">
        <TabList>
          <Tab value="general">General</Tab>
          <Tab value="security">Security</Tab>
          <Tab value="networking">Networking</Tab>
          <Tab value="maintenance">Maintenance</Tab>
          <Tab value="about">About</Tab>
        </TabList>

        {/* General Settings */}
        <TabPanel value="general">
          <Form>
            <FormSection
              title="Display Settings"
              description="Configure the appearance and behavior of the interface"
            >
              <FormGroup columns={2}>
                <FormField label="Theme">
                  <Select defaultValue="system">
                    <Option value="light">Light Mode</Option>
                    <Option value="dark">Dark Mode</Option>
                    <Option value="system">System Default</Option>
                  </Select>
                </FormField>
                <FormField label="Terminal Style">
                  <Select defaultValue="default">
                    <Option value="default">Standard</Option>
                    <Option value="terminal">Classic Terminal</Option>
                  </Select>
                </FormField>
                <FormField label="Date Format">
                  <Select defaultValue="iso">
                    <Option value="iso">ISO (2024-01-15)</Option>
                    <Option value="us">US (01/15/2024)</Option>
                    <Option value="eu">EU (15/01/2024)</Option>
                  </Select>
                </FormField>
                <FormField label="Time Format">
                  <Select defaultValue="24">
                    <Option value="24">24-hour</Option>
                    <Option value="12">12-hour</Option>
                  </Select>
                </FormField>
              </FormGroup>
            </FormSection>

            <FormSection
              title="Notification Preferences"
              description="Configure system notifications and alerts"
            >
              <FormGroup columns={2}>
                <FormField>
                  <Switch label="Enable notifications" defaultChecked />
                </FormField>
                <FormField>
                  <Switch label="Enable sound" defaultChecked />
                </FormField>
                <FormField>
                  <Switch label="Always show critical" defaultChecked />
                </FormField>
                <FormField>
                  <Switch label="Show maintenance" defaultChecked />
                </FormField>
              </FormGroup>
            </FormSection>

            <FormSection
              title="Data Display"
              description="Configure how data is displayed and updated"
            >
              <FormGroup columns={2}>
                <FormField label="Auto-refresh Interval">
                  <NumericInput
                    min={5}
                    max={60}
                    step={5}
                    defaultValue={15}
                    suffix="seconds"
                  />
                </FormField>
                <FormField label="Data Retention">
                  <NumericInput
                    min={1}
                    max={90}
                    defaultValue={30}
                    suffix="days"
                  />
                </FormField>
                <FormField label="Table Page Size">
                  <Select defaultValue="25">
                    <Option value="10">10 rows</Option>
                    <Option value="25">25 rows</Option>
                    <Option value="50">50 rows</Option>
                    <Option value="100">100 rows</Option>
                  </Select>
                </FormField>
                <FormField label="Graph Resolution">
                  <Select defaultValue="medium">
                    <Option value="low">Low (1 min)</Option>
                    <Option value="medium">Medium (30 sec)</Option>
                    <Option value="high">High (10 sec)</Option>
                  </Select>
                </FormField>
              </FormGroup>
            </FormSection>

            <div className="flex justify-end gap-2">
              <Button variant="default">Reset</Button>
              <Button
                variant="primary"
                onClick={() =>
                  showToast({
                    type: "success",
                    title: "Settings Saved",
                    message: "Your preferences have been updated.",
                  })
                }
              >
                Save Changes
              </Button>
            </div>
          </Form>
        </TabPanel>

        {/* Security Settings */}
        <TabPanel value="security">
          <Form>
            <FormSection
              title="Authentication"
              description="Configure security and access settings"
            >
              <FormGroup columns={2}>
                <FormField label="Session Timeout">
                  <NumericInput
                    min={5}
                    max={240}
                    defaultValue={30}
                    suffix="minutes"
                  />
                </FormField>
                <FormField label="Max Login Attempts">
                  <NumericInput min={3} max={10} defaultValue={5} />
                </FormField>
                <FormField label="Password Expiry">
                  <NumericInput
                    min={30}
                    max={180}
                    defaultValue={90}
                    suffix="days"
                  />
                </FormField>
                <FormField label="2FA Method">
                  <Select defaultValue="app">
                    <Option value="app">Authenticator App</Option>
                    <Option value="sms">SMS</Option>
                    <Option value="email">Email</Option>
                  </Select>
                </FormField>
              </FormGroup>

              <FormField label="IP Whitelist">
                <Input placeholder="Enter comma-separated IP addresses" />
              </FormField>

              <FormGroup columns={2}>
                <FormField>
                  <Switch label="Require HTTPS" defaultChecked />
                </FormField>
                <FormField>
                  <Switch label="Enable API keys" defaultChecked />
                </FormField>
              </FormGroup>
            </FormSection>

            <FormSection
              title="Audit Log"
              description="Configure system audit logging"
            >
              <FormGroup columns={2}>
                <FormField label="Audit Log Retention">
                  <NumericInput
                    min={30}
                    max={365}
                    defaultValue={90}
                    suffix="days"
                  />
                </FormField>
                <FormField label="Log Level">
                  <Select defaultValue="info">
                    <Option value="debug">Debug</Option>
                    <Option value="info">Info</Option>
                    <Option value="warn">Warning</Option>
                    <Option value="error">Error</Option>
                  </Select>
                </FormField>
              </FormGroup>
            </FormSection>

            <div className="flex justify-end gap-2">
              <Button variant="primary">Save Security Settings</Button>
            </div>
          </Form>
        </TabPanel>

        {/* Networking Settings */}
        <TabPanel value="networking">
          <Form>
            <FormSection
              title="Network Configuration"
              description="Configure network and connectivity settings"
            >
              <FormGroup columns={2}>
                <FormField label="HTTP Port">
                  <NumericInput min={80} max={65535} defaultValue={8080} />
                </FormField>
                <FormField label="HTTPS Port">
                  <NumericInput min={443} max={65535} defaultValue={443} />
                </FormField>
                <FormField label="Proxy">
                  <Input placeholder="http://proxy.example.com:8080" />
                </FormField>
                <FormField label="API Rate Limit">
                  <NumericInput
                    min={100}
                    max={10000}
                    defaultValue={1000}
                    suffix="req/min"
                  />
                </FormField>
              </FormGroup>

              <FormField label="Allowed Origins (CORS)">
                <Input placeholder="*.example.com, localhost:*" />
              </FormField>

              <FormGroup columns={2}>
                <FormField>
                  <Switch label="Enable WebSocket" defaultChecked />
                </FormField>
                <FormField>
                  <Switch label="Enable MQTT" defaultChecked />
                </FormField>
              </FormGroup>
            </FormSection>

            <div className="flex justify-end gap-2">
              <Button
                variant="primary"
                onClick={() =>
                  showToast({
                    type: "warning",
                    title: "Restart Required",
                    message: "Changes will take effect after system restart.",
                  })
                }
              >
                Save Network Settings
              </Button>
            </div>
          </Form>
        </TabPanel>

        {/* Maintenance Settings */}
        <TabPanel value="maintenance">
          <div className="space-y-4">
            <Panel variant="bordered" title="System Status">
              <PanelRow label="Uptime" value={systemInfo.uptime} />
              <PanelRow label="Last Update" value={systemInfo.lastUpdate} />
              <PanelRow label="Environment" value={systemInfo.environment} />
            </Panel>

            <Accordion>
              <AccordionItem
                value="backup"
                title="Backup & Restore"
                subtitle="Manage system backups"
              >
                <div className="space-y-4">
                  <FormSection title="Automatic Backups">
                    <FormGroup columns={2}>
                      <FormField label="Enable Auto-backup">
                        <Switch label="Enable" defaultChecked />
                      </FormField>
                      <FormField label="Backup Interval">
                        <Select defaultValue="daily">
                          <Option value="hourly">Hourly</Option>
                          <Option value="daily">Daily</Option>
                          <Option value="weekly">Weekly</Option>
                        </Select>
                      </FormField>
                      <FormField label="Retention Period">
                        <NumericInput
                          min={1}
                          max={90}
                          defaultValue={30}
                          suffix="days"
                        />
                      </FormField>
                      <FormField label="Compression">
                        <Select defaultValue="gzip">
                          <Option value="none">None</Option>
                          <Option value="gzip">GZIP</Option>
                          <Option value="zip">ZIP</Option>
                        </Select>
                      </FormField>
                    </FormGroup>
                  </FormSection>

                  <div className="flex gap-2">
                    <Button
                      variant="primary"
                      onClick={() => setShowBackupDialog(true)}
                    >
                      Create Backup
                    </Button>
                    <Button variant="default">Restore</Button>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem
                value="updates"
                title="System Updates"
                subtitle="Manage system updates and patches"
              >
                <div className="space-y-4">
                  <FormSection title="Update Settings">
                    <FormGroup columns={2}>
                      <FormField label="Auto Updates">
                        <Switch label="Enable" defaultChecked />
                      </FormField>
                      <FormField label="Update Channel">
                        <Select defaultValue="stable">
                          <Option value="stable">Stable</Option>
                          <Option value="beta">Beta</Option>
                          <Option value="dev">Development</Option>
                        </Select>
                      </FormField>
                    </FormGroup>
                  </FormSection>

                  <Button variant="primary">Check for Updates</Button>
                </div>
              </AccordionItem>

              <AccordionItem
                value="reset"
                title="Factory Reset"
                subtitle="Reset system to default settings"
              >
                <div className="space-y-4">
                  <p className="text-sm text-red-500">
                    Warning: This action cannot be undone and will erase all
                    data.
                  </p>
                  <Button
                    variant="danger"
                    onClick={() => setShowResetDialog(true)}
                  >
                    Factory Reset
                  </Button>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </TabPanel>

        {/* About Panel */}
        <TabPanel value="about">
          <div className="space-y-4">
            <Panel variant="bordered" title="System Information">
              <PanelRow label="Version" value={systemInfo.version} />
              <PanelRow label="Environment" value={systemInfo.environment} />
              <PanelRow label="Node.js" value={systemInfo.nodeVersion} />
              <PanelRow label="Database" value={systemInfo.database} />
              <PanelRow label="Operating System" value={systemInfo.os} />
            </Panel>

            <Terminal
              title="SYSTEM_INFO"
              lines={[
                "> System Version: " + systemInfo.version,
                "> Node Version: " + systemInfo.nodeVersion,
                "> Database: " + systemInfo.database,
                "> OS: " + systemInfo.os,
                "> Uptime: " + systemInfo.uptime,
              ]}
            />
          </div>
        </TabPanel>
      </Tabs>

      {/* Backup Dialog */}
      <Dialog
        open={showBackupDialog}
        onClose={() => setShowBackupDialog(false)}
        title="Create System Backup"
      >
        <Form>
          <FormField label="Backup Name">
            <Input
              placeholder="Enter backup name"
              defaultValue={`backup_${new Date().toISOString().split("T")[0]}`}
            />
          </FormField>
          <FormField label="Include">
            <FormGroup>
              <Switch label="Configuration" defaultChecked />
              <Switch label="User Data" defaultChecked />
              <Switch label="Logs" defaultChecked />
            </FormGroup>
          </FormField>
        </Form>
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="default" onClick={() => setShowBackupDialog(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              showToast({
                type: "success",
                title: "Backup Started",
                message: "System backup is in progress...",
              });
              setShowBackupDialog(false);
            }}
          >
            Start Backup
          </Button>
        </div>
      </Dialog>

      {/* Reset Dialog */}
      <Dialog
        open={showResetDialog}
        onClose={() => setShowResetDialog(false)}
        title="Factory Reset"
        alert
      >
        <div className="space-y-4">
          <p className="text-sm">
            Are you sure you want to reset the system to factory defaults? This
            action cannot be undone and will erase all data.
          </p>
          <FormField label="Confirmation">
            <Input
              placeholder="Type 'RESET' to confirm"
              onChange={(e) =>
                e.target.value === "RESET" &&
                showToast({
                  type: "error",
                  title: "Factory Reset",
                  message: "System will be reset in 5 seconds...",
                })
              }
            />
          </FormField>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="default" onClick={() => setShowResetDialog(false)}>
            Cancel
          </Button>
          <Button variant="danger">Reset System</Button>
        </div>
      </Dialog>
    </div>
  );
}

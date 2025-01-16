// src/stories/Form.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../components/primitive/button";
import {
  Form,
  FormField,
  FormGroup,
  FormSection,
} from "../components/primitive/form";
import {
  Input,
  NumericInput,
  SearchInput,
  Textarea,
} from "../components/primitive/input";
import { Option, Select } from "../components/primitive/select";

const meta: Meta<typeof Form> = {
  title: "IndustryDB/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Form>;

export const ProcessControl: Story = {
  render: () => {
    const [formErrors, setFormErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Simulate validation
      const errors: Record<string, string> = {};
      const form = e.target as HTMLFormElement;
      if (!form.processId.value) errors.processId = "Process ID is required";
      if (!form.temperature.value)
        errors.temperature = "Temperature is required";
      setFormErrors(errors);
    };

    return (
      <Form onSubmit={handleSubmit}>
        <FormSection
          title="Process Configuration"
          description="Configure process parameters and control settings."
        >
          <FormGroup columns={2}>
            <FormField
              label="Process ID"
              required
              error={formErrors.processId}
              hint="Unique identifier for this process"
            >
              <Input
                name="processId"
                variant="id"
                prefix="PRC"
                placeholder="001"
              />
            </FormField>
            <FormField label="Process Type" required>
              <Select name="processType" defaultValue="">
                <Option value="" disabled>
                  Select type
                </Option>
                <Option value="BATCH">Batch Process</Option>
                <Option value="CONTINUOUS">Continuous Process</Option>
              </Select>
            </FormField>
          </FormGroup>

          <FormGroup columns={3}>
            <FormField
              label="Temperature"
              required
              error={formErrors.temperature}
              hint="Operating temperature"
            >
              <NumericInput
                name="temperature"
                placeholder="0.0"
                min={0}
                max={500}
                step={0.1}
                suffix="°C"
              />
            </FormField>
            <FormField label="Pressure" required hint="Operating pressure">
              <NumericInput
                name="pressure"
                placeholder="0.0"
                min={0}
                max={100}
                step={0.1}
                suffix="bar"
              />
            </FormField>
            <FormField label="Flow Rate" required hint="Material flow rate">
              <NumericInput
                name="flowRate"
                placeholder="0.0"
                min={0}
                max={1000}
                step={0.1}
                suffix="L/min"
              />
            </FormField>
          </FormGroup>

          <FormField label="Notes" hint="Additional process information">
            <Textarea
              name="notes"
              placeholder="Enter process notes..."
              rows={3}
            />
          </FormField>
        </FormSection>

        <FormSection
          title="Search & Filter"
          description="Search through process records"
        >
          <FormGroup>
            <FormField
              label="Search Records"
              hint="Search by ID or description"
            >
              <SearchInput
                name="search"
                placeholder="Search processes..."
                onSearch={console.log}
              />
            </FormField>
          </FormGroup>
        </FormSection>

        <div className="flex justify-end gap-2">
          <Button variant="default">Cancel</Button>
          <Button variant="primary" type="submit">
            Save Configuration
          </Button>
        </div>
      </Form>
    );
  },
};

export const Terminal: Story = {
  render: () => {
    return (
      <div className="rounded border border-green-500 bg-black p-4">
        <Form variant="terminal" onSubmit={(e) => e.preventDefault()}>
          <FormSection
            title="SYSTEM_CONFIG"
            description="Configure system parameters"
          >
            <FormGroup columns={2}>
              <FormField label="HOSTNAME" required>
                <Input
                  variant="terminal"
                  name="hostname"
                  placeholder="Enter hostname"
                />
              </FormField>
              <FormField label="PORT" required>
                <NumericInput
                  variant="terminal"
                  name="port"
                  placeholder="Enter port"
                  min={0}
                  max={65535}
                />
              </FormField>
            </FormGroup>

            <FormGroup>
              <FormField label="COMMAND" hint="Enter system command">
                <Input
                  variant="terminal"
                  name="command"
                  prefix="$"
                  placeholder="Enter command"
                />
              </FormField>
            </FormGroup>

            <FormField
              label="CONFIG"
              hint="System configuration in JSON format"
            >
              <Textarea
                variant="terminal"
                name="config"
                placeholder="Enter configuration..."
                rows={4}
              />
            </FormField>
          </FormSection>

          <FormSection
            title="PROCESS_SEARCH"
            description="Search active processes"
          >
            <FormField label="FILTER" hint="Filter by process name or ID">
              <SearchInput
                name="processSearch"
                placeholder="Search processes..."
                onSearch={console.log}
              />
            </FormField>
          </FormSection>

          <div className="flex justify-end gap-2">
            <Button variant="terminal">CANCEL</Button>
            <Button variant="terminal" type="submit">
              SAVE
            </Button>
          </div>
        </Form>
      </div>
    );
  },
};

export const Validation: Story = {
  render: () => {
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Simulate validation
      const newErrors: Record<string, string> = {};
      const form = e.target as HTMLFormElement;

      if (!form.deviceId.value) {
        newErrors.deviceId = "Device ID is required";
      }
      if (!form.temperature.value) {
        newErrors.temperature = "Temperature is required";
      } else if (parseFloat(form.temperature.value) > 100) {
        newErrors.temperature = "Temperature cannot exceed 100°C";
      }

      setErrors(newErrors);
      if (Object.keys(newErrors).length === 0) {
        console.log("Form submitted successfully");
      }
    };

    return (
      <Form onSubmit={handleSubmit}>
        <FormSection
          title="Device Configuration"
          description="Enter device parameters with validation."
        >
          <FormGroup columns={2}>
            <FormField
              label="Device ID"
              required
              error={errors.deviceId}
              hint="Unique device identifier"
            >
              <Input
                name="deviceId"
                variant="id"
                prefix="DEV"
                error={!!errors.deviceId}
              />
            </FormField>
            <FormField
              label="Temperature"
              required
              error={errors.temperature}
              hint="Maximum 100°C"
            >
              <NumericInput
                name="temperature"
                suffix="°C"
                min={0}
                max={100}
                step={0.1}
                error={!!errors.temperature}
              />
            </FormField>
          </FormGroup>
        </FormSection>

        <div className="flex justify-end gap-2">
          <Button type="submit" variant="primary">
            Validate & Save
          </Button>
        </div>
      </Form>
    );
  },
};

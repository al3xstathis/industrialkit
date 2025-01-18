'use client'
import { ExampleCard } from "@/components/example-card";
import {
    Button,
    Form,
    FormField,
    FormGroup,
    FormSection,
    Input,
    Select,
    Switch,
    Textarea
} from "industrialkit";

export default function FormPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Form</h1>
        <p className="text-lg text-gray-600">
          Composable form components for building complex forms with validation and layout controls.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Examples</h2>

        <ExampleCard
          title="Basic Form"
          description="A simple form with various input types"
          code={`import { Form, FormField, Input, Select, Button } from "industrialkit";

export default function BasicExample() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FormField label="Name" required>
        <Input placeholder="Enter your name" />
      </FormField>

      <FormField label="Email" required>
        <Input type="email" placeholder="Enter your email" />
      </FormField>

      <FormField label="Role">
        <Select>
          <option value="user">User</option>
          <option value="admin">Administrator</option>
          <option value="editor">Editor</option>
        </Select>
      </FormField>

      <Button type="submit">Submit</Button>
    </Form>
  );
}`}
        >
          <Form onSubmit={(e) => e.preventDefault()}>
            <FormField label="Name" required>
              <Input placeholder="Enter your name" />
            </FormField>

            <FormField label="Email" required>
              <Input type="email" placeholder="Enter your email" />
            </FormField>

            <FormField label="Role">
              <Select>
                <option value="user">User</option>
                <option value="admin">Administrator</option>
                <option value="editor">Editor</option>
              </Select>
            </FormField>

            <Button type="submit">Submit</Button>
          </Form>
        </ExampleCard>

        <ExampleCard
          title="Form Sections"
          description="Organizing form fields into logical sections"
          code={`import { Form, FormSection, FormField, FormGroup, Input } from "industrialkit";

export default function SectionsExample() {
  return (
    <Form>
      <FormSection
        title="Personal Information"
        description="Enter your personal details"
      >
        <FormGroup columns={2}>
          <FormField label="First Name">
            <Input />
          </FormField>
          <FormField label="Last Name">
            <Input />
          </FormField>
        </FormGroup>
        <FormField label="Bio">
          <Textarea />
        </FormField>
      </FormSection>

      <FormSection
        title="Account Settings"
        description="Configure your account preferences"
      >
        <FormField label="Username">
          <Input />
        </FormField>
        <FormField label="Email Notifications">
          <Switch />
        </FormField>
      </FormSection>
    </Form>
  );
}`}
        >
          <Form>
            <FormSection
              title="Personal Information"
              description="Enter your personal details"
            >
              <FormGroup columns={2}>
                <FormField label="First Name">
                  <Input />
                </FormField>
                <FormField label="Last Name">
                  <Input />
                </FormField>
              </FormGroup>
              <FormField label="Bio">
                <Textarea />
              </FormField>
            </FormSection>

            <FormSection
              title="Account Settings"
              description="Configure your account preferences"
            >
              <FormField label="Username">
                <Input />
              </FormField>
              <FormField label="Email Notifications">
                <Switch />
              </FormField>
            </FormSection>
          </Form>
        </ExampleCard>

        <ExampleCard
          title="Form Validation"
          description="Form fields with validation states and hints"
          code={`import { Form, FormField, Input } from "industrialkit";

export default function ValidationExample() {
  return (
    <Form>
      <FormField
        label="Username"
        hint="Must be at least 3 characters"
      >
        <Input />
      </FormField>

      <FormField
        label="Email"
        error="Please enter a valid email address"
      >
        <Input type="email" />
      </FormField>

      <FormField
        label="Password"
        hint="Must contain at least 8 characters"
        error="Password is too weak"
      >
        <Input type="password" />
      </FormField>
    </Form>
  );
}`}
        >
          <Form>
            <FormField
              label="Username"
              hint="Must be at least 3 characters"
            >
              <Input />
            </FormField>

            <FormField
              label="Email"
              error="Please enter a valid email address"
            >
              <Input type="email" />
            </FormField>

            <FormField
              label="Password"
              hint="Must contain at least 8 characters"
              error="Password is too weak"
            >
              <Input type="password" />
            </FormField>
          </Form>
        </ExampleCard>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">API Reference</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Form</h3>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 font-bold">Prop</th>
                  <th className="px-4 py-2 font-bold">Type</th>
                  <th className="px-4 py-2 font-bold">Default</th>
                  <th className="px-4 py-2 font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">variant</td>
                  <td className="px-4 py-2 font-mono">"default" | "terminal"</td>
                  <td className="px-4 py-2 font-mono">"default"</td>
                  <td className="px-4 py-2">Visual style of the form</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">disabled</td>
                  <td className="px-4 py-2 font-mono">boolean</td>
                  <td className="px-4 py-2 font-mono">false</td>
                  <td className="px-4 py-2">Disable all form fields</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">readonly</td>
                  <td className="px-4 py-2 font-mono">boolean</td>
                  <td className="px-4 py-2 font-mono">false</td>
                  <td className="px-4 py-2">Make all form fields readonly</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">FormSection</h3>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 font-bold">Prop</th>
                  <th className="px-4 py-2 font-bold">Type</th>
                  <th className="px-4 py-2 font-bold">Default</th>
                  <th className="px-4 py-2 font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">title</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Section title</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">description</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Section description</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">FormField</h3>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 font-bold">Prop</th>
                  <th className="px-4 py-2 font-bold">Type</th>
                  <th className="px-4 py-2 font-bold">Default</th>
                  <th className="px-4 py-2 font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">label</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Field label</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">required</td>
                  <td className="px-4 py-2 font-mono">boolean</td>
                  <td className="px-4 py-2 font-mono">false</td>
                  <td className="px-4 py-2">Mark field as required</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">error</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Error message</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">hint</td>
                  <td className="px-4 py-2 font-mono">string</td>
                  <td className="px-4 py-2 font-mono">-</td>
                  <td className="px-4 py-2">Help text</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">FormGroup</h3>
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-2 font-bold">Prop</th>
                  <th className="px-4 py-2 font-bold">Type</th>
                  <th className="px-4 py-2 font-bold">Default</th>
                  <th className="px-4 py-2 font-bold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 font-mono">columns</td>
                  <td className="px-4 py-2 font-mono">number</td>
                  <td className="px-4 py-2 font-mono">1</td>
                  <td className="px-4 py-2">Number of columns in the group</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

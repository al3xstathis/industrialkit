'use client'
import { Button, useToast } from "industrialkit";

export function ToastExample() {
  const { showToast } = useToast();

  const showInfoToast = () => {
    showToast({
      type: "info",
      title: "Information",
      message: "This is an informational message",
    });
  };

  const showSuccessToast = () => {
    showToast({
      type: "success",
      title: "Success!",
      message: "Operation completed successfully",
    });
  };

  const showWarningToast = () => {
    showToast({
      type: "warning",
      title: "Warning",
      message: "Please review your settings",
    });
  };

  const showErrorToast = () => {
    showToast({
      type: "error",
      title: "Error",
      message: "An error occurred during the operation",
    });
  };

  const showPersistentToast = () => {
    showToast({
      type: "info",
      title: "Persistent Message",
      message: "This message will stay until dismissed",
      isPersistent: true,
    });
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={showInfoToast}>Show Info</Button>
      <Button onClick={showSuccessToast} variant="primary">Show Success</Button>
      <Button onClick={showWarningToast}>Show Warning</Button>
      <Button onClick={showErrorToast} variant="danger">Show Error</Button>
      <Button onClick={showPersistentToast}>Show Persistent</Button>
    </div>
  );
}
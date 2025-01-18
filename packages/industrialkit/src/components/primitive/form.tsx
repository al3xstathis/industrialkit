"use client";
import React from "react";
import { cn } from "../../lib/cn";

// Form Context
interface FormContextValue {
  variant?: "default" | "terminal";
  disabled?: boolean;
  readonly?: boolean;
}

const FormContext = React.createContext<FormContextValue>({});

// Form Root
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  variant?: "default" | "terminal";
  disabled?: boolean;
  readonly?: boolean;
  className?: string;
}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ variant = "default", disabled, readonly, className, ...props }, ref) => {
    return (
      <FormContext.Provider value={{ variant, disabled, readonly }}>
        <form ref={ref} className={cn("space-y-4", className)} {...props} />
      </FormContext.Provider>
    );
  },
);

// Form Section
interface FormSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  className?: string;
}

const FormSection = React.forwardRef<HTMLDivElement, FormSectionProps>(
  ({ title, description, className, children, ...props }, ref) => {
    const { variant } = React.useContext(FormContext);

    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        {(title || description) && (
          <div className="space-y-1">
            {title && (
              <h3
                className={cn(
                  "font-mono text-sm font-bold",
                  variant === "terminal" && "text-green-400",
                )}
              >
                {title}
              </h3>
            )}
            {description && (
              <p
                className={cn(
                  "text-sm text-gray-500",
                  variant === "terminal" && "text-green-600",
                )}
              >
                {description}
              </p>
            )}
          </div>
        )}
        <div className="space-y-4">{children}</div>
      </div>
    );
  },
);

// Form Field
interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children?: React.ReactElement; // Explicitly type children as ReactElement
}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ label, required, error, hint, className, children, ...props }, ref) => {
    const { variant } = React.useContext(FormContext);
    const id = React.useId();

    return (
      <div ref={ref} className={cn("space-y-1.5", className)} {...props}>
        {label && (
          <label
            htmlFor={id}
            className={cn(
              "font-mono text-sm font-medium",
              variant === "terminal" && "text-green-400",
            )}
          >
            {label}
            {required && (
              <span
                className={cn(
                  "ml-1 text-red-500",
                  variant === "terminal" && "text-red-400",
                )}
              >
                *
              </span>
            )}
          </label>
        )}
        {React.isValidElement(children) &&
          React.cloneElement(children, {
            id,
            "aria-describedby": error
              ? `${id}-error`
              : hint
                ? `${id}-hint`
                : undefined,
          } as React.HTMLAttributes<HTMLElement>)}{" "}
        {/* Add type assertion */}
        {hint && !error && (
          <p
            id={`${id}-hint`}
            className={cn(
              "text-xs text-gray-500",
              variant === "terminal" && "text-green-600",
            )}
          >
            {hint}
          </p>
        )}
        {error && (
          <p
            id={`${id}-error`}
            className={cn(
              "text-xs text-red-500",
              variant === "terminal" && "text-red-400",
            )}
          >
            {error}
          </p>
        )}
      </div>
    );
  },
);

// Form Group
interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: number;
  className?: string;
}

const FormGroup = React.forwardRef<HTMLDivElement, FormGroupProps>(
  ({ columns = 1, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid gap-4",
          columns === 1 && "grid-cols-1",
          columns === 2 && "grid-cols-2",
          columns === 3 && "grid-cols-3",
          columns === 4 && "grid-cols-4",
          className,
        )}
        {...props}
      />
    );
  },
);

Form.displayName = "Form";
FormSection.displayName = "FormSection";
FormField.displayName = "FormField";
FormGroup.displayName = "FormGroup";

export { Form, FormField, FormGroup, FormSection };

import * as React from "react"
    import * as SelectPrimitive from "@radix-ui/react-select"
    import { Check, ChevronDown } from "lucide-react"

    import { cn } from "@/lib/utils"

    const Select = SelectPrimitive.Root

    const SelectGroup = SelectPrimitive.Group

    const SelectItem = React.forwardRef(
      ({ className, children, ...props }, ref) => {
        return (
          <SelectPrimitive.Item
            ref={ref}
            className={cn(
              "relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
              "focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <span className="truncate">{children}</span>
            <SelectPrimitive.ItemIndicator className="absolute right-0 flex h-full items-center pr-2">
              <Check className="h-4 w-4" />
            </SelectPrimitive.ItemIndicator>
          </SelectPrimitive.Item>
        )
      }
    )
    SelectItem.displayName = "SelectItem"

    const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
      <SelectPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    ))
    SelectTrigger.displayName = "SelectTrigger"

    const SelectValue = SelectPrimitive.Value

    const SelectContent = React.forwardRef(({ className, children, position = "bottom", ...props }, ref) => {
      return (
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            ref={ref}
            className={cn(
              "relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              position === "bottom" && "data-[side=bottom]:slide-in-from-top-2",
              position === "top" && "data-[side=top]:slide-in-from-bottom-2",
              className
            )}
            {...props}
          >
            <SelectPrimitive.Viewport className="p-1">
              {children}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      )
    })
    SelectContent.displayName = "SelectContent"

    const SelectLabel = React.forwardRef(({ className, ...props }, ref) => (
      <SelectPrimitive.Label
        ref={ref}
        className={cn("py-1.5 pl-2 text-sm font-semibold", className)}
        {...props}
      />
    ))
    SelectLabel.displayName = "SelectLabel"

    const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => (
      <SelectPrimitive.Separator
        ref={ref}
        className={cn("-mx-1 my-1 h-px bg-muted", className)}
        {...props}
      />
    ))
    SelectSeparator.displayName = "SelectSeparator"

    export {
      Select,
      SelectGroup,
      SelectItem,
      SelectTrigger,
      SelectValue,
      SelectContent,
      SelectLabel,
      SelectSeparator,
    }

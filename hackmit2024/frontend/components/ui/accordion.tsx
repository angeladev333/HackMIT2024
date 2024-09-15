"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

interface ChevronProps {
  isOpen: boolean;  
}
const Chevron: React.FC<ChevronProps> = ({ isOpen }) => {
  return (
    <ChevronDownIcon
      className={cn(
        "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
        isOpen ? "rotate-180" : "rotate-0" 
      )}
    />
  );
};

export default Chevron;
const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <AccordionPrimitive.Header className="flex items-center">
      <div
        className={cn(
          "flex flex-1 items-center py-4 text-sm font-medium",
          className
        )}
      >
        {children}
      </div>
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn("cursor-pointer flex items-center", className)}
        {...props}
        onClick={() => setIsOpen(!isOpen)} 
      >
        <Chevron isOpen={isOpen} />  
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn("overflow-hidden text-sm", 
    "data-[state=closed]:animate-accordion-up", 
    "data-[state=open]:animate-accordion-down",
    className)}
    
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

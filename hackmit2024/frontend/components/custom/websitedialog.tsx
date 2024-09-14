"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function WebsiteDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Classic Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-b from-blue-100 to-white border-2 border-blue-300 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-grey-800 text-center mb-4">
            Diving deep into []!
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
            <p>
                Image here
            </p>
          <p className="text-gray-700 mb-6">
            Thank you for visiting our website. We hope you find the information
            you're looking for. If you have any questions, please don't hesitate
            to contact us.
          </p>
          <div className="text-center">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              Learn More
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

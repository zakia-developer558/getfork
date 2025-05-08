"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "../ui/dialog";

interface GetForkModalProps {
  isOpen: boolean;
  onClose: () => void;
  userQuery?: string;
}

export default function GetForkModal({ isOpen, onClose, userQuery = "" }: GetForkModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[550px] p-6 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1 text-xl font-bold">
            <span className="text-[#FF6B00]">Get</span>
            <span>Fork</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground mb-6">
          <p>
            Powered by <span className="font-medium text-foreground">GetFork.ai</span>
          </p>
          <p className="mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incididunt ut
          </p>
        </div>

        <div className="bg-muted rounded-md p-3 mb-6">
          <p className="text-center text-foreground">
            {userQuery || "Lorem ipsum dolor sit ame consecte"}
          </p>
        </div>

        <div className="flex gap-3">
          <div className="flex-shrink-0 w-6 h-6 bg-[#FF6B00] rounded-md flex items-center justify-center text-white text-xs">
            A
          </div>
          <div>
            <p className="font-medium mb-1">Agent</p>
            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

"use client";
import { Modal } from "@/components/ui/dialog-modal";
import { Button } from "@/components/ui/button";
import { FormEvent, useEffect, useState } from "react";

type AlertModalProps = {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  onConfirm: (e:FormEvent) => void ;
};

export const AlertModal = ({
  isOpen,
  onClose,
  loading,
  onConfirm,
}: AlertModalProps) => {
  const [isMounted, SetisMounted] = useState(false);

  useEffect(() => {
    SetisMounted(true); //Until this lifecycle is runned , there shouldnt be any difference between server and client side components hence we are passingn null back
  }, []);

  if (!isMounted) {
    return null; //this is used to not cause hydration as the provider is a client component
  }
  return (
    <Modal
      title="Are you sure?"
      description="Your given data will be verified manually by our team and if found correct will be published."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button disabled={loading} onClick={onClose} variant={"outline"}>
          Cancel
        </Button>
        <Button disabled={loading} onClick={onConfirm} variant={"destructive"}>
          Continue
        </Button>
      </div>
    </Modal>
  );
};
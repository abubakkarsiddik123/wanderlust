"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";

export function BookingCancelAlert({ bookingId }) {
  const router = useRouter();
  const handleCancelBooking = async () => {
    const result = await authClient.token();
    console.log(result,"delete booking");
    const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${result.data.token}`,
      },
    });
    const data = await res.json();
    console.log(data);
    if (data.deletedCount > 0) {
      toast.success("Booking Cancelled Successfully!");
      router.refresh();
    }
  };
  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white duration-300 px-5 py-2 rounded-lg flex items-center gap-2">
          <FaTrashAlt />
          Cancel
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel Booking permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete and all of its data. This action
                cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={handleCancelBooking}
                slot="close"
                variant="danger"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}

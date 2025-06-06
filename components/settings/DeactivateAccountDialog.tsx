// components/settings/DeactivateAccountDialog.tsx
"use client";

import * as React from "react";
import { ControllerRenderProps, UseFormReturn } from "react-hook-form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { DeactivateFormValues } from "./settings-page";

interface DeactivateAccountDialogProps {
  deactivateForm: UseFormReturn<DeactivateFormValues>;
  onDeactivate: (data: DeactivateFormValues) => void;
  isDeactivating: boolean;
}

export function DeactivateAccountDialog({
  deactivateForm,
  onDeactivate,
  isDeactivating,
}: DeactivateAccountDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-[#E58C5A] hover:bg-[#d94d1a] text-white border-none">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <Form {...deactivateForm}>
          <form onSubmit={deactivateForm.handleSubmit(onDeactivate)}>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Account?</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete your account and all data. This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <div className="my-6">
              <FormField
                control={deactivateForm.control}
                name="password"
                render={({ field }: { field: ControllerRenderProps<DeactivateFormValues, "password"> }) => (
                  <FormItem>
                    <FormLabel>Confirm your password</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button
                  type="submit"
                  className="bg-[#E58C5A] hover:bg-[#d94d1a] text-white border-none"
                  disabled={isDeactivating}
                >
                  {isDeactivating && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Delete Account
                </Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

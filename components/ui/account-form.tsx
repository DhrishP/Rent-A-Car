"use client";
import { FormWrapper } from "./form-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ImageUpload from "./image-upload";
import toast from "react-hot-toast";
import { useState } from "react";

type ContentData = {
  Imageurl: string;
  Model: string;
};

type AccountFormProps = ContentData & {
  updateFields: (fields: Partial<ContentData>) => void;
};

const formSchema = z.object({
  model: z.string().min(1),
  ImageUrl: z.string(),
});

export function AccountForm({
  Imageurl,
  Model,
  updateFields,
}: AccountFormProps) {
  const [loading, setloading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: "",
      ImageUrl: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
    } catch (err) {
      toast.error(`${err}`);
    } finally {
      setloading(false);
    }
  };
  return (
    <div className="pl-6 w-1/3 flex items-start mt-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="ImageUrl"
            render={(
              { field } //field passes imageurl array
            ) => (
              <FormItem>
                <FormLabel className="font-bold text-primary">
                  Add an Background Image
                </FormLabel>
                <FormControl>
                  <ImageUpload
                    disabled={loading}
                    onChange={(url) => {
                      updateFields({ Imageurl: url });
                      field.onChange(url); //Updates the array with the current url
                    }}
                    onRemove={() => {
                      field.onChange("");
                    }}
                    values={field.value ? [field.value] : []} //If we want multiple images then we can pass here a single value in array is passed
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-primary">Model</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="Model name.."
                    onChange={(e) => updateFields({ Model: e.target.value })}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {/* <div className={cn("flex ")}>
          <Button
            className="hover:bg-white hover:text-black hover:border-black border-2 px-3 "
            disabled={loading}
            type="submit"
          >
            Submit
          </Button>
        </div> */}
        </form>
      </Form>
    </div>
  );
}

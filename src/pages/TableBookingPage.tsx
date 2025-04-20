
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface BookingFormData {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: string;
}

const TableBookingPage = () => {
  const form = useForm<BookingFormData>();

  const onSubmit = (data: BookingFormData) => {
    toast.success("Booking request received! We'll contact you shortly.");
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-12 mt-16">
        <div className="max-w-2xl mx-auto space-y-8 animate-fade-in pt-10">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-bistro-brown">Book a Table</h1>
            <p className="text-gray-600">Reserve your dining experience with us</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name" {...field} required />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} required />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} required min={new Date().toISOString().split('T')[0]} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} required />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="guests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Guests</FormLabel>
                    <FormControl>
                      <Input type="number" min="1" max="20" placeholder="Enter number of guests" {...field} required />
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-bistro-brown hover:bg-bistro-brown/90">
                Book Table
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TableBookingPage;

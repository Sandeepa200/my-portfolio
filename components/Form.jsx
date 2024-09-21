"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert";
import { useRef } from "react";

const Form = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kejx82t",
        "template_yom3k0a",
        form.current,
        "lIWEuccnUqMWll5do"
      )
      .then(
        () => {
          Swal("Success", "Your message has been sent!", "success");
          form.current.reset();
        },
        (error) => {
          Swal(
            "Error",
            "Failed to send message. Please try again later.",
            "error"
          );
        }
      );
  };
  return (
    <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      {/* input  */}
      <div className="relative flex items-center">
        <Input
          type="name"
          id="name"
          placeholder="Name"
          name="from_name"
          required
        />
        <User size={20} className="absolute right-6" />
      </div>
      {/* input  */}
      <div className="relative flex items-center">
        <Input
          type="email"
          name="from_email"
          id="email"
          placeholder="Email"
          required
        />
        <MailIcon size={20} className="absolute right-6" />
      </div>
      {/* input  */}
      <div className="relative flex items-center">
        <Textarea
          placeholder="Type Your Message Here..."
          id="message"
          name="message"
          required
        />
        <MessageSquare size={20} className="absolute top-4 right-6" />
      </div>
      <Button className="flex items-center gap-x-1 lg:max-w-[166px]" type="submit">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;

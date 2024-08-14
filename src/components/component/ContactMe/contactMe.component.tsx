import React, { useState, ChangeEvent } from 'react';
import { Label } from '../../ui/label';
import { Input } from '../../ui/input';
import PopupDialog from '../PopupDialog/popupDialog.component';
import { Textarea } from '../../ui/textarea';
import { Button } from '../../ui/button';

export default function ContactMe() {
  const [name, setName] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogDescription, setDialogDescription] = useState('');
  const [dialogTitle, setDialogTitle] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isEmailLoading, setIsEmailLoading] = useState(false);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMsgChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsEmailLoading(true);

    const requestBody = JSON.stringify({ name, email, message });
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });

    if (response.ok) {
      setDialogTitle('Success🎉');
      setDialogDescription('Email sent successfully');
    } else {
      setDialogTitle('Uh ohh...❌');
      setDialogDescription('Error sending email');
    }
    setDialogOpen(true);
    setIsEmailLoading(false);
  };
  return (
    <section className="py-12 md:py-24 lg:py-32 xl:py-48" key="section5">
      <div className="container px-4 md:px-6">
        <div className="grid gap-4 md:gap-6">
          <div className="space-y-2">
            <h2 className="text-3xl text-black dark:text-white font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white">
              Contact Me
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-black dark:text-white">
              Get in touch 😀
            </p>
          </div>
          <form className="grid gap-4 md:gap-6">
            <div className="grid gap-2">
              <Label
                className="text-sm text-black dark:text-white"
                htmlFor="name"
              >
                Name
              </Label>
              <Input
                id="name"
                placeholder="Enter your name"
                required
                onChange={handleNameChange}
              />
            </div>
            <div className="grid gap-2">
              <Label
                className="text-sm text-black dark:text-white"
                htmlFor="email"
              >
                Email
              </Label>
              <Input
                id="email"
                placeholder="Enter your email"
                required
                type="email"
                onChange={handleEmailChange}
              />
            </div>
            <div className="grid gap-2">
              <Label
                className="text-sm text-black dark:text-white"
                htmlFor="message"
              >
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Enter your message"
                required
                onChange={handleMsgChange}
              />
            </div>
            <Button
              type="submit"
              onClick={handleSubmit}
              className={`bg-blue-500 text-white px-4 py-2 ${
                isEmailLoading ? 'animate-pulse' : ''
              }`}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
      <PopupDialog
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        dialogDescription={dialogDescription}
        dialogTitle={dialogTitle}
      />
    </section>
  );
}

"use client";

import { useState, useRef, ChangeEvent, FormEvent } from 'react';
import emailjs from 'emailjs-com'

interface FormData {
  name: string;
  mail: string;
  tel: string;
  message: string;
}

interface FormErrors {
  name?: string;
  mail?: string;
  tel?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    mail: '',
    tel: '',
    message: '',
  });
  const [mailNotification, setMailNotification] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '',
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      // Your emailjs.sendForm logic here
      emailjs.sendForm('service_fwmyg3d', 'template_90ikf9h', e.target as HTMLFormElement, 'lC7937JbYRRMMVemw');

      setMailNotification(true);
      setFormData({
        name: '',
        mail: '',
        tel: '',
        message: '',
      });
      setTimeout(() => {
        setMailNotification(false);
      }, 2000);

      if (form.current) {
        form.current.reset();
      }
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data: FormData): FormErrors => {
    const errors: FormErrors = {};

    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!data.mail.trim()) {
      errors.mail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.mail)) {
      errors.mail = 'Invalid email format';
    }

    if (!data.tel.trim()) {
      errors.tel = 'Phone is required';
    } else if (!/^\d{10}$/.test(data.tel)) {
      errors.tel = 'Invalid phone number';
    }

    return errors;
  };

  return (
    <>
      {mailNotification ? (
        <div className="h-[400px] flex items-center">
          <span>Message Sent Successfully</span>
        </div>
      ) : (
        <form ref={form} className="flex flex-col max-w-[608px] w-[100%]" onSubmit={handleSubmit}>
          <div className="input-container mt-3">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name='name'
              className={`bg-inherit w-[100%] border-b-[1px] outline-none py-[10px] px-[5px] mt-[5px] ${formErrors.name ? 'border-red-500' : ''
                }`}
              onChange={handleInputChange}
              value={formData.name}
            ></input>
            {formErrors.name &&
              <p className='text-[red] p-[10px]'>{formErrors.name}</p>
            }
          </div>
          <div className="input-container mt-3">
            <label htmlFor="mail">Mail*</label>
            <input
              type="mail"
              id="mail"
              name='mail'
              className={`bg-inherit w-[100%] border-b-[1px] outline-none py-[10px] px-[5px] mt-[5px] ${formErrors.mail ? 'border-red-500' : ''
                }`}
              onChange={handleInputChange}
              value={formData.mail}
            />
            {formErrors.mail &&
              <p className='text-[red] p-[10px]'>{formErrors.mail}</p>
            }
          </div>
          <div className="input-container mt-3">
            <label htmlFor="tel">Phone*</label>
            <input
              type="tel"
              id="tel"
              name='tel'
              className={`bg-inherit w-[100%] border-b-[1px] outline-none py-[10px] px-[5px] mt-[5px] ${formErrors.mail ? 'border-red-500' : ''
                }`}
              onChange={handleInputChange}
              value={formData.tel}
            />
            {formErrors.tel &&
              <p className='text-[red] p-[10px]'>{formErrors.tel}</p>
            }
          </div>
          <div className='input-container mt-3'>
            <textarea
              // type="text"
              id='message'
              name='message'
              placeholder='Your Message Here'
              className='bg-inherit w-[100%] border-[1px] outline-none  py-[10px] px-[5px] mt-[10px] '
              // rows="4"
              onChange={handleInputChange}
            />
          </div>
          <div className='flex justify-center mt-[20px]'>
            <button type="submit" className="bg-[white] text-[#303030] font-[700] text-[14px] tracking-[2.996px] h-[56px] w-[111px] focus:outline-none focus:shadow-outline-black">
              SEND
            </button>
          </div>
        </form>
      )}
    </>
  );
}

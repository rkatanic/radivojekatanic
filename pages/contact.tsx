import React from "react";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Contact = (): JSX.Element => (
  <div>
    <div className="-mt-8 flex items-center gap-4">
      <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-slate-200 shadow-md">
        <Image alt="me" src="/me.png" width={240} height={240} />
      </div>
      <div className="mt-8 flex-1">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-3xl font-semibold leading-10">
            Radivoje Katanić
          </h1>
          <div className="flex items-start gap-2">
            <a
              href="https://drive.google.com/file/d/1SYQCLxy7JCt7TJfHK5h1G7VqL4mhM8NM/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 items-center gap-2 rounded-lg  border border-gray-300 bg-white px-3 text-sm font-medium text-gray-600 shadow-sm hover:text-gray-900 hover:shadow-md"
            >
              <FiLinkedin />
            </a>
            <a
              href="https://drive.google.com/file/d/1SYQCLxy7JCt7TJfHK5h1G7VqL4mhM8NM/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 items-center gap-2 rounded-lg  border border-gray-300 bg-white px-3 text-sm font-medium text-gray-600 shadow-sm hover:text-gray-900 hover:shadow-md"
            >
              <FiGithub />
            </a>
            <a
              href="https://drive.google.com/file/d/1SYQCLxy7JCt7TJfHK5h1G7VqL4mhM8NM/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 items-center gap-2 rounded-lg  border border-gray-300 bg-white px-3 text-sm font-medium text-gray-600 shadow-sm hover:text-gray-900 hover:shadow-md"
            >
              <FiMail />
            </a>
          </div>
        </div>
        <h3 className="leading-6 text-gray-600">Software Developer</h3>
      </div>
    </div>
    <form className="my-12 flex flex-col gap-6">
      <div className="flex items-baseline">
        <div className="flex-1 text-sm text-gray-900">Name*</div>
        <input
          required
          type="text"
          className="w-full flex-[3] rounded-lg border border-gray-300 p-2 text-sm text-gray-900 shadow-sm"
        />
      </div>
      <div className="flex items-baseline">
        <div className="flex-1 text-sm text-gray-900">E-mail*</div>
        <input
          required
          type="text"
          className="w-full flex-[3] rounded-lg border border-gray-300 p-2 text-sm text-gray-900 shadow-sm"
        />
      </div>
      <div className="flex items-baseline">
        <div className="flex-1 text-sm text-gray-900">Message*</div>
        <textarea
          rows={10}
          required
          className="w-full flex-[3] rounded-lg border border-gray-300 p-2 text-sm text-gray-900 shadow-sm"
        />
      </div>
      <button className="max-w-min self-end rounded-lg bg-gray-800 p-2 px-6 text-sm font-medium text-white hover:bg-gray-900 hover:shadow-md">
        Send
      </button>
    </form>
  </div>
);

export default Contact;

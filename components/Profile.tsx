import React from "react";
import Image from "next/image";
import { FiFileText, FiMapPin } from "react-icons/fi";

const Profile = (): JSX.Element => (
  <div className="mt-12 overflow-hidden rounded-xl border">
    <div className="h-32 w-full bg-gradient-to-r from-slate-200 via-sky-100 to-yellow-50"></div>
    <div className="-mt-24 p-6">
      <div className="h-28 w-28 overflow-hidden rounded-full bg-slate-100">
        <Image alt="me" src="/me.png" width={240} height={240} />
      </div>

      <div className="flex w-full items-end justify-between">
        <div className="mt-4">
          <h1 className="text-3xl font-semibold text-gray-900">
            Radivoje Katanić
          </h1>
          <h3 className="text-gray-600">Software Developer</h3>
          <h3 className="mt-2 flex items-baseline gap-2 text-sm leading-6 text-gray-400">
            <FiMapPin /> Doboj, Bosnia and Herzegovina
          </h3>
        </div>
        <div className="flex gap-1">
          <a
            href="https://drive.google.com/file/d/1SYQCLxy7JCt7TJfHK5h1G7VqL4mhM8NM/view"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center gap-2 rounded-xl bg-white px-8 text-sm font-semibold text-gray-400 hover:bg-gray-50 hover:text-gray-600"
          >
            <FiFileText /> View CV
          </a>
          <a
            href="mailto:rkatanic96@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center gap-3 rounded-xl bg-gray-800 px-8 text-sm font-medium text-white shadow-sm hover:bg-gray-900 hover:shadow-md"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;

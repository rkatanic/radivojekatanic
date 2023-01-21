import React from "react";
import Image from "next/image";
import { FiDownloadCloud } from "react-icons/fi";

const Profile = (): JSX.Element => (
  <div className="-mt-8 flex w-full items-center justify-between">
    <div className="flex items-center gap-4">
      <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-slate-200 shadow-md">
        <Image alt="me" src="/me.png" width={240} height={240} />
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-semibold leading-10">Radivoje Katanić</h1>
        <h3 className="leading-6 text-gray-600">Software Developer</h3>
      </div>
    </div>

    <div className="mt-2">
      <a
        href="https://drive.google.com/file/d/1SYQCLxy7JCt7TJfHK5h1G7VqL4mhM8NM/view"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-9 items-center gap-2 rounded-lg  border bg-gray-800 px-3 text-sm font-medium text-white shadow-sm hover:bg-gray-900 hover:shadow-md"
      >
        <FiDownloadCloud /> Download CV
      </a>
    </div>
  </div>
);

export default Profile;

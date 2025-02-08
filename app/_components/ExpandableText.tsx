"use client";

import {
  JSXElementConstructor,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";
import classnames from "classnames";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const ExpandableText = (props: {
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
}): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div
        className={`relative overflow-hidden ${
          isExpanded ? "max-h-none" : "max-h-26"
        }`}
      >
        <div
          className={classnames(
            "prose mb-2 line-clamp-4 text-zinc-600 dark:text-zinc-400",
            {
              "line-clamp-none": isExpanded,
            },
          )}
        >
          {props.children}
        </div>
        {!isExpanded && (
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/50 to-transparent dark:from-zinc-900/50"></div>
        )}
      </div>
      <button
        onClick={toggleExpand}
        className="flex items-center gap-1.5 text-sm font-medium text-teal-700 hover:text-teal-700 focus:outline-none dark:text-teal-400"
      >
        {isExpanded ? (
          <>
            <span>Show less</span>
            <ChevronUpIcon className="size-3" />
          </>
        ) : (
          <>
            <span>Show more</span>
            <ChevronDownIcon className="size-3" />
          </>
        )}
      </button>
    </div>
  );
};

export default ExpandableText;

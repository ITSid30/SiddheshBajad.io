import React from "react";
import { ReactDOM } from "react";

function Cards(props) {
    return (
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] m-10 bg-gradient-to-b from-purple-50 to-slate-300">
            <div class="p-4 md:p-5">
                <h3 class=" text-lg font-bold text-gray-800 dark:text-black">
                {props.cardTitle}
                </h3>
                <p class="mt-2 text-gray-800 dark:text-black-400">
                {props.content}       </p>
                <a class="mt-3 inline-flex items-center gap-2 mt-5 text-sm font-medium text-blue-500 hover:text-blue-700" href="#">
                Card link
                <svg class="w-2.5 h-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                </a>
            </div>
        </div>
    );
};

export default Cards;
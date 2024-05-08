import React, { Fragment } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import { sortOptions } from "../Data";
import { useFilterContext } from "../Context/FilterContext";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sort = ({setMobileFiltersOpen}) => {


  const { Grid_View, setGridView, setListView, sorting } = useFilterContext();
  return (
    <div className="flex items-center">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
            Sort
            <ChevronDownIcon
              className="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 w-40 mt-2 origin-top-right bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {sortOptions.map((option) => (
                <Menu.Item key={option.name}>
                  {({ active }) => (
                    <option
                      value={option.value}
                      onClick={sorting}
                      className={classNames(
                        option.current
                          ? "font-medium text-gray-900"
                          : "text-gray-500",
                        active ? "bg-gray-100" : "",
                        "block cursor-pointer px-4 py-2 text-sm",
                      )}
                    >
                      {option.name}
                    </option>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      <button
        type="button"
        className={
          Grid_View
            ? "-m-2 ml-5 bg-bg p-2 text-text sm:ml-7"
            : "-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
        }
        onClick={setGridView}
      >
        <span className="sr-only">View grid</span>
        <Squares2X2Icon className="w-5 h-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className={
          !Grid_View
            ? "-m-2 ml-5 bg-bg p-2 text-text sm:ml-7"
            : "-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
        }
        onClick={setListView}
      >
        <span className="sr-only">View List</span>
        <Bars3Icon className="w-5 h-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        className="p-2 ml-4 -m-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
        onClick={() => setMobileFiltersOpen(true)}
      >
        <span className="sr-only">Filters</span>
        <FunnelIcon className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Sort;

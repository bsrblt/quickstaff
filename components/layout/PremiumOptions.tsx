import React from "react";
import GlassCard from "./GlassCard";
import Button from "./Button";

const PremiumOptions = () => {
  return (
    <div className="mx-auto max-w-[81rem] px-5 lg:px-8 bg-transparent fadeIn035">
      {/* <div className="mt-8 flex justify-center">
        <fieldset className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-color2">
          <GlassCard>
            <label className="cursor-pointer rounded-full px-2.5 py-1">
              <input
                type="radio"
                name="frequency"
                value="monthly"
                className="sr-only"
              />
              <span>Monthly</span>
            </label>
          </GlassCard>
          <label className="cursor-pointer rounded-full px-2.5 py-1">
            <input
              type="radio"
              name="frequency"
              value="annually"
              className="sr-only"
            />
            <span>Annually</span>
          </label>
        </fieldset>
      </div> */}
      <div className=" mx-2 mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <GlassCard>
          <div id="tier-freelancer" className="rounded-3xl p-8 xl:p-10">
            <h3 className="text-xl font-semibold leading-8 text-color2 fontpop-1">
              Freelancer
            </h3>
            <p className="mt-4 text-md leading-6 text-shite fontpop-3">
              The essentials to provide your best work for clients.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-color1 fontpop-1">
                $15
              </span>
              <span className="text-sm font-semibold leading-6 text-color2">
                /month
              </span>
            </p>
            <Button type="button">Buy plan</Button>
            <ul
              role="list"
              className="mt-8 space-y-3 text-md leading-6 xl:mt-10 text-white fontpop-3"
            >
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-color1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                5 products
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-color1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                Up to 1,000 subscribers
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-color1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                Basic analytics
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-color1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                48-hour support response time
              </li>
            </ul>
          </div>
        </GlassCard>
        <GlassCard>
          <div className="rounded-3xl p-8  xl:p-10">
            <h3
              id="tier-startup"
              className="text-xl font-semibold leading-8 text-color1 fontpop-1"
            >
              Business
            </h3>
            <p className="mt-4 text-sm leading-6 text-white fontpop-3">
              A plan that scales with your rapidly growing business.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-color1 fontpop-1">
                $15
              </span>
              <span className="text-sm font-semibold leading-6 text-color2">
                /month
              </span>
            </p>
            <Button type="button">Buy plan</Button>
            <ul
              role="list"
              className="mt-8 space-y-3 text-md leading-6 xl:mt-10 text-white fontpop-3"
            >
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-color1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                5 products
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-color1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                Up to 1,000 subscribers
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-color1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                Basic analytics
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-color1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                48-hour support response time
              </li>
            </ul>
          </div>
        </GlassCard>
        <GlassCard>
          <div className="rounded-3xl p-8 xl:p-10 bg-gray-900/50 ">
            <h3
              id="tier-enterprise"
              className="text-xl font-semibold leading-8 text-white"
            >
              Enterprise
            </h3>
            <p className="mt-4 text-sm leading-6 text-gray-300 fontpop-2">
              Dedicated support and infrastructure for your company.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white">
                Custom
              </span>
            </p>
            <Button type="button">Contact sales</Button>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-300"
            >
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                Unlimited products
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                Unlimited subscribers
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                Advanced analytics
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                1-hour, dedicated support response time
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                Marketing automations
              </li>
              <li className="flex gap-x-3">
                <svg
                  className="h-6 w-5 flex-none text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clip-rule="evenodd"
                  />
                </svg>
                Custom reporting tools
              </li>
            </ul>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default PremiumOptions;

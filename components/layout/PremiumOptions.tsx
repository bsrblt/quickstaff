import React from "react";
import GlassCard from "./GlassCard";
import Button from "./Button";
import Link from "next/link";

const svgIconSilver = (
  <svg
    className="h-6 w-5 flex-none text-silver"
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
);
const svgIconWhite = (
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
);

const PremiumOptions = () => {
  return (
    <div className="mx-auto max-w-[81rem] px-5 lg:px-8 bg-transparent fadeIn035">
      <div className="text-white mx-2 mt-1 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <GlassCard>
          <div
            id="tier-freelancer"
            className="rounded-3xl p-8 xl:p-10 bg-color1/40"
          >
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
              <span className="text-sm font-semibold leading-6 text-color2 fontpop-5">
                /month
              </span>
            </p>
            <Button type="button">Buy plan</Button>
            <ul
              role="list"
              className="mt-8 space-y-3 text-md leading-6 xl:mt-10 text-white fontpop-3"
            >
              <li className="flex gap-x-3">{svgIconSilver}5 times usage</li>
              <li className="flex gap-x-3">
                {svgIconSilver}
                Up to 1,000 subscribers
              </li>
              <li className="flex gap-x-3">
                {svgIconSilver}
                Basic analytics
              </li>
              <li className="flex gap-x-3">
                {svgIconSilver}
                48-hour support response time
              </li>
            </ul>
          </div>
        </GlassCard>
        <GlassCard>
          <div className="rounded-3xl p-8  xl:p-10 bg-color2/30">
            <h3
              id="tier-business"
              className="text-xl font-semibold leading-8 text-bubblegum fontpop-3"
            >
              Agency
            </h3>
            <p className="mt-4 text-sm leading-6 text-white fontpop-3">
              A plan that scales with your rapidly growing business.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-bubblegum/90 fontpop-3">
                $25
              </span>
              <span className="text-sm font-semibold leading-6 text-bubblegum fontpop-3">
                /month
              </span>
            </p>
            <Button type="button">Buy plan</Button>
            <ul
              role="list"
              className="mt-8 space-y-3 text-md leading-6 xl:mt-10 text-white fontpop-3"
            >
              <li className="flex gap-x-3">
                {svgIconSilver}
                10 times usage
              </li>
              <li className="flex gap-x-3">
                {svgIconSilver}
                Up to 2,000 subscribers
              </li>
              <li className="flex gap-x-3">
                {svgIconSilver}
                Detailed analytics
              </li>
              <li className="flex gap-x-3">
                {svgIconSilver}
                24-hour support response time
              </li>
              <li className="flex gap-x-3">
                {svgIconSilver}
                Marketing Insight
              </li>
            </ul>
          </div>
        </GlassCard>
        <GlassCard>
          <div className="rounded-3xl p-8 xl:p-10 bg-gray-800/50">
            <h3
              id="tier-enterprise"
              className="text-xl font-semibold leading-8 text-white fontpop-3"
            >
              Enterprise
            </h3>
            <p className="mt-4 text-sm leading-6 text-gray-300 fontpop-3">
              Dedicated support and infrastructure for your company.
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="text-4xl font-bold tracking-tight text-white fontpop-3">
                Custom
              </span>
            </p>
            <Link href="/contact">
              <Button type="button">Contact sales</Button>
            </Link>

            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-300"
            >
              <li className="flex gap-x-3 fontpop-3">
                {svgIconWhite}
                Unlimited usage
              </li>
              <li className="flex gap-x-3 fontpop-3">
                {svgIconWhite}
                Unlimited subscribers
              </li>
              <li className="flex gap-x-3 fontpop-3">
                {svgIconWhite}
                Advanced analytics
              </li>
              <li className="flex gap-x-3 fontpop-3">
                {svgIconWhite}
                1-hour, dedicated support response time
              </li>
              <li className="flex gap-x-3 fontpop-3">
                {svgIconWhite}
                Marketing automations
              </li>
              <li className="flex gap-x-3 fontpop-3">
                {svgIconWhite}
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

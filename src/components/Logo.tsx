export function Logomark(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    // <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"
    //   />
    // </svg>
    <svg
      width="40"
      height="40"
      viewBox="0 0 666 715"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.7"
        d="M30.3649 556.328C12.5259 551.901 -2.1918e-07 535.886 0 517.506L2.40123e-06 316.142C2.71122e-06 290.148 24.4058 271.059 49.6351 277.32L635.635 422.756C653.474 427.184 666 443.198 666 461.579V662.942C666 688.937 641.594 708.026 616.365 701.764L30.3649 556.328Z"
        fill="#1F8110"
      />
      <path
        opacity="0.7"
        d="M44.1995 441.335C20.5779 443.828 -2.8325e-07 425.309 0 401.556L3.52078e-06 106.309C3.76483e-06 85.8433 15.4479 68.6788 35.8005 66.5301L621.801 4.6658C645.423 2.17205 666 20.6919 666 44.4448V339.692C666 360.157 650.552 377.322 630.2 379.47L44.1995 441.335Z"
        fill="#95D159"
      />
    </svg>
  );
}

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div
      className="flex flex-row items-center gap-2"
      {...(props as React.HTMLAttributes<HTMLDivElement>)}
    >
      <Logomark className="h-10 w-auto fill-cyan-500" />
      <h1 className="text-xl font-bold">Soc Space</h1>
    </div>
  );
}

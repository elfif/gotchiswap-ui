'use client';

import Link from "next/link";

const Success = () => {
  return (
    <div className="text-2xl flex flex-col justify-items-center place-items-center">
      <div>
        You made it ! Your OTC deal has been created. Now you just need to tell
        your buyer about it so he can come and complete the OTC transaction.
      </div>
      <Link className="btn-gotchi text-2xl p-4 mt-10" href="/otc/new">Create new OTC</Link>
    </div>
  );
};

export default Success;

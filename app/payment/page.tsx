"use client";

import Cash from "@/components/buttons/payment/cash";
import Credit from "@/components/buttons/payment/credit";
import Ic from "@/components/buttons/payment/ic";
import Qr from "@/components/buttons/payment/qr";

export default function Payment() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-2/5">
          <h3>小計（{}点）</h3>
          <hr />
        </div>

        <div className="flex flex-col gap-4 w-5/10">
          <Cash onClick={() => console.log("現金決済")} />
          <Credit onClick={() => console.log("クレジット決済")} />
          <div className="flex gap-4">
            <Ic onClick={() => console.log("交通決済")} />
            <Qr onClick={() => console.log("QR決済")} />
          </div>
        </div>
      </div>
    </div>
  );
}

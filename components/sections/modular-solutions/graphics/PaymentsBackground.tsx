// Generated from the original page markup. Edit freely.
import Image from "next/image";

export function PaymentsBackground() {
  return (
    <div className="payments-graphic__background">
      <picture className="payments-graphic__background-image">
        <Image
          src="/images/modular-solutions/payment-bento-background.jpg"
          alt=""
          width={1720}
          height={1352}
        />
      </picture>
      <picture className="payments-graphic__background-image-mobile">
        <Image src="/images/modular-solutions/wave-crop.jpg" alt="" width={1104} height={1506} />
      </picture>
    </div>
  );
}

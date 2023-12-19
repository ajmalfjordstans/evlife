'use client';

import Image from "next/image";

export default function FloatingWhatsapp() {
  const handleButtonClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=917736677477');
  };

  return (
    <div className="fixed bottom-7 right-7 hover:cursor-pointer">
      <div onClick={() => handleButtonClick()}>
        <Image
          src="/image/ev/whatsapp.png"
          alt="whatsapp"
          className="h-14 w-14"
          height={768}
          width={768}
        />
      </div>
    </div>
  );
}
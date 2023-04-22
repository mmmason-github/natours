import Image from 'next/image';
import clsx from 'clsx';
import hero from '@public/assets/img/hero.jpg';

export default function Hero() {
  return (
    <>
      <div
        className={clsx(
          'absolute z-10 h-full w-full',
          'bg-[linear-gradient(to_right_bottom,_rgb(126_213_111/0.8),_rgb(40_180_131/0.8))] opacity-70',
          'clip-path-polygon-[0_0,100%_0,100%_75vh,0_100%]',
        )}
      />
      <Image
        fill
        alt="logo"
        className={clsx(
          'z-0 h-full',
          'bg-cover bg-top',
          'clip-path-polygon-[0_0,100%_0,100%_75vh,0_100%]',
        )}
        src={hero}
      />
    </>
  );
}

import Image from 'next/image';
import clsx from 'clsx';
import logo from '@public/assets/img/logo-white.png';

export default function Logo() {
  return (
    <div className={clsx('absolute left-10 top-10 z-20')}>
      <Image
        alt="logo"
        className={clsx('')}
        height="45"
        src={logo}
        width="45"
      />
    </div>
  );
}

import clsx from 'clsx';

import Heading from './Heading';
import Hero from './Hero';
import Logo from './Logo';

export default function Header() {
  return (
    <header className={clsx('relative h-[95vh]')}>
      <Hero />
      <Heading />
      <Logo />
    </header>
  );
}

import clsx from 'clsx';

export default function Heading() {
  return (
    <div
      className={clsx(
        'absolute left-[50%] top-[40%] z-20 translate-x-[-50%] translate-y-[-50%]',
      )}
    >
      <h1 className={clsx('uppercase text-white')}>
        <span className={clsx('block text-[60px] font-[400] tracking-[35px]')}>
          outdoors
        </span>
        <span
          className={clsx('block text-[20px] font-[700] tracking-[17.4px]')}
        >
          is where life happens
        </span>
      </h1>
    </div>
  );
}

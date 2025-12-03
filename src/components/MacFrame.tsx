import Image from 'next/image';
import clsx from 'clsx';

import laptopFrame from '@/images/laptop-realistic.png';

export function MacFrame({
  className,
  children,
  priority = false,
  screenClassName,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  priority?: boolean;
  screenClassName?: string;
}) {
  return (
    <div className={clsx('relative w-full', className)} {...props}>
      {/* 노트북 프레임 이미지 */}
      <Image
        src={laptopFrame}
        alt="MacBook"
        className="pointer-events-none relative z-10 h-full w-full object-contain"
        unoptimized
        priority={priority}
      />
      {/* 화면 영역 - 노트북 화면에 맞게 조정 필요 */}
      <div
        className={clsx(
          'absolute left-[8%] top-[6%] h-[60%] w-[84%] overflow-hidden rounded-[2%] bg-gray-900',
          screenClassName
        )}
      >
        <div className="h-full w-full overflow-auto">{children}</div>
      </div>
    </div>
  );
}

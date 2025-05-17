// components/ui/calendar.tsx
'use client';

import * as React from 'react';
import { DayPicker, type DayPickerProps } from 'react-day-picker';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({ className, classNames, ...props }: CalendarProps) {
  return (
    <DayPicker
      className={cn('p-3', className)}
      classNames={{
        /* 既存の classNames 定義… */
        ...classNames,
      }}
      components={
        {
          // v9 ではここで「Chevron」を置き換え
          Chevron: ({ orientation, ...chevronProps }) => {
            const Icon = orientation === 'left' ? ChevronLeft : ChevronRight;
            return <Icon className="h-4 w-4" {...chevronProps} />;
          },
        } as Partial<DayPickerProps['components']>
      }
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';
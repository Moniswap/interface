import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  Select as SelectUI,
  SelectValue,
} from '@/components/ui/select'
import { Props } from './types'
export const Select = ({
  className,
  options,
  placeholder,
  onChange,
}: Props) => (
  <SelectUI onValueChange={onChange}>
    <SelectTrigger className='w-full mt-[20px] outline-none  mb-[18px] rounded-[12px] border-none py-[14px] text-[13px]  font-medium leading-[15.73px] text-white text-w bg-[#403B3B]'>
      <SelectValue placeholder={placeholder} className='text-white' />
    </SelectTrigger>
    <SelectContent>
      {options?.map((item, index) => (
        <SelectItem key={index} value={item.value}>
          {item.label}
        </SelectItem>
      ))}
    </SelectContent>
  </SelectUI>
)

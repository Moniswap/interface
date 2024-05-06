import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Props } from './types'
import { cn } from '@/lib/utils'
import { IoCloseOutline } from 'react-icons/io5'
export const Modal = ({
  close,
  open,
  children,
  className,
  hideCloseButton,
}: Props) => (
  <Dialog open={open} onOpenChange={close}>
    <DialogContent
      className={cn(
        'bg-black-10 rounded-[12px] max-w-[719px] !border-none pt-[37px]',
        className
      )}
    >
      <div className='w-full h-full relative'>
        {children}
        {!hideCloseButton && (
          <button
            onClick={close}
            className='w-[18px] h-[18px] xl:w-[34px] xl:h-[34px] transition-all duration-300 absolute hover:bg-black hover:text-white  right-[-23px] top-[-41px] rounded-full bg-white flex justify-center items-center'
          >
            <IoCloseOutline className='text-[22px]' />
          </button>
        )}
      </div>
    </DialogContent>
  </Dialog>
)

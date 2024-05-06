import { TASKS } from '@/constants/seekers'
import { TaskItem } from './components'

export const Tasks = () => (
  <div className='container px-5 lg:px-8 xl:px-0'>
    <div
      data-aos='fade-up'
      className=' rounded-[12.796px] mt-[57px] bg-[#1E1E1E] border border-[#1E1E1E] pt-[30px] pb-[25px] px-[30px] '
    >
      <div className='flex flex-col gap-y-[6px]  xl:gap-y-[17px] '>
        {TASKS.map((task) => (
          <TaskItem key={task.title} {...task} />
        ))}
      </div>
    </div>
  </div>
)

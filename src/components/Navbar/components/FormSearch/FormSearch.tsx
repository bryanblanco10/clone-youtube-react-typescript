import { useSearchVideos } from '@/hooks'
import { type FC } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosSearch } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

interface IFormInput {
  search: string
}

export const FormSearch: FC = () => {
  const { query } = useSearchVideos()

  const navigate = useNavigate()
  const { register, handleSubmit, watch, reset } = useForm<IFormInput>({
    defaultValues: {
      search: query
    }
  })
  const search = watch('search')

  const onSubmit: SubmitHandler<IFormInput> = (data, e) => {
    e?.preventDefault()
    navigate(`/results/${data?.search}`)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex">
      <div className="flex items-center h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
        <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
          <IoIosSearch className="text-white text-xl" />
        </div>
        <input
          type="text"
          {...register('search')}
          className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
          placeholder="Search"
        />
        {search.length > 0 && (
          <AiOutlineClose
            onClick={() => { reset({ search: '' }) }}
            className="text-xl cursor-pointer mr-1"
          />
        )}
      </div>
      <button
        type="submit"
        className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
      >
        <IoIosSearch className="text-white text-xl" />
      </button>
    </form>
  )
}

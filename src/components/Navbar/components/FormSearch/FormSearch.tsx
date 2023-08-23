import { useSearchVideos } from '@/hooks'
import { type FC } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
        <div className="flex gap-4 items-center pr-5">
          <div>
            <AiOutlineSearch className="text-xl" />
          </div>
          <input
            type="text"
            {...register('search')}
            className="w-96 bg-zinc-900 focus:outline-none border-none"
          />
          {search?.length > 0 && (
            <button
              type="button"
              onClick={() => {
                reset({ search: '' })
              }}
            >
              <AiOutlineClose />
            </button>
          )}
        </div>
        <button type='submit' className="h-10 w-16 flex items-center justify-center bg-zinc-800">
          <AiOutlineSearch className="text-xl" />
        </button>
      </div>
    </form>
  )
}

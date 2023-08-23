import { SearchCard, Sidebar } from '@/components'
import { useSearchVideos } from '@/hooks'
import { type HomePageVideos } from '@/models'
import { type FC } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

export const Search: FC = () => {
  const { searchResults, searchingVideos, query } = useSearchVideos()
  return (
    <div className="flex" style={{ height: '100vh' }}>
      <Sidebar />
      <div className="py-8 pl-8 flex flex-col gap-5 w-full">
        <InfiniteScroll
          dataLength={searchResults.length}
          next={() => {
            searchingVideos(true, query)
          }}
          hasMore={searchResults.length < 500}
          loader={<span>Cargando...</span>}
          height={'100vh'}
        >
          {searchResults.map((item: HomePageVideos) => (
            <div className="my-5" key={item?.video?.videoId}>
              <SearchCard item={item} />
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  )
}

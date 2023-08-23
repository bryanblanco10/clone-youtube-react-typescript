import { type HomePageVideos } from '@/models'
import { type FC } from 'react'
import { Link } from 'react-router-dom'
interface Props {
  item: HomePageVideos
}
export const SearchCard: FC<Props> = ({ item }) => {
  return (
    <div className="flex gap-3">
      <div className="relative">
        <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
          { item?.video?.videoDuration }
        </span>
        <Link to={`/watch/${item.video?.videoId}`}>
          <img src={item?.video?.videoImages?.standard?.url} className="h-52 w-96" alt="thumbnail" />
        </Link>
      </div>
      <div className="flex gap-1 flex-col">
        <h3 className="max-w-2xl">
          <span className="line-clamp-2">
            {item?.video?.videoTitle}
          </span>
        </h3>
        <div className="text-xs text-grap-400">
          <div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {item?.video?.videoViews} views
              </span>
              <span>{item?.video?.videoPublishedAt}</span>
            </div>
          </div>
        </div>
        <div className="min-w-fit my-2">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs text-gray-400"
          >
            <img src={item?.channelInfo?.channelImage?.default?.url} alt="channel" className="h-9 w-9 rounded-full" />
            <span>{item?.channelInfo.channelName}</span>
          </Link>
        </div>
        <div className="max-w-2xl line-clamp-2 text-sm text-gray-400">
          <p>{item?.video?.videoDescription}</p>
        </div>
      </div>
    </div>
  )
}

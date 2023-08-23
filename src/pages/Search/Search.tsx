import { Sidebar } from '@/components'
import { imagen1, profile } from '@/utils'
import { type FC } from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Search: FC = () => {
  return (
    <>
      <Sidebar />
      <main className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-[#0f0f0f]">
        <div
          className="flex justify-center flex-col lg:p-5 md:p-4 p-3"
          style={{ margin: '0 auto', maxWidth: '1280px' }}
        >
          <Link to="/watch">
            <div className="flex lg:flex-row md:flex-row flex-col mb-8 lg:hover:bg-white/[0.1] rounded-xl md:p-4">
              <div className="relative flex shrink-0 lg:w-64 md:w-64 w-full rounded-xl bg-slate-800 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={imagen1}
                  alt=""
                />
                <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
                  11:24
                </span>
              </div>
              <div className="flex flex-col lg:ml-3 md:ml-3 ml-0 mt-4 md:mt-0 overflow-hidden">
                <span className="lg:text-lg md:text-base text-sm font-normal line-clamp-2 text-white">
                  GOL DE MESSI. Inter Miami pasó a la FINAL con goleada 4-1 al
                  Philadelphia Union | Leagues Cup 2023
                </span>
                <div className="flex text-xs font-normal text-white/[0.7] truncate overflow-hidden">
                  <span>{'1000 views'}</span>
                  <span className="flex leading-none font-normal text-white/[0.7] relative top-[-10px] mx-1">
                    .
                  </span>
                  <span className="truncate">Hace un año</span>
                </div>
                <div className="flex items-center mt-3">
                  <div className="flex items-start mr-3">
                    <div className="flex h-9 w-9 rounded-full overflow-hidden">
                      <img
                        className="h-full w-full object-cover"
                        src={profile}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-normal text-white/[0.7] flex items-center">
                      ESPN Deportes
                      <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
                    </span>
                  </div>
                </div>
                <span className="empty:hidden text-xs line-clamp-1 text-white/[0.7] mt-3">
                  Inter Miami pasó a la final de la Leagues Cup 2023 goleada 4-1
                  sobre Philadelphia Union en las semifinales. Gol de Messi, su
                  ...
                </span>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}

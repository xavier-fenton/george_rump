import { useState } from 'preact/hooks'
import './index.css'

export function Home() {
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)

  return (
    <>
    <div className="bg-gray-100">
      <EmbeddedVideo />

      <div className="drop-shadow-md pl-4">
        <div className="absolute left-[152px] bottom-0">
          <div className="border bg-gray-100 rounded-t-lg">
            <div
              className="cursor-pointer px-4 font-semibold flex flex-row gap-2"
              onClick={() => {
                if (visible) {
                  setVisible(false)
                } else setVisible(true)
              }}
            >
              <div className="text-gray-900 py-2">Video Reel 2024</div>
            </div>

            {visible ? <VideoInformationCard /> : null}
          </div>
        </div>
        <div className={`absolute bottom-0 border bg-gray-100 rounded-t-lg`}>
          <div
            className="cursor-pointer px-4 font-semibold"
            onClick={() => {
              if (visible2) {
                setVisible2(false)
              } else setVisible2(true)
            }}
          >
            <div className="text-gray-900 py-2">George Rump</div>
          </div>

          {visible2 ? <InformationCard /> : null}
        </div>
      </div>
    </div></>
  )
}


function InformationCard() {
  return (
    <div className="px-4 py-2">
      <div className="text-gray-900">
        <div className="font-semibold w-fit text-sm">Contact:</div>
        <div className="flex flex-row gap-2">
          <div className="text-sm">Email:</div>
          <div className="underline text-sm">
            <a href="mailto: gcrrump@gmail.com">gcrrump@gmail.com</a>
          </div>
        </div>
        <div className="flex flex-row gap-2 text-sm">
          <div>Number:</div> <div className="underline">+64 204 440 101</div>
        </div>
      </div>
    </div>
  )
}

function EmbeddedVideo() {
  return (
    <>
      <div className="px-4 drop-shadow-xl bg-gray-100">
        <iframe
          src="https://player.vimeo.com/video/935702416?h=11fcff9444"
          style="width:100%;height:100dvh; padding: 5%; background-color: #; "
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen={true}
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </>
  )
}

function VideoInformationCard() {
  return (
    <>
      <div className="p-4 py-2 flex flex-row gap-[3px] text-sm text-gray-900">
        <a className="underline font-semibold" href="https://vimeo.com/935702416">Video Reel 2024</a> by
        <a className="font-semibold" href="https://vimeo.com/user93238606">George Rump</a>
      </div>
    </>
  )
}

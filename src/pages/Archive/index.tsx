import Nav from "../../components/Nav"
import {ArchiveHomeDescription} from "../../components/subcomponents/ArchiveHomeDescription"

export function ArchivePage() {
  return (
    <>
      <div class="flex flex-col md:flex-row lg:flex-row h-full">

        <Nav />
        <div class="flex flex-col justify-between items-center h-1/2 md:h-full lg:h-full lg:w-full" >
          <span></span>
          <div class="flex flex-col">
          <div>www.GeorgePeat.com</div>
          <div>©2024 George Rump</div>
          <div>All Rights Reserved</div>
          </div>
          <span></span>
        </div>


      </div>
      <div>

       <ArchiveHomeDescription/>

      </div>
    </>
  )
}
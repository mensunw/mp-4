'use client'
import { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import DisplayIcons from "@/components/DisplayIcons";

import { Icon } from "@/types/types"
export default function Results() {
  // get current path aka the query
  const pathname = usePathname();
  // parse it
  const query = decodeURIComponent(pathname.substring(1));
  const [icons, setIcons] = useState<Icon[]>([]);

  // load icons once
  useEffect(() => {
    async function getIcons() {
      // insert query into api call
      const response = await (await fetch(`/api/getIconData?query=${encodeURIComponent(query)}`)).json()

      console.log(response)
      // error check



      const filteredIcons = response.message.icons.map((icon: any) => ({
        icon_id: icon.icon_id,
        // parse through until find the url
        icon_url: icon.raster_sizes[4].formats[0].preview_url,
      })
      )
      setIcons(filteredIcons)
    }
    getIcons()
  }, [])
  // get icons using api call

  return (
    <>
      {/* display the icons */}
      <DisplayIcons icons={icons} />
    </>
  )
}
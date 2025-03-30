'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'
import { Icon } from '@/types/types'

export default function Home() {
  const [query, setQuery] = useState('');

  // for re-routing user to their search result (docs here: https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)
  const router = useRouter()

  // get icons using api call
  async function getIcons() {
    // insert query into api call
    //const response = await (await fetch(`/api/getIconData?query=${encodeURIComponent(query)}`)).json()

    //console.log(response.message.icons)
    //setIcons(response.message.icons)
    // redirect user to the search results
    router.push(`/${encodeURIComponent(query)}`)
  }

  return (
    <>
      <div className="flex flex-row">
        <Input onChange={(e) => setQuery(e.target.value)} placeholder="Enter desired icon e.g Github, Linkedin"></Input>
        <Button variant="default" onClick={() => (getIcons())}>Search</Button>
      </div>
    </>
  );
}

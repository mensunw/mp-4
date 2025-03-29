'use client'
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'

export default function Home() {
  const [query, setQuery] = useState('');
  const [icons, setIcons] = useState([]);

  // get icons using api call
  async function getIcons() {
    // insert query into api call
    const response = await (await fetch(`/api/getIconData?query=${encodeURIComponent(query)}`)).json()
    console.log(response)
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

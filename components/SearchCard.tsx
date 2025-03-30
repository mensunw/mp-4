'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button'
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

export default function SearchCard() {
  const [query, setQuery] = useState('');

  // for re-routing user to their search result (docs here: https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)
  const router = useRouter()

  // pushes router the search page results
  async function search() {
    router.push(`/${encodeURIComponent(query)}`)
  }

  return (
    <>
      {/* home page card */}
      <Card className="m-auto mt-12 p-12 w-1/3">
        <CardTitle>Icon Finder</CardTitle>
        <CardDescription>Enter an icon to get its search results</CardDescription>
        <Input onChange={(e) => setQuery(e.target.value)} placeholder="e.g Github, Linkedin"></Input>
        <Button variant="default" onClick={() => (search())}>Search</Button>
      </Card>
    </>
  );
}

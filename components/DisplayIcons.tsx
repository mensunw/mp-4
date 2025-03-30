import { Icon } from "@/types/types"
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

export default function DisplayIcons({ icons }: { icons: Icon[] }) {
  return (
    <>
      {/* display a card for each icon */}
      <Card className="flex flex-col items-center m-12 p-12">
        <CardTitle>Search Results</CardTitle>
        <div>
          {icons ? (
            <div className="grid grid-cols-4 gap-4">
              {icons.map((icon) => (
                <Card key={icon.icon_id} className="flex items-center justify-center p-4">
                  <img src={icon?.icon_url} className="w-16" alt="img not found"></img>
                  {/* for the tags, they may not exist */}
                  Tags: {icon.tags ? (
                    <CardDescription>
                      {icon.tags.map((tag, i) => (
                        <CardDescription key={i}>{tag}</CardDescription>
                      ))}
                    </CardDescription>
                  ) : (
                    <CardDescription>N/A</CardDescription>
                  )}
                </Card>
              ))}
            </div>
          ) : (
            <Skeleton />
          )}
        </div>
      </Card>
    </>
  )
}
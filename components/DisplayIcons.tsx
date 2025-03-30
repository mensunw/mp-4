import { Icon } from "@/types/types"
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

export default function DisplayIcons({ icons }: { icons: Icon[] }) {
  return (
    <>
      {icons ? (
        <Card>
          {icons.map((icon) => (
            <Card key={icon.icon_id}>
              <img src={icon.icon_url} className="w-16"></img>
            </Card>
          ))}
        </Card>
      ) : (
        <Skeleton />
      )}
    </>
  )
}
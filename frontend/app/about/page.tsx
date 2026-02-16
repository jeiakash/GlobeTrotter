import { Compass, Globe, HeartHandshake } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <main className="container px-4 py-10 md:px-6">
        <section className="mb-10 text-center">
          <h1 className="mb-3 text-4xl font-bold font-serif text-primary md:text-5xl">About GlobalTrotters</h1>
          <p className="mx-auto max-w-3xl text-muted-foreground md:text-lg">
            GlobalTrotters helps travelers plan, organize, and share better trips with less effort.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Compass className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Plan Smarter</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Build complete itineraries with destinations, activities, and schedules in one place.
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Explore More</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Discover popular cities and activities to make every trip richer and more personal.
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <HeartHandshake className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Travel Together</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Share plans with friends and family so everyone stays aligned before and during the trip.
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Award } from "lucide-react"

export function AboutOverview() {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide exceptional education that nurtures critical thinking, creativity, and character development.",
    },
    {
      icon: Users,
      title: "Our Community",
      description: "A diverse, inclusive environment where every student feels valued and supported in their journey.",
    },
    {
      icon: Award,
      title: "Our Excellence",
      description: "Committed to academic excellence with a track record of outstanding student achievements.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">About LEOT School</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            For over two decades, LEOT School has been at the forefront of educational innovation, preparing students
            for success in an ever-changing world through personalized learning and character development.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="transition-shadow border-0 shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-100">
                  <feature.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  )
}
export default AboutOverview;

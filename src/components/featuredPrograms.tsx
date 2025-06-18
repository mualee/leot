import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Microscope, Palette, Globe } from "lucide-react"

export function FeaturedPrograms() {
  const programs = [
    {
      icon: BookOpen,
      title: "Primary Education",
      description: "Foundation learning with focus on literacy, numeracy, and social skills development.",
      ages: "Ages 5-11",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Microscope,
      title: "STEM Programs",
      description: "Science, Technology, Engineering, and Mathematics with hands-on learning experiences.",
      ages: "Ages 8-18",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Palette,
      title: "Arts & Creativity",
      description: "Visual arts, music, drama, and creative writing to nurture artistic expression.",
      ages: "Ages 6-18",
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: Globe,
      title: "Global Languages",
      description: "Multilingual education including Spanish, French, and Mandarin programs.",
      ages: "Ages 7-18",
      color: "bg-green-100 text-green-600",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">Our Featured Programs</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Discover our comprehensive range of educational programs designed to unlock every student's potential and
            prepare them for future success.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader className="pb-4 text-center">
                <div
                  className={`w-16 h-16 ${program.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <program.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-lg">{program.title}</CardTitle>
                <p className="text-sm font-medium text-emerald-600">{program.ages}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm leading-relaxed text-gray-600">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  )
}
export default FeaturedPrograms;


import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Clock, Users } from "lucide-react"

export default function AboutPage() {
  const staff = [
    {
      name: "Dr. Margaret Wilson",
      role: "Principal",
      image: "/placeholder.svg?height=200&width=200",
      bio: "With over 20 years in education, Dr. Wilson leads our school with passion for student success.",
    },
    {
      name: "James Rodriguez",
      role: "Vice Principal",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Former teacher and curriculum specialist, James ensures our academic programs meet the highest standards.",
    },
    {
      name: "Sarah Kim",
      role: "Head of STEM",
      image: "/placeholder.svg?height=200&width=200",
      bio: "PhD in Engineering Education, Sarah leads our innovative STEM programs and maker spaces.",
    },
    {
      name: "Michael Brown",
      role: "Arts Director",
      image: "/placeholder.svg?height=200&width=200",
      bio: "Professional artist and educator, Michael nurtures creativity across all our arts programs.",
    },
  ]
  const staffs = [
    {
      name: "Dr. Margaret Wilson",
      role: "Principal",
      image: "Bounchanh.jpg",
      bio: "With over 20 years in education, Dr. Wilson leads our school with passion for student success.",
    },
    {
      name: "James Rodriguez",
      role: "Vice Principal",
      image: "a.jpg",
      bio: "Former teacher and curriculum specialist, James ensures our academic programs meet the highest standards.",
    },
    {
      name: "Sarah Kim",
      role: "Head of STEM",
      image: "h.jpg",
      bio: "PhD in Engineering Education, Sarah leads our innovative STEM programs and maker spaces.",
    },
    {
      name: "Michael Brown",
      role: "Arts Director",
      image: "Luvang.jpg",
      bio: "Professional artist and educator, Michael nurtures creativity across all our arts programs.",
    },
    {
      name: "Michael Brown",
      role: "Arts Director",
      image: "Thong.jpg",
      bio: "Professional artist and educator, Michael nurtures creativity across all our arts programs.",
    },
    {
      name: "Michael Brown",
      role: "Arts Director",
      image: "xai.jpg",
      bio: "Professional artist and educator, Michael nurtures creativity across all our arts programs.",
    },
  ]

  const timeline = [
    { year: "2000", event: "LEOT School founded with 50 students" },
    { year: "2005", event: "Expanded to include middle school programs" },
    { year: "2010", event: "Launched innovative STEM curriculum" },
    { year: "2015", event: "Added state-of-the-art science laboratories" },
    { year: "2020", event: "Implemented hybrid learning model" },
    { year: "2024", event: "Celebrating 24 years of educational excellence" },
  ]

  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">About LEOT School</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Discover our story, mission, and the dedicated team that makes LEOT School a place where students thrive and
            dreams take flight.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 mr-3 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="leading-relaxed text-gray-600">
                  To provide exceptional education that nurtures critical thinking, creativity, and character
                  development. We are committed to creating an inclusive environment where every student can discover
                  their potential and develop the skills needed to become confident, compassionate leaders of tomorrow.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 mr-3 text-emerald-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="leading-relaxed text-gray-600">
                  To be a leading educational institution that empowers students to excel academically, think
                  critically, and contribute positively to society. We envision a future where our graduates are
                  innovative problem-solvers, ethical leaders, and lifelong learners who make a meaningful impact in
                  their communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">Our History</h2>
            <p className="text-xl text-gray-600">A journey of educational excellence and innovation</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-emerald-200"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                    <Card className="shadow-md">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-2">
                          <Clock className="w-5 h-5 mr-2 text-emerald-600" />
                          <span className="font-bold text-emerald-600">{item.year}</span>
                        </div>
                        <p className="text-gray-700">{item.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute w-4 h-4 transform -translate-x-1/2 border-4 border-white rounded-full left-1/2 bg-emerald-600"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose LEOT */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">Why Choose LEOT School?</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="transition-shadow shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-100">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="mb-4 text-xl font-semibold">Small Class Sizes</h3>
                <p className="text-gray-600">
                  Maximum 18 students per class ensures personalized attention and meaningful teacher-student
                  relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-100">
                  <Target className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="mb-4 text-xl font-semibold">Innovative Curriculum</h3>
                <p className="text-gray-600">
                  Cutting-edge programs that blend traditional academics with modern skills and technology integration.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow shadow-lg hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-100">
                  <Eye className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="mb-4 text-xl font-semibold">Holistic Development</h3>
                <p className="text-gray-600">
                  Focus on academic excellence, character building, and extracurricular activities for well-rounded
                  growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Our Staff */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Dedicated educators committed to your child's success</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {staff.map((member, index) => (
              <Card key={index} className="transition-shadow shadow-lg hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
                  />
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="mb-4 font-medium text-emerald-600">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Meet Our Staff */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">Meet2 Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Dedicated educators committed to your child's success</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

            {staffs.map((member, index) => (
              <Card key={index} className="transition-shadow shadow-lg hover:shadow-xl">
                <CardContent className="p-6 text-center">
                  <img
                    src={member.image ? `/images/staff/${member.image}` : "/placeholder.svg"}
                    alt={member.name}
                    className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
                  />
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="mb-4 font-medium text-emerald-600">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}

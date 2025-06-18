
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">


      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-50 to-teal-50">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">Contact Us</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            We'd love to hear from you. Get in touch with us to learn more about LEOT School or to schedule a visit.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                </div>

                <div>
                  <Label htmlFor="inquiry">Inquiry Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="admissions">Admissions</SelectItem>
                      <SelectItem value="programs">Programs</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                      <SelectItem value="tour">Schedule a Tour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us how we can help you..." className="min-h-[120px]" />
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Send Message</Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="mb-6 text-2xl font-bold text-gray-900">Get in Touch</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 mt-1 text-emerald-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600">
                          123 Education Street
                          <br />
                          Learning City, LC 12345
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 mt-1 text-emerald-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">
                          Main: (555) 123-4567
                          <br />
                          Admissions: (555) 123-4568
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 mt-1 text-emerald-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">
                          info@leotschool.edu
                          <br />
                          admissions@leotschool.edu
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 mt-1 text-emerald-600" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Office Hours</h4>
                        <p className="text-gray-600">
                          Monday - Friday: 8:00 AM - 5:00 PM
                          <br />
                          Saturday: 9:00 AM - 2:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="mb-6 text-2xl font-bold text-gray-900">Follow Us</h3>
                  <p className="mb-6 text-gray-600">
                    Stay connected with LEOT School on social media for updates, events, and student achievements.
                  </p>

                  <div className="flex space-x-4">
                    <Button size="icon" variant="outline" className="hover:bg-emerald-50 hover:border-emerald-600">
                      <Facebook className="w-5 h-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-emerald-50 hover:border-emerald-600">
                      <Twitter className="w-5 h-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-emerald-50 hover:border-emerald-600">
                      <Instagram className="w-5 h-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-emerald-50 hover:border-emerald-600">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-emerald-50">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">Schedule a Tour</h3>
                  <p className="mb-6 text-gray-600">
                    Experience LEOT School firsthand! Schedule a personalized tour to see our facilities and meet our
                    team.
                  </p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Book a Tour</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center justify-center bg-gray-200 rounded-lg h-96">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600">Interactive map would be embedded here</p>
                    <p className="text-sm text-gray-500">123 Education Street, Learning City, LC 12345</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


    </div>
  )
}

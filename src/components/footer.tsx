
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Admissions", href: "/admissions" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]

  const programs = [
    { name: "Primary Education", href: "/programs#primary" },
    { name: "STEM Programs", href: "/programs#stem" },
    { name: "Arts & Creativity", href: "/programs#arts" },
    { name: "Global Languages", href: "/programs#languages" },
  ]

  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-600">
                <span className="text-lg font-bold text-white">L</span>
              </div>
              <span className="ml-2 text-xl font-bold">LEOT School</span>
            </div>
            <p className="mb-6 leading-relaxed text-gray-300">
              Empowering future leaders through innovative education, personalized learning, and character development.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="hover:bg-emerald-600">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-emerald-600">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-emerald-600">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-emerald-600">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 transition-colors hover:text-emerald-400">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          {/* <div>
            <h3 className="mb-6 text-lg font-semibold">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link href={program.href} className="text-gray-300 transition-colors hover:text-emerald-400">
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact & Newsletter */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Get in Touch</h3>
            <div className="mb-6 space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">123 Education St, Learning City, LC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400" />
                <span className="text-gray-300">info@leotschool.edu</span>
              </div>
            </div>

            <div>
              <h4 className="mb-3 font-semibold">Newsletter Signup</h4>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="text-white placeholder-gray-400 bg-gray-800 border-gray-700"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="pt-8 mt-12 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-400">© 2024 LEOT School. All rights reserved.</p>
            <div className="flex mt-4 space-x-6 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-emerald-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-emerald-400">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-sm text-gray-400 hover:text-emerald-400">
                Accessibility
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  )
}


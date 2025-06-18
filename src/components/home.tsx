import React from 'react';
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Home = () => {
    return (
        <section className="relative py-20 bg-gradient-to-r from-emerald-50 to-teal-50 lg:py-32">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
                  Welcome to <span className="text-emerald-600">LEOT School</span>
                </h1>
                <p className="mt-6 text-xl leading-relaxed text-gray-600">
                  Empowering Future Leaders through innovative education, personalized learning, and character development.
                </p>
                <div className="flex flex-col gap-4 mt-8 sm:flex-row">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Explore Our Programs
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Book a Tour
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/homepang.jpg"
                  alt="LEOT School Campus"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute p-6 bg-white rounded-lg shadow-lg -bottom-6 -left-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100">
                      <span className="text-lg font-bold text-emerald-600">500+</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Happy Students</p>
                      <p className="text-sm text-gray-600">Achieving Excellence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
}
export default Home;

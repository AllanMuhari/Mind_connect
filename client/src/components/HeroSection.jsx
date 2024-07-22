import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
      <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
        <div className="grid max-w-[1300px] mx-auto gap-8 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] lg:leading-tighter">
              Unlock Your Mental Wellbeing
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Mindful is a comprehensive mental health platform that connects
              you with licensed therapists, support groups, and personalized
              resources.
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-6">
              <Link to="#">
                <a className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50">
                  Get Started
                </a>
              </Link>
              <Link to="#">
                <a className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50">
                  Find a Therapist
                </a>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/placeholder.svg"
              alt="Hero"
              className="w-full h-auto max-w-lg mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

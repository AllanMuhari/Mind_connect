import React from "react";
import { Link } from "react-router-dom";

export default function ServicesSection() {
  return (
    <section className="w-full flex justify-center  py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Comprehensive Mental Health Support
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mindful provides a wide range of services to support your mental
              health journey, from connecting with licensed therapists to
              joining supportive communities.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Find a Therapist</h3>
            <p className="text-sm text-muted-foreground">
              Browse our directory of licensed therapists and book appointments
              that fit your schedule.
            </p>
            <Link
              to="#"
              className="text-sm font-medium text-primary-foreground hover:underline underline-offset-4">
              Explore Therapists
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Join Support Groups</h3>
            <p className="text-sm text-muted-foreground">
              Connect with others in supportive groups to share experiences and
              find community.
            </p>
            <Link
              to="#"
              className="text-sm font-medium text-primary-foreground hover:underline underline-offset-4">
              Join a Group
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Access Resources</h3>
            <p className="text-sm text-muted-foreground">
              Explore a wealth of resources to help you navigate your mental
              health journey.
            </p>
            <Link
              to="#"
              className="text-sm font-medium text-primary-foreground hover:underline underline-offset-4">
              Access Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

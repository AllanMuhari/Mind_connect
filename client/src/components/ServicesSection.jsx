import React from "react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  return (
    <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Personalized Mental Health Support
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mindful provides a personalized experience, connecting you with
              the right therapists, support groups, and resources based on your
              unique needs and preferences.
            </p>
          </div>
          <div className="flex gap-4 lg:justify-center">
            <Link
              to="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Find a Therapist
            </Link>
            <Link
              to="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
              Join a Support Group
            </Link>
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
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">24/7 Crisis Support</h3>
            <p className="text-sm text-muted-foreground">
              Immediate assistance is available anytime you need urgent mental
              health support.
            </p>
            <Link
              to="#"
              className="text-sm font-medium text-primary-foreground hover:underline underline-offset-4">
              Get Crisis Support
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Wellness Programs</h3>
            <p className="text-sm text-muted-foreground">
              Engage in structured wellness programs to improve your overall
              mental health and well-being.
            </p>
            <Link
              to="#"
              className="text-sm font-medium text-primary-foreground hover:underline underline-offset-4">
              Explore Wellness Programs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="text-lg font-bold">Online Therapy</h3>
            <p className="text-sm text-muted-foreground">
              Access therapy sessions from the comfort of your home through our
              secure online platform.
            </p>
            <Link
              to="#"
              className="text-sm font-medium text-primary-foreground hover:underline underline-offset-4">
              Start Online Therapy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

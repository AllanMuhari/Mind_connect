import React from "react";
import { Link } from "react-router-dom";

const TrustedBySection = () => {
  return (
    <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Trusted by Thousands
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Mindful is trusted by individuals and organizations across the
            country to provide high-quality mental health support.
          </p>
        </div>
        <div className="divide-y rounded-lg border">
          <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src="/placeholder.svg"
                width="140"
                height="70"
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src="/placeholder.svg"
                width="140"
                height="70"
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-8">
              <img
                src="/placeholder.svg"
                width="140"
                height="70"
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
          </div>
          <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src="/placeholder.svg"
                width="140"
                height="70"
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src="/placeholder.svg"
                width="140"
                height="70"
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <img
                src="/placeholder.svg"
                width="140"
                height="70"
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}>
            Find a Therapist
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}>
            Join a Support Group
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;

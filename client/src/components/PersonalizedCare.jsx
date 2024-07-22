import React from "react";
import { Button } from "./ui/button";

const PersonalizedCare = () => {
  return (
    <section className="w-full center py-16 bg-gray-50">
      <div className="container m-auto text-center">
        <h2 className="text-4xl font-bold">
          Personalized Mental Health Support
        </h2>
        <p className="mt-4 text-lg">
          Mindful provides a personalized experience, connecting you with the
          right therapists, support groups, and resources based on your unique
          needs and preferences.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="primary" className="hover:bg-gray-200">
            Find a Therapist
          </Button>
          <Button variant="ghost" className="hover:bg-gray-200">
            Join a Support Group
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedCare;

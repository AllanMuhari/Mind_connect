import React from "react";

const SecureCareSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">Secure and Personalized Care</h2>
        <p className="mt-4 text-lg">
          Mindful provides a safe and confidential platform for you to connect
          with mental health professionals and support communities.
        </p>
        <form className="mt-8 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="p-2 bg-primary text-white rounded-r-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary">
            Sign Up
          </button>
        </form>
        <p className="mt-2 text-sm text-gray-600">
          Sign up to get started with Mindful.{" "}
          <a href="#" className="underline">
            Terms &amp; Conditions
          </a>
        </p>
      </div>
    </section>
  );
};

export default SecureCareSection;

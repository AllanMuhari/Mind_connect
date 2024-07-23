import React from "react";

const WaitingApproval = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Waiting for Approval</h2>
        <p>
          Your account is waiting to be approved by an admin. You will receive a
          notification once approved.
        </p>
      </div>
    </div>
  );
};

export default WaitingApproval;

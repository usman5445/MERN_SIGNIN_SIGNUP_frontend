import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="z-10 flex h-full w-full flex-col items-center justify-center text-8xl">
      <h1 className="">Dashboard</h1>
      <p>
        Hi There! <span className="text-accent">Usman.</span>
      </p>
      <button
        onClick={() => navigate("/signin")}
        className="m-8 rounded-2xl bg-cta px-8 py-2 text-3xl font-semibold shadow-sm shadow-cta duration-150 hover:shadow-lg hover:shadow-cta focus:shadow-lg focus:shadow-cta"
      >
        Sign Out
      </button>
    </div>
  );
}

export default Dashboard;

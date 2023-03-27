import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("auth"));
  useEffect(() => {
    if (!auth) {
      navigate("/signin");
    }
  }, []);

  function handleSignout() {
    navigate("/signin");
    localStorage.removeItem("auth");
  }
  return (
    <div className="z-10 flex h-full w-full flex-col items-center justify-center text-4xl md:text-6xl lg:text-8xl">
      <h1 className="">Dashboard</h1>
      <p>
        Hi There!{" "}
        <span className="text-accent">{auth?.firstName || "User"}.</span>
      </p>
      <button
        onClick={handleSignout}
        className="m-8 rounded-2xl bg-cta px-8 py-2 text-3xl font-semibold shadow-sm shadow-cta duration-150 hover:shadow-lg hover:shadow-cta focus:shadow-lg focus:shadow-cta"
      >
        Sign Out
      </button>
    </div>
  );
}

export default Dashboard;

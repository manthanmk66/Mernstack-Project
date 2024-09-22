import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SiGmail, SiLinkedin } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

const HomePage = () => {
  const [homePageData, setHomePageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    title: " ",
    description: " ",
  });
  const navigate = useNavigate(); // Used to redirect the user

  const addTodo = async () => {
    axios.post("http://localhost:5000/api/auth/addtodo");
  };

  // Function to fetch homepage data
  const fetchHomePage = async () => {
    const token = localStorage.getItem("token"); // Get token from localStorage

    if (!token) {
      // Redirect to login page if no token is found
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/homepage", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Attach token in headers
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.status === 200) {
        setHomePageData(data); // Store homepage data in state
      } else {
        console.error("Error:", data.message);
        navigate("/login"); // Redirect to login if unauthorized
      }
    } catch (err) {
      console.error("Error fetching homepage:", err);
      navigate("/login"); // Redirect to login on error
    } finally {
      setLoading(false); // Stop the loading state after fetching
    }
  };

  // UseEffect to call fetchHomePage on component mount
  useEffect(() => {
    fetchHomePage();
  }, []);

  // Show loading spinner if data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render homepage if data exists
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1 px-4 py-12 md:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter text-black sm:text-5xl md:text-6xl lg:text-7xl">
                Welcome to our home page
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl lg:text-2xl">
                Discover our products and services, and learn more about our
                company.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md shadow bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors border rounded-md shadow-sm border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 right-0 z-10 w-64 p-4 border rounded-lg shadow-lg bg-background">
                <div className="flex items-center gap-4">
                  <CgProfile />
                  <div className="grid gap-1">
                    <div className="text-lg font-medium">John Doe</div>
                    <div className="text-sm text-muted-foreground">
                      Software Engineer
                    </div>
                  </div>
                </div>
                {/* <Separator className="my-4" /> */}
                <div className="grid gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <SiGmail className="w-4 h-4" />
                    <span>john@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiTwitterXFill className="w-4 h-4" />
                    <a href="/" className="hover:underline" prefetch={false}>
                      @johndoe
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiLinkedin className="w-4 h-4" />
                    <a href="/" className="hover:underline" prefetch={false}>
                      John Doe
                    </a>
                  </div>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width={800}
                height={600}
                alt="Hero"
                className="mx-auto aspect-[4/3] w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      <div className="flex justify-center p-2">
        <input
          type="text"
          placeholder="Title"
          className="p-2 border border-gray-300 rounded "
          id="title"
          onChange={(e) => {
            setData(e.target.value);
          }}
          required
        />
        <input
          type="text"
          placeholder="Description"
          className="p-2 border border-gray-300 rounded "
          id="title"
          onChange={(e) => {
            setData(e.target.value);
          }}
          required
        />
        <button className="bg-orange-200">Add Todo</button>
      </div>
    </div>
  );
};

export default HomePage;

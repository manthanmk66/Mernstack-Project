import React from "react";

import { SiGmail, SiLinkedin } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const SimpleComponent = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1 px-4 py-12 md:px-6 md:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-4xl text-black font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Welcome to our home page
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl lg:text-2xl">
                Discover our products and services, and learn more about our
                company.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Get Started
                </a>
                <a
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 right-0 z-10 w-64 rounded-lg border bg-background p-4 shadow-lg">
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
                    <SiGmail className="h-4 w-4" />
                    <span>john@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiTwitterXFill className="h-4 w-4" />
                    <a href="#" className="hover:underline" prefetch={false}>
                      @johndoe
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiLinkedin className="h-4 w-4" />
                    <a href="#" className="hover:underline" prefetch={false}>
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
    </div>
  );
};
export default SimpleComponent;

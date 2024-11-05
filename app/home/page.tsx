import React from "react";
import { combinationMark } from "../data/combination";
import { brand } from "../data/brand";
export default function Home() {
  return (
    <div className="bg-white h-screen">
      <section id="#" className="py-10 md:py-20">
        <div className="container mx-auto">
          {/* heading */}
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gary-900  tracking-tight font-bold border-b border-gray-200 py-3">
              Dynamo Logos
            </h1>
            <p className="mt-5 text-gray-600 text-base md:text-lg">
              The DynamoLogos component is a React component designed to display
              a logo based on specific filtering criteria such as category,
              color, and name. It also has the capability to select a random
              logo if no criteria are provided or if the random flag is set to
              true.
            </p>
          </div>
          {/* heading */}

          {/* feature */}
          <div className="mt-10 text-center">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-10">
              Our Features
            </h3>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="p-6 rounded-md bg-slate-400 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Random Logo
                </h3>
                <p className="text-base text-gray-600">
                  Get random logo from a huge collection of royalty free logo
                </p>
              </div>
              <div className="p-6 rounded-md bg-slate-400 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Filter by Category
                </h3>
                <p className="text-base text-gray-600">
                  Filter the logo by category
                </p>
              </div>
              <div className="p-6 rounded-md bg-slate-400 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Get Specific Logo by Name
                </h3>
                <p className="text-base text-gray-600">
                  Check the logo collection page and use logo name
                </p>
              </div>
            </div>
          </div>
          {/* feature */}

          {/* logo catalog  */}
          <div className="mt-10">
            <div className="border border-gray-200 rounded-md">
              <div className="flex justify-between">
                <div className="border-r border-gray-200 w-1/2">
                  <h4 className="text-lg font-semibold border-b border-gray-200 p-5">
                    Brand
                  </h4>

                  <div className="flex justify-between p-5">
                    <h4>Logo</h4>
                    <h4>Category</h4>
                    <h4>Name</h4>
                    <h4>Color</h4>
                  </div>

                  <div className="">
                    {brand.map((item) => (
                      <div
                        key={item.id}
                        className="p-5 border-b border-gray-200 flex items-center justify-between"
                      >
                        <span className="">{item.logo}</span>
                        <p className=" text-gray-500 font-semibold text-start">
                          {item.category}
                        </p>
                        <p className=" text-gray-500 font-semibold text-start">
                          {item.name}
                        </p>
                        <p className=" text-gray-500 font-semibold text-start">
                          {item.color}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-r border-gray-200 w-1/2">
                  <h4 className="text-lg font-semibold border-b border-gray-200 p-5">
                    Combination
                  </h4>

                  <div className="flex justify-between p-3">
                    <h4>Logo</h4>
                    <h4>Category</h4>
                    <h4>Name</h4>
                    <h4>Color</h4>
                  </div>

                  <div className="">
                    {combinationMark.map((item) => (
                      <div
                        key={item.id}
                        className="p-5 border-b border-gray-200 flex items-center justify-between"
                      >
                        <span className="">{item.logo}</span>
                        <p className=" text-gray-500 font-semibold text-start">
                          {item.category}
                        </p>
                        <p className=" text-gray-500 font-semibold text-start">
                          {item.name}
                        </p>
                        <p className=" text-gray-500 font-semibold text-start">
                          {item.color}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* logo catalog  */}


          <div className="mx-auto text-center mt-10 max-w-2xl">
            <p>Created By Dyanmo UI </p>
          </div>
        </div>
      </section>
    </div>
  );
}

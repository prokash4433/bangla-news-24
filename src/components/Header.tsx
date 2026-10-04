import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";

const Header = () => {
          const date = new Date().toLocaleDateString("bn-BD", {
                    dateStyle: "full",
          });

          return (
                    <header className="max-w-7xl mx-auto h-20 grid grid-cols-3 items-center px-4 mt-5">

                              {/* Left */}
                              <div></div>

                              {/* Logo + Website Name */}
                              <div className="flex items-center justify-center gap-2">
                                        <Image
                                                  className="w-10 h-10 object-contain"
                                                  height={50}
                                                  width={50}
                                                  src="/logo.webp"
                                                  alt="Bangla News 24 Logo"
                                        />

                                        <div>
                                                  <h2 className="text-2xl font-bold text-red-700 leading-none">
                                                            Bangla News 24
                                                  </h2>

                                                  <p className="text-xs text-gray-500 mt-1">
                                                            {date}
                                                  </p>
                                        </div>
                              </div>

                              {/* Sign In / Sign Up */}
                              <div className="flex justify-end items-center gap-2 translate-x-8   ">
                                        <button className="btn">
                                                  সাইন ইন
                                        </button>

                                        <button className="btn bg-red-700 text-white">
                                                  সাইন আপ
                                        </button>
                              </div>

                              <NavLinks/>

                    </header>
          );
};

export default Header;
import React from "react";
import clients from "../data/clients.json";
import { MainLayout } from "../components/layout";

const Clients = () => {
  return (
    <>
      <div className="grid text-white max-md:mt-[62.5px] md:h-screen md:place-items-center">
        <div className="mx-10 grid grid-cols-2 md:grid-cols-3">
          <h1 className="col-span-2 my-5 text-center text-2xl uppercase md:col-span-3 md:text-4xl">
            Dental | Medical | Corporate
          </h1>
          {clients.map((client) => {
            return (
              <div className="p-5">
                <h2 className="font-bold md:text-2xl">{client.client}</h2>
                <p className="md:text-lg">{client.address}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Clients;

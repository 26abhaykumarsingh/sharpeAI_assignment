import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import Navbar from "./Navbar";
import db from "../Firebase";

function TransactionData() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "transactions"));
    let tempData = [];
    querySnapshot.forEach((doc) => {
      tempData = [...tempData, doc.data()];
    });
    setData(tempData);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto px-4 sm:px-8 mt-28">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Wallet Address
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((item, index) => (
                      <tr key={index}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 w-10 h-10">
                              <img
                                className="w-full h-full rounded-full"
                                src="https://cryptologos.cc/logos/versions/ethereum-eth-logo-animated.gif?v=029"
                                alt=""
                              />
                            </div>
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {item.address}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            ${item.amount}
                          </p>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionData;

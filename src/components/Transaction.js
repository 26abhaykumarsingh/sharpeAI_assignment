import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";

import Navbar from "./Navbar";
import db from "../Firebase";

export default function Trasnsaction() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendData = async (data) => {
    console.log(data);
    try {
      const docRef = await addDoc(collection(db, "transactions"), {
        address: data.address,
        amount: data.amount,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="relative flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-28">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://cryptologos.cc/logos/versions/ethereum-eth-logo-full-horizontal.svg?v=029"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Submit Transaction
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={handleSubmit((data) => {
              sendData(data);
              reset();
            })}
          >
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Wallet Address
              </label>
              <div className="mt-2">
                <input
                  id="address"
                  {...register("address", {
                    required: "Wallet address field cannot be empty",
                    pattern: {
                      value: /^0x[0-9a-fA-F]{40}$/,
                      message: "Wallet Address not valid",
                    },
                  })}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.address && (
                  <p className="text-red-500">{errors.address.message}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Amount
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="amount"
                  {...register("amount", {
                    required: "Amount is required",
                    min: {
                      value: 0,
                      message: "Amount must be greater than or equal to 0",
                    },
                    max: {
                      value: 10000,
                      message: "Amount must be less than or equal to 10,000",
                    },
                  })}
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.amount && (
                  <p className="text-red-500">{errors.amount.message}</p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

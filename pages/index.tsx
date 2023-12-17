/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useWalletList } from "@meshsdk/react";
import Image from "next/image";

export default function Home() {
  const wallets = useWalletList();

  // example-1
  // console.log("Wallet List:", wallets);

  return (
    <>
      {/* example-1 */}
      {/* <h1>Wallet List:</h1>
      {wallets.map((wallet, i) => {
        return (
          <div key={i}>
            <h2>Wallet{i}</h2>
            <p>Name: {wallet.name}</p>
            <p>Version: {wallet.version}</p>
            <p>Icon: {wallet.icon}</p>
          </div>
        );
      })} */}

      {/* example-2 */}
      <div className="bg-black text-white h-screen flex justify-center items-center">
        <div className="border border-white rounded-2xl py-4 px-6">
          <h1 className="text-center text-2xl font-bold m-4">Wallet List:</h1>
          <div className="flex justify-center items-center">
            {wallets.map((wallet, i) => {
              return (
                <div
                  key={i}
                  className="bg-slate-700 border border-transparent hover:border-white rounded-xl text-center font-bold m-2 p-2"
                >
                  <Image
                    src={wallet.icon}
                    alt="wallet icon"
                    width={50}
                    height={50}
                  />
                  <p className="text-sm">{wallet.name}</p>
                  <p className="text-xs">{wallet.version}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

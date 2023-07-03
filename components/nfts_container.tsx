import React, { useEffect, useState } from "react";
import NftCard from "./nft_card";
import { KoiosProvider } from "@meshsdk/core";
import { wallet } from "../config/siteMetadata";

const koiosProvider = new KoiosProvider("api");

function NftContainer() {
  const [nfts, setNfts] = useState<string[]>([]);

  async function getNfts() {
    const _utxos = await koiosProvider.fetchAddressUTxOs(wallet.address);

    const _nfts = _utxos
      .map((utxo) => {
        return utxo.output.amount
          .filter((asset) => {
            return asset.unit != "lovelace";
          })
          .map((asset) => {
            return asset.unit;
          })
          .reduce(function (accumulator, currentValue) {
            return [...accumulator, currentValue];
          }, []);
      })
      .reduce(function (accumulator, currentValue) {
        return [...accumulator, ...currentValue];
      }, []);

    setNfts(_nfts);
  }

  useEffect(() => {
    getNfts();
  }, []);

  return (
    <div className="px-px md:px-3">
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
        {nfts.map((unit, i) => {
          return <NftCard unit={unit} key={i} />;
        })}
      </div>
    </div>
  );
}

export default NftContainer;

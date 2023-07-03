import { AssetMetadata, KoiosProvider } from "@meshsdk/core";
import React, { useEffect, useState } from "react";
// import { resolveMedia } from "@meshsdk/react";

const koiosProvider = new KoiosProvider("api");

function NftCard({ unit }) {
  const [asset, setAsset] = useState<AssetMetadata>(undefined);

  async function getAsset() {
    if (unit && unit.length > 0) {
      const _asset = await koiosProvider.fetchAssetMetadata(unit);
      setAsset(_asset);
    }
  }

  useEffect(() => {
    getAsset();
  }, []);

  if (asset === undefined) return <></>;

  return (
    <article className="post bg-gray-100 text-white relative pb-full md:mb-6">
      <img
        className="w-full h-full left-0 top-0 object-cover"
        src={resolveMedia(asset.image)}
        alt="image"
      />
    </article>
  );
}

export default NftCard;

const resolveMedia = (
  src: string,
  ipfsUrl = "https://infura-ipfs.io/ipfs/"
) => {
  if (Array.isArray(src)) {
    src = src.join("");
  }

  if (src.startsWith("data:image")) {
    return src;
  } else if (src.startsWith("ipfs://"))
    return ipfsUrl + src.split("ipfs://")[1].split("ipfs/").slice(-1)[0];
  else if (
    (src.startsWith("Qm") && src.length === 46) ||
    (src.startsWith("baf") && src.length === 59)
  ) {
    return ipfsUrl + src;
  }

  return src;
};

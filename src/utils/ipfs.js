import pinataSDK from '@pinata/sdk';
const pinata = pinataSDK('c0b4ed5b34f41db8d1e4', 'ac39c9373c86d2384c80d4a9875308f73b4e62ddda558f0679a61de9de12b067');

export const getIpfsHash = async (data) => {
  const result = await pinata.pinJSONToIPFS(data, null);
  const hash = result.IpfsHash;
  return hash;
};

export const getIpfsHashFromFile = async (file) => {
  return new Promise((resolve, reject) => {
    var headers = new Headers();
    headers.append("pinata_api_key", "c0b4ed5b34f41db8d1e4");
    headers.append("pinata_secret_api_key", "ac39c9373c86d2384c80d4a9875308f73b4e62ddda558f0679a61de9de12b067");
    var formdata = new FormData();
    formdata.append("file", file);
    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: formdata
    };
    fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", requestOptions)
      .then(r => r.json())
      .then(r => {
        resolve(r.IpfsHash)
      })
      .catch(error => reject(error))
  })
};

var DownloadRequest = artifacts.require("./DownloadRequest.sol");

contract('Download Request Event', function (accounts) {
  it("should send a download request event", async () => {
    var instance = await DownloadRequest.deployed();
    await instance.request();
  });
});
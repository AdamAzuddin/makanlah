import Image from "next/image";

const WalletPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col p-4">
      {/* Current Balance */}
      <div className="text-2xl font-bold mt-6">Current Balance: RM100.00</div>

      {/* Wallet Section */}
      <div className="flex flex-wrap mt-8 w-full max-w-7xl">
        {/* Reload Wallet Section */}
        <div className="flex flex-col flex-1 bg-orange-500 text-white p-8 rounded-lg shadow-lg h-96 justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Reload Wallet</h2>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center">
                <Image
                  src="/qr_code.png"
                  alt="QR Code Icon"
                  width={50}
                  height={50}
                  className="mr-4"
                />
                <span className="text-lg">QR Code</span>
              </div>
              <div className="flex items-center">
                <Image
                  src="/online_banking.png"
                  alt="Online Banking Icon"
                  width={50}
                  height={50}
                  className="mr-4"
                />
                <span className="text-lg">Online Banking</span>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <Image
              src="/withdraw.png"
              alt="Withdraw Icon"
              width={50}
              height={50}
              className="mr-4"
            />
            <span className="text-lg">Withdraw</span>
          </div>
        </div>

        {/* Transactions Section */}
        <div className="flex flex-col bg-gray-200 p-8 rounded-lg shadow-lg h-96 ml-6 max-w-3xl">
          <h2 className="text-2xl font-semibold mb-6">Transactions</h2>
          <ul className="space-y-4">
            <li className="text-green-600 font-medium text-lg">+RM10.00</li>
            <li className="text-red-600 font-medium text-lg">-RM5.00</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;

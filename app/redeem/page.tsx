import Image from "next/image";

const RedeemPage = () => {
    const vouchers = [
        {
            id: 1,
            title: "RM 2 Voucher Discount for coffee - Kedai Poleng",
            imgSrc: "/voucher_logo.png",
        },
        {
            id: 2,
            title: "RM 2 Voucher Discount for coffee - Kedai Poleng",
            imgSrc: "/voucher_logo.png",
        },
        {
            id: 3,
            title: "RM 2 Voucher Discount for coffee - Kedai Poleng",
            imgSrc: "/voucher_logo.png",
        },
        {
            id: 4,
            title: "RM 2 Voucher Discount for coffee - Kedai Poleng",
            imgSrc: "/voucher_logo.png",
        },
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col p-6">
            {/* Page Title */}
            <h1 className="text-2xl font-bold mb-8">Redeem</h1>

            {/* Voucher Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-5xl">
                {vouchers.map((voucher) => (
                    <div
                        key={voucher.id}
                        className="bg-orange-500 text-white rounded-lg p-4 flex flex-col shadow-lg"
                    >
                        {/* Image Section */}
                        <div className="w-full flex mb-4">
                            <Image
                                src={voucher.imgSrc}
                                alt="Voucher Logo"
                                width={120}
                                height={120}
                                className="rounded-lg"
                            />
                        </div>

                        {/* Text Section */}
                        <div>
                            <p className="text-sm font-medium">{voucher.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RedeemPage;
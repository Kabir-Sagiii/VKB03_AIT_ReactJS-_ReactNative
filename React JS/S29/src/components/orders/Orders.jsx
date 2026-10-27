const Orders = () => {
  const orders = [
    {
      id: "#ORD-1024",
      date: "Oct 08, 2026",
      product: "Wireless Headphones",
      price: "$129.99",
      status: "Delivered",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: "#ORD-1023",
      date: "Oct 05, 2026",
      product: "Smart Watch",
      price: "$249.99",
      status: "Shipped",
      statusColor: "bg-blue-100 text-blue-700",
    },
    {
      id: "#ORD-1022",
      date: "Oct 01, 2026",
      product: "Mechanical Keyboard",
      price: "$89.99",
      status: "Processing",
      statusColor: "bg-yellow-100 text-yellow-700",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-lg">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          My Orders
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          View and track your recent orders.
        </p>
      </div>

      {/* Orders */}
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-xl border border-gray-200 p-4 transition hover:shadow-md"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Order Info */}
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold text-gray-900">
                    {order.id}
                  </h3>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${order.statusColor}`}
                  >
                    {order.status}
                  </span>
                </div>

                <p className="mt-2 text-sm text-gray-600">
                  {order.product}
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Ordered on {order.date}
                </p>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end">
                <p className="font-bold text-gray-900">
                  {order.price}
                </p>

                <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
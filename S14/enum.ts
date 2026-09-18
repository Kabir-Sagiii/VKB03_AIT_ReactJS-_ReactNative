enum Status {
      Pending ="pending",
      Shipped = "shipped",
      Delivered = "delivered"

}

var OrderStatus : Status = Status.Pending
console.log(OrderStatus)


OrderStatus = Status.Delivered;
console.log(OrderStatus)
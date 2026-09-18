"use strict";
var Status;
(function (Status) {
    Status["Pending"] = "pending";
    Status["Shipped"] = "shipped";
    Status["Delivered"] = "delivered";
})(Status || (Status = {}));
var OrderStatus = Status.Pending;
console.log(OrderStatus);
OrderStatus = Status.Delivered;
console.log(OrderStatus);

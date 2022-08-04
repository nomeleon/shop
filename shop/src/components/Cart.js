import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

function Cart() {
  let user = useSelector((state) => {
    return state.user;
  });
  let cart = useSelector((state) => {
    return state.cart;
  });
  let dispatch = useDispatch();

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>상품번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartP, i) => {
            return (
              <tr key={i}>
                <td>{cart[i].id}</td>
                <td>{cart[i].name}</td>
                <td>{cart[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(changeName());
                      console.log(user);
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;

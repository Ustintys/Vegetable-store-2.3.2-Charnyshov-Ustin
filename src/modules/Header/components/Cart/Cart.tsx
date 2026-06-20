import {
  Button,
  Popover,
  Divider, Group, Text,
} from "@mantine/core";
import style from "./Cart.module.scss";
import CartIcon from "../../../../assets/icons/Cart.svg?react";
import CardPopupCart from "./UI/CardPopupCart.tsx";
import {useState} from "react";

type Cart = {
  image: string,
  name: string,
  wieght: string,
  price: number,
}

function Cart() {

  const [cart, setCart] = useState<Cart[]>([]);

  return (
    <Popover offset={20} shadow={'0 2px 8px 0 rgba(33, 37, 41, 0.08), 0 1px 2px 0 rgba(33, 37, 41, 0.1)'}>
      <Popover.Target >
        <Button classNames={{root: style.ButtonRoot}} rightSection={<CartIcon />} variant="filled" color="#54b46a">
          Cart
        </Button>
      </Popover.Target>
      <Popover.Dropdown style={{ padding: "20px", borderRadius: "16px" }} >
        <CardPopupCart />
        <Divider classNames={{root: style.divider}} />
        <Group justify='space-between'>
          <Text classNames={{root: style.textTotal}}>Total</Text>
          <Text classNames={{root: style.textTotal}}>$ 76</Text>
        </Group>
      </Popover.Dropdown>
    </Popover>
  )
}
export default  Cart;
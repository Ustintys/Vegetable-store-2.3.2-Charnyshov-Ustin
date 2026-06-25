import {
  Button,
  Popover,
  Divider, Group, Text, Image,
} from "@mantine/core";
import style from "./Cart.module.scss";
import CartIcon from "../../../../assets/icons/Cart.svg?react";
import CardPopupCart from "./UI/CardPopupCart.tsx";
import {useContext} from "react";
import {VegetableContext} from "../../../../contexts/VegetableContext.tsx";
import cart_content from '../../../../assets/img/cart_content.png'

function Cart() {

  const context = useContext(VegetableContext);
  if (!context) return null;
  const vegetablesData = context.dataCardCart
  const setVegetablesData = context.setDataCardCart

  function decrease(id: number) {
    setVegetablesData((prev) => {
      return prev.map((vegetable) => {
        if (vegetable.id === id) {
          return {...vegetable, quantity: Math.max(1,  vegetable.quantity - 1)};
        }
        return vegetable;
      });
    });
  }

  function increase(id: number) {
    setVegetablesData((prev) => {
      return prev.map((vegetable) => {
        if(vegetable.id === id){
          return {...vegetable, quantity: vegetable.quantity + 1};
        }
        return vegetable
      });
    });
  }


  return (
    <Popover offset={20} shadow={'0 2px 8px 0 rgba(33, 37, 41, 0.08), 0 1px 2px 0 rgba(33, 37, 41, 0.1)'} classNames={{dropdown: style.dropdown}} >
      <Popover.Target >
        <Button data-testid="btn-cart" classNames={{root: style.ButtonRoot}} rightSection={<CartIcon />} variant="filled" color="#54b46a">
          {(vegetablesData.length === 0) ? null : (
            <div className={style.quantity}>
              <Text classNames={{root: style.quantityText}}>{vegetablesData.length}</Text>
            </div>
          )}
          Cart
        </Button>
      </Popover.Target>
      {(vegetablesData.length === 0) ? (
        <Popover.Dropdown >
          <Image src={cart_content} alt={'the cart is empty'} />
        </Popover.Dropdown>
      ) : (
        <Popover.Dropdown>
          {vegetablesData.map((vegetable, index) => (
            <div key={vegetable.id}>
              <CardPopupCart id={vegetable.id}
                             name={vegetable.name}
                             wieght={vegetable.wieght}
                             price={vegetable.price}
                             image={vegetable.image}
                             quantity={vegetable.quantity}
                             increase={increase}
                             decrease={decrease}
              />
              {(index != vegetablesData.length - 1) ? <Divider classNames={{root: style.dividerCard}} /> : null}
            </div>
          ))}
          <Divider classNames={{root: style.divider}} />
          <Group justify='space-between'>
            <Text classNames={{root: style.textTotal}}>Total</Text>
            <Text classNames={{root: style.textTotal}}>
              $ {vegetablesData.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)}
            </Text>
          </Group>
        </Popover.Dropdown>
      )}
    </Popover>
  )
}
export default  Cart;
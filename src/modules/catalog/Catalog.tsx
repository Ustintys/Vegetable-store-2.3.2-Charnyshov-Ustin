import style from "./catalog.module.scss";
import CardProduct from "./components/CardProduct/CardProduct.tsx";
import {useEffect, useState} from "react";
import ky from "ky";

type Vegetables = {
  id: number;
  name: string;
  wieght: string;
  price: number;
  image: string;
};

function Catalog() {

  const [vegetables, setVegetables] = useState<Vegetables[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await ky
          .get('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
          .json<Vegetables[]>();

        const transformData = data.map((product) => {
          const [name, wieght] = product.name.split(' - ');
          return(
            {...product, name, wieght}
          )
        })

        setVegetables(transformData);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  },[]);

    return (
      <div className={style.container}>
        <h1 className={style.title}>Catalog</h1>
        <div className={style.containerCard}>
          {vegetables.map((vegetable: Vegetables) => (
            <div key={vegetable.id}>
              <CardProduct name={vegetable.name} price={vegetable.price} image={vegetable.image} wieght={vegetable.wieght} count={1} />
            </div>
          ))}
        </div>
      </div>
    )

}

export default Catalog;
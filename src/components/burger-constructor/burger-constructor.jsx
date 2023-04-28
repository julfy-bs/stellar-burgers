import clsx from 'clsx';
import styles from './burger-constructor.module.css';

import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeIngredient, summarizeIngredientsCost } from '../../services/slices/cartSlice.js';

const BurgerConstructor = () => {
  const { cart, cartPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const removeIngredientFromCart = (id) => {
    dispatch(removeIngredient(id));
  };

  // const createIngredientsIdsArray = () => {
  //   const idsArray = { 'ingredients': [] };
  //   cart.ingredients.forEach(item => idsArray.ingredients.push(item._id));
  //   idsArray.ingredients.push(cart.bun._id);
  //   idsArray.ingredients.push(cart.bun._id);
  //   return idsArray;
  // };
  //
  // const handleBurgerConstructorButton = async () => {
  //   try {
  //     const order = createIngredientsIdsArray();
  //     const res = await api.createOrder(order);
  //     cart.orderNumber = res.order.number.toString();
  //     if (cart.orderNumber !== null) openModal('cart', true);
  //     else console.error('Ошибка в формировании номера заказа.');
  //     cart.ingredients = [];
  //     cart.bun = null;
  //     dispatch({ type: 'reset' });
  //   } catch (e) {
  //     throw new Error(e);
  //   }
  // };
  const handleBurgerConstructorButton = async () => {
    console.log(123);
  };
  //
  // const createPriceArray = useCallback(() => {
  //   const prices = [];
  //
  //   if (cart.bun !== null && cart.bun) {
  //     prices.push(cart.bun.price);
  //     prices.push(cart.bun.price);
  //   }
  //
  //   if (cart.length > 0) {
  //     cart.forEach(item => prices.push(item.price));
  //   }
  //
  //   return prices;
  // }, [cart]);
  //
  //
  // useEffect(() => {
  //   const prices = createPriceArray();
  //   const amount = prices.reduce((acc, curr) => acc + curr);
  //   dispatch({ type: 'summation', value: amount });
  //   return () => dispatch({ type: 'reset' });
  // }, [cart, dispatch, createPriceArray]);

  useEffect(() => {
    dispatch(summarizeIngredientsCost());
  }, [cart, dispatch]);

  const ingredientElements = cart.ingredients.map(
    (ingredient, index) =>
      <li
        className={clsx(styles.cart__item, styles.cart__item_draggable)}
        key={ingredient._id + index}
      >
        <DragIcon type="primary"/>
        <ConstructorElement
          text={ingredient.name}
          price={ingredient.price}
          thumbnail={ingredient.image}
          handleClose={() => removeIngredientFromCart(index)}
        />
      </li>
  );

  return (
    <>
      <section className={clsx(styles.section, 'mt-25')}>
        {
          !cart.bun
            ? (
              <h1
                className={
                  clsx('text', 'text_type_main-large', styles.title)
                }
              >
                Выберите булку
              </h1>
            )
            : (
              <ul className={clsx(styles.cart__list)}>
                <li
                  className={clsx(styles.cart__item)}
                >
                  <ConstructorElement
                    extraClass={clsx(styles.cart__bun)}
                    type={'top'}
                    isLocked={true}
                    text={`${cart.bun.name} (верх)`}
                    price={cart.bun.price}
                    thumbnail={cart.bun.image}
                  />
                </li>
                <li>
                  <ul className={clsx(styles.cart__ingredients_list)}>
                    {ingredientElements}
                  </ul>
                </li>
                <li
                  className={clsx(styles.cart__item)}
                >
                  <ConstructorElement
                    extraClass={clsx(styles.cart__bun)}
                    type={'bottom'}
                    isLocked={true}
                    text={`${cart.bun.name} (низ)`}
                    price={cart.bun.price}
                    thumbnail={cart.bun.image}
                  />
                </li>
              </ul>
            )
        }
        <div className={clsx(styles.cart__footer)}>
          <div className={clsx(styles.cart__price)}>
            <span className={clsx('text', 'text_type_digits-medium')}>
            {cartPrice}
            </span>
            <span className={styles.cart__currency}>
            <CurrencyIcon type={'primary'}/>
          </span>
          </div>
          <Button
            extraClass={styles.button}
            htmlType="button"
            type="primary"
            size="large"
            onClick={handleBurgerConstructorButton}
          >
            Оформить заказ
          </Button>
        </div>
      </section>
    </>
  );
};

export default BurgerConstructor;
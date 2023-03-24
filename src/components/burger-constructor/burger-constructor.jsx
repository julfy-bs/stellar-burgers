import clsx from 'clsx';
import styles from './burger-constructor.module.css';
import PropTypes from 'prop-types';

import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = (props) => {
  return (
    <section className={clsx('mt-25', styles.cart)}>
      <ul className={clsx(styles.cart__list)}>
        <li
          className={clsx(styles.cart__item)}
        >
          <ConstructorElement
            extraClass={clsx(styles.cart__bun)}
            type={'top'}
            isLocked={true}
            text={`${props.cart.bun.name} (верх)`}
            price={props.cart.bun.price}
            thumbnail={props.cart.bun.image}
          />
        </li>
        <li>
          <ul className={clsx(styles.cart__ingredients_list)}>
            {
              props.cart.ingredients.map((ingredient, index) => (
                <li
                  className={clsx(styles.cart__item, styles.cart__item_draggable)}
                  key={ingredient._id + index}
                >
                  <DragIcon type="primary"/>
                  <ConstructorElement
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image}
                  />
                </li>
              ))
            }
          </ul>
        </li>
        <li
          className={clsx(styles.cart__item)}
        >
          <ConstructorElement
            extraClass={clsx(styles.cart__bun)}
            type={'bottom'}
            isLocked={true}
            text={`${props.cart.bun.name} (низ)`}
            price={props.cart.bun.price}
            thumbnail={props.cart.bun.image}
          />
        </li>
      </ul>
      <div className={clsx(styles.cart__footer)}>
        <div className={clsx(styles.cart__price)}>
            <span className={clsx('text', 'text_type_digits-medium')}>
            {props.cart.price}
            </span>
          <span className={styles.cart__currency}>
            <CurrencyIcon type={'primary'}/>
          </span>
        </div>
        <Button extraClass={styles.button} htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  cart: PropTypes.object,
};

export default BurgerConstructor;
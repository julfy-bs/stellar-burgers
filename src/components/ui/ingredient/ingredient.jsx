import clsx from 'clsx';
import styles from './ingredient.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../../utils/types.js';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, setModalIngredient } from '../../../services/slices/modalSlice.js';
import { addIngredient } from '../../../services/slices/cartSlice.js';

const Ingredient = ({ ingredient }) => {
  const { cart } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleIngredientClick = (e) => e.shiftKey
    ? dispatch(addIngredient(ingredient))
    : dispatch(setModalIngredient(ingredient)) && dispatch(openModal({type: 'ingredient'}));

  const setIngredientsCondition = () => cart.ingredients.length > 0
    ? cart.ingredients.some(cartIngredient => cartIngredient._id === ingredient._id)
    : false;

  const setBunCondition = () => (cart.bun) ? cart.bun._id === ingredient._id : false;

  const ingredientsCondition = setIngredientsCondition() || false;
  const bunCondition = setBunCondition() || false;

  const countIngredient = (type) => (type === 'bun') ? 1 : cart.ingredients.filter(item => item._id === ingredient._id).length;

  return (
    <>
      <li
        className={clsx(styles.ingredients__item)}
        onClick={(e) => handleIngredientClick(e)}
      >
        {
          (ingredientsCondition || bunCondition) && (
            <Counter
              count={countIngredient(ingredient.type)}
              size="default"
              extraClass="m-1"
            />
          )
        }
        <picture>
          <source
            srcSet={ingredient.image_mobile}
            media="(max-width: 480px)"
          />
          <source
            srcSet={ingredient.image_large}
            media="(min-width: 1400px)"
          />
          <img
            className={clsx(styles.ingredients__image)}
            alt={ingredient.name}
            src={ingredient.image}
          />
        </picture>
        <div
          className={clsx(styles.ingredients__price)}
        >
          <span
            className={clsx('text', 'text_type_digits-default')}
          >
            {ingredient.price}
          </span>
          <CurrencyIcon type={'primary'}/>
        </div>

        <h3
          className={clsx(styles.ingredients__name, 'text', 'text_type_main-default')}
        >
          {ingredient.name}
        </h3>
      </li>
    </>
  );
};

Ingredient.propTypes = {
  ingredient: ingredientType.isRequired
};

export default Ingredient;
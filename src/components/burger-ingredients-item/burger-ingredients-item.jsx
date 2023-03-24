import React, { Component } from 'react';
import clsx from 'clsx';
import styles from './burger-ingredients-item.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientType } from '../../utils/types.js';

class BurgerIngredientsItem extends Component {
  render() {
    return (
      <li
        className={clsx(styles.ingredients__item)}
      >
        <Counter
          count={1}
          size="default"
          extraClass="m-1"
        />
        <picture>
          <source
            srcSet={this.props.ingredient.image_mobile}
            media="(max-width: 480px)"
          />
          <source
            srcSet={this.props.ingredient.image_large}
            media="(min-width: 1400px)"
          />
          <img
            className={clsx(styles.ingredients__image)}
            alt={this.props.ingredient.name}
            src={this.props.ingredient.image}
          />
        </picture>
        <div
          className={clsx(styles.ingredients__price)}
        >
          <span
            className={clsx('text', 'text_type_digits-default')}
          >
            {this.props.ingredient.price}
          </span>
          <CurrencyIcon type={'primary'}/>
        </div>

        <h3
          className={clsx(styles.ingredients__name, 'text', 'text_type_main-default')}
        >
          {this.props.ingredient.name}
        </h3>
      </li>
    );
  }
}

BurgerIngredientsItem.propTypes = {
  ingredient: ingredientType.isRequired
};

export default BurgerIngredientsItem;
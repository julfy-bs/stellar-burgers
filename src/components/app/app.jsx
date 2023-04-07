import clsx from 'clsx';
import styles from './app.module.css';

import { useIngredients } from '../../hooks/useIngredients.js';
import { useCart } from '../../hooks/useCart.js';

import Header from '../header/header.jsx';
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import Loader from '../loader/loader.jsx';
import Modal from '../modal/modal.jsx';
import IngredientDetails from '../ingredient-details/ingredient-details.jsx';
import { useModal } from '../../hooks/useModal.js';
import OrderDetails from '../order-details/order-details.jsx';

const App = () => {
  const { ingredients, serverData, error, loading } = useIngredients();
  const { cart } = useCart();
  const { detailedIngredient, isDetailedOrderOpened, isModalOpen, closeModal, openModal } = useModal();

  return (
    <>
      <Header/>
      <main className={clsx(styles.main, 'pb-10')}>
        {
          !loading && serverData.length > 0
            ?
            <div className={clsx(styles.main_container)}>
              <BurgerIngredients
                ingredients={ingredients}
                openModal={openModal}
              />
              <BurgerConstructor
                cart={cart}
                openModal={openModal}
              />
            </div>
            : <Loader loading={loading}/>
        }
        {
          error && <h1>Ошибка</h1>
        }
      </main>

      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        title={detailedIngredient ? 'Детали ингредиента' : ''}
        ariaTitle={isDetailedOrderOpened ? 'Идентификатор заказа' : ''}
      >
        {
          detailedIngredient &&
          <IngredientDetails ingredient={detailedIngredient}/>
        }
        {
          isDetailedOrderOpened &&
          <OrderDetails orderNumber={cart.orderNumber}/>
        }
      </Modal>
    </>
  );
};

export default App;

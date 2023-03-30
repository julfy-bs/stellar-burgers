import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const ModalOverlay = ({ children, opened }) => {
  const style = clsx(styles.modal__overlay, { [styles.modal__overlay_opened]: opened });

  return <div className={style}>{children}</div>;
};

ModalOverlay.propTypes = {
  children: PropTypes.any,
};

export default ModalOverlay;
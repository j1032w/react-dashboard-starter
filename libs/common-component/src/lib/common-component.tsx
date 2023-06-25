import styles from './common-component.module.scss';

/* eslint-disable-next-line */
export interface CommonComponentProps {}

export function CommonComponent(props: CommonComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CommonComponent!</h1>
    </div>
  );
}

export default CommonComponent;

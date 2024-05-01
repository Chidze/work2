import styles from './ShowInfoComponent.module.css'

const ShowInfoComponent = ({ body }) => {

    return (
        <div className={styles.info}> 
            <b>body:</b>{body} 
        </div>
    );
}

export default ShowInfoComponent;
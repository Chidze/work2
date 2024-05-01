import styles from './CapsuleComponent.module.css'
const CapsuleComponent = ({ capsule }) => {
    return (
        <div className={styles.capsule}>
            <div><b>status:</b> {capsule.status}</div>
        </div>
    );
}

export default CapsuleComponent;
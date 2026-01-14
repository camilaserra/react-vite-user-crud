import styles from './EmptyState.module.css'

export default function EmptyState({
    title,
    description
}) {
    return (
        <div className={styles.container}>
            <img className={styles.image} src="public/list-register.svg" alt="List Register empty state" />
            <p className={styles.title}>{title}</p>
            {description && (
                <p className={styles.description}>{description}</p>
            )}
        </div>
    )
}

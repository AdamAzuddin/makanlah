import styles from "./page.module.css"
import Card from "../components/Card.jsx"

function dashboardRider(props) {
    return (
        <div className={styles.dashboard}>
            <h1>Hi {props.name}</h1>
            <h2>Your earnings: RM {props.earnings}</h2>
            <Card title="Hello world" description="Hi"/>
        </div>
    );
}

export default dashboardRider
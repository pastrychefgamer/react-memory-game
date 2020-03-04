import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './HighScoresPage.module.css';

class HighScoresPage extends Component {
    render() {
        // const scoreRows = this.props.scores.map((score, idx) => (
        //     <tr key={idx}>
        //         <td><span className="badge">{idx + 1}</span></td>
        //         <td>{score.initials}</td>
        //         <td>{score.difficulty}</td>
        //         <td>{formatTime(score.seconds)}</td>
        //     </tr>
        // ));

        return (
            <div className={styles.HighScores}>
                <header>High Scores</header>
            </div>
        )
    }
}

export default HighScoresPage;
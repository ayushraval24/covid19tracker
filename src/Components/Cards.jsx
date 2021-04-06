import React from 'react'
import './Cards.css'
import cx from 'classnames';
import Count from 'react-countup';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed || !recovered || !deaths) {
        return "Loading..."
    }

    return (
        <div className="container">
            <Grid container justify="center" spacing={3}>
                <Grid item component={Card} xs={12} md={3} className={cx("card", "infected")}>
                    <CardContent>
                        <Typography>Infected</Typography>
                        <Typography>
                            <Count start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography>Number of active cases of COVID19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx("card", "recovered")}>
                    <CardContent>
                        <Typography>Recovered</Typography>
                        <Typography>
                            <Count start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography>Number of recoveries cases of COVID19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx("card", "dead")}>
                    <CardContent>
                        <Typography>Deaths</Typography>
                        <Typography>
                            <Count start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography>Number of deaths because of COVID19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;

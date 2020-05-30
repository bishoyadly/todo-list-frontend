import React from "react";
import {Button} from "antd";
import homePageStyles from './HomePage.module.scss';
import logo from '../resources/images/logo.png';
import welcomeLeft from '../resources/images/welcome-left.png';
import welcomeRight from '../resources/images/welcome-right.png';

export default function () {

    return (
        <div className={homePageStyles.homePageContainer}>

            <div>
                <img
                    className={homePageStyles.welcomeLeft}
                    src={welcomeLeft}/>
            </div>

            <div className={homePageStyles.homePageCenterContainer}>
                <img
                    className={homePageStyles.logoImage}
                    src={logo}/>
                <h1 className={homePageStyles.headerTitle}> To Do Application</h1>
                <p className={homePageStyles.description}>
                    To Do gives you focus, from work to play.
                </p>
                <Button
                    type={"primary"}
                    size={"large"}
                    className={homePageStyles.getStartedButton}
                >
                    Get Started
                </Button>
            </div>

            <div>
                <img
                    className={homePageStyles.welcomeRight}
                    src={welcomeRight}/>
            </div>

        </div>
    );
}
import React, {useState} from "react";
import {Spin, Button} from "antd";
import homePageStyles from './HomePage.module.scss';
import logo from '../../resources/images/logo.png';
import welcomeLeft from '../../resources/images/welcome-left.png';
import welcomeRight from '../../resources/images/welcome-right.png';
import {LoadingOutlined} from '@ant-design/icons';
import {useHistory} from "react-router-dom";


const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;

export default function HomePage() {

    const [isHidden, setIsHidden] = useState(false);
    const history = useHistory();

    function onClick() {
        setIsHidden(true);
        setTimeout(() => {
            history.push('/signin');
        }, 1500);
    }

    function getHiddenStyle(hiddenValue) {
        if (hiddenValue) {
            return homePageStyles.hidden;
        } else {
            return '';
        }
    }

    return (
        <div>

            <div className={`${homePageStyles.homePageContainer} ${getHiddenStyle(isHidden)}`}>

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
                        onClick={onClick}
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

            <div className={`${homePageStyles.spinnerContainer} ${getHiddenStyle(!isHidden)}`}>

                <img
                    className={homePageStyles.spinnerImage}
                    src={logo}
                />

                <Spin
                    className={homePageStyles.spinner}
                    indicator={antIcon}
                    size={"large"}
                />

            </div>

        </div>
    );
}
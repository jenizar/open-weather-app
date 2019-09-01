import React from "react";

class Hero extends React.Component {
    render() {
        const { localtime, city } = this.props;
        let welcome = "";

        if (localtime >= 5 && localtime <= 11) {
            welcome = "Good Morning";
        }

        if (localtime >= 12 && localtime <= 17) {
            welcome = "Good Afternoon";
        }

        if (localtime >= 22 || (localtime >= 0 && localtime <= 4)) {
            console.log(`wa are here`);
            welcome = "Good Night";
        }

        if (localtime >= 18 && localtime <= 21) {
            welcome = "Good Evening";
        }

        return (
            <h1>
                {welcome}. Welcome to {city}
            </h1>
        );
    }
}
export default Hero;

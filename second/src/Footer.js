import React from "react";

class Footer extends React.Component {
    render() {
        let {copyright} = this.props;
        return (
            <footer style={{background: "blue",
                fontSize: "22px",
                textAlign: "center",
                padding: "10px 0"
                }}>
                <p>
                    {copyright}
                </p>
            </footer>
        )
    }
}
export default Footer;
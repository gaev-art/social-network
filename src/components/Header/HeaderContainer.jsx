import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserDate} from "../../redux/authReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials:true,}
            )
            .then(response => {
                if (response.data.resultCode===0) {
                    let {id, email,login}=response.data.data
                    this.props.setAuthUserDate(id, email, login)
                    let userId = response.data.data.id
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                        .then(res => {
                            //тут можно взять фото пользвотель
                        })
                }

            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {setAuthUserDate,})(HeaderContainer);


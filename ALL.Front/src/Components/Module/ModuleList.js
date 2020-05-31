import React from 'react';
import axios from 'axios'
import ModuleTitle from "./ModuleTitle";
import "./CSS/ModuleList.css";

export default class ModuleList extends React.Component {
    state = {
        modules: []
    }

    async componentDidMount() {
        const response = await fetch("https://localhost:44324/module", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + sessionStorage.getItem("accessToken")
            }
        });

        console.log(sessionStorage.getItem("accessToken"))

        if(response.ok === true) {
            const data = await response.json();
            this.setState({modules: data});
            console.log(this.state.modules)
        }
    }


    handleDelete(index) {
        axios.delete(`https://localhost:5001/module/` + index)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
        window.location.href = "/modules"
    }


    render() {
        return (
            <div>
                <div>
                    <div className={'moduleListHeaderContainer'}>
                        <span>Мои Модули</span>
                    </div>
                    <div className={'moduleListSearchContainer'}>
                        <input placeholder={'Искать...'}/>
                        <button className={'button searchButton'}>Искать</button>
                    </div>
                </div>
                <div>
                    {this.state.modules.map(module =>
                        <ModuleTitle module={module}/>
                    )}
                </div>
            </div>
        )
    }
}

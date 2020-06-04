import React from 'react';
import axios from 'axios'
import ModuleTitle from "./ModuleTitle";
import "./CSS/ModuleList.css";

export default class ModuleList extends React.Component {
    state = {
        modules: []
    }

    async componentDidMount() {
        const response = await fetch("http://spectraph-001-site1.itempurl.com/module", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + sessionStorage.getItem("accessToken")
            }
        });

        if (response.ok === true) {
            const data = await response.json();
            console.log(data)
            this.setState({modules: data});
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
                <div className={'moduleListHeaderContainer'}>
                    <span>Мої Модулі</span>
                </div>
                {this.state.modules.length !== 0 ? (<div>
                    <div className={'moduleListSearchContainer'}>
                        <input placeholder={'Шукати...'}/>
                        <button className={'button searchButton'}>Шукати</button>
                    </div>
                    <div>
                        {this.state.modules.map(module =>
                            <ModuleTitle module={module}/>
                        )}
                    </div>
                </div>) : (
                    <div>
                        <div className={'moduleListHeaderContainer'}>
                            <h2>У вас немає модулів. Створіть новий модуль.</h2>
                        </div>
                    </div>
                )}

            </div>
        )
    }
}

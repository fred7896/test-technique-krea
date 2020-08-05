import React from "react";
import "../App.css";
import logo from "../LOGO DISTINGO.png";
import visu from "../VISU.png";
import Field from "../Components/Field";
import Checkbox from "../Components/Checkbox";

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            civilite: "madame",
            customerName: "",
            customerSurname: "",
            birthDate: "",
            email: "",
            phoneNumber: "",
            inputCheckbox: false
        }
    }

    handleChange = (e) => {
        const name = e.target.name;
        const type = e.target.type;
        const value = type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    handleCivilite = (e) => {
        this.setState({ civilite: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = JSON.stringify(this.state);
        console.log(data);
        this.resetField();
    }

    resetField = () => {
        this.setState({
            civilite: "madame",
            customerName: "",
            customerSurname: "",
            birthDate: "",
            email: "",
            phoneNumber: "",
            inputCheckbox: false
        })
    }
    render() {
        console.log(this.state.civilite);
        return (
            <div className="main-container">
                <header className="container-img py-3">
                    <img src={logo} width="298px" height="62px" alt="logo distingo" />
                </header>
                <div id="content">
                    <div className="container-header-img">
                        <img src={visu} width="100%" alt="logo distingo" className="visu" />
                        <div className="group-title py-3"><h1 className="period py-1">DU 6 MAI AU 6 JUIN 2020</h1>
                            <div className="big-game py-1"><h2>GRAND JEU</h2></div>
                            <div className="py-1 group-distingame">
                                <h3 id="#distin">DISTIN</h3>
                                <h3 id="#game">GAME</h3>
                            </div>
                            <p className="py-1 test-app">Et si vous testiez notre app ?</p></div>
                    </div>
                    <form className="p-3" onSubmit={this.handleSubmit}>

                        <div onChange={this.handleCivilite} className="my-2 civ">
                            <p >Civilité :</p>
                            <label htmlFor="civ-madame"><input type="radio" id="civ-madame" name="civ-madame" value="madame"
                                checked={this.state.civilite === "madame"} ></input>
                            Madame</label>
                            <label htmlFor="civ-monsieur"><input type="radio" id="civ-monsieur" name="drone" value="monsieur"
                                checked={this.state.civilite === "monsieur"}
                            ></input>
                            Monsieur</label>
                        </div>

                        <div>
                            <Field name="customerName" type="text" value={this.state.customerName} onChange={this.handleChange} placeholder="Nom*" ></Field>
                            <Field name="customerSurname" type="text" value={this.state.customerSurname} onChange={this.handleChange} placeholder="Prénom*"></Field>
                            <Field name="birthDate" type="text" value={this.state.birthDate} onChange={this.handleChange} placeholder="Date de naissance*"></Field>
                            <Field name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Adresse email*"></Field>
                            <Field name="phoneNumber" type="tel" value={this.state.phoneNumber} onChange={this.handleChange} placeholder="Téléphone*"></Field>
                        </div>
                        <Checkbox name="inputCheckbox" value={this.state.inputCheckbox} onChange={this.handleChange} >J'accepte de recevoir les offres DISTINGO</Checkbox>

                        <input type="submit" value="VALIDER" className="button-validation"></input>

                    </form>

                </div>
                <footer id="footer">
                    <ul className="category-list-footer">
                        <li><a href="#">Les dotations</a></li>
                        <li><a href="#">Les dotations</a></li>
                        <li><a href="#">Les dotations</a></li>
                        <li><a href="#">Les dotations</a></li>
                        <li><a href="#">Les dotations</a></li>
                    </ul>
                </footer>
            </div >
        )
    }
} 
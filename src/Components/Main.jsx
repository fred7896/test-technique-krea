import React from "react";
import "../App.css";
import logo from "../Images/logo-distingo.png";
import visu from "../Images/visu.png";
import gifts from "../Images/gifts.png";
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
        const sections = ["Les dotations", "Règlement", "Crédits", "Application DISTINGO", "Présentation de l application"];
        return (
            <div className="main-container">
                <header className="container-img py-3">
                    <img src={logo} width="298" height="62" alt="logo distingo" />
                </header>
                <div id="content">
                    <figure className="container-header-img">
                        <img src={visu} alt="logo distingo" className="visu" />
                        <div className="group-title py-3">
                            <figcaption className="period py-1">DU 6 MAI AU 6 JUIN 2019</figcaption>
                            <figcaption className="big-game">GRAND JEU</figcaption>
                            <div className="group-distingame">
                                <h1 id="distin">DISTIN</h1>
                                <h1 id="game">GAME</h1>
                            </div>
                            <figcaption className="test-app">Et si vous testiez notre app ?</figcaption>
                        </div>
                        <div className="container-gifts"><img src={gifts} alt="gifts" /></div>
                    </figure>
                    <div className="container-edito" >
                        <div id="edito" className="p-4">
                            <p id="last-step">Plus qu'une étape pour valider votre participation !</p>
                            <p id="invite-form">Pour valider votre participation au tirage au sort et vous sauvez pour de bon,<br /> veuillez remplir les champs ci-dessous :</p>
                        </div>
                    </div>

                    <div className="container-form">
                        <form className="p-3" onSubmit={this.handleSubmit}>

                            <div className="civ">
                                <p className="pr-4" >Civilité*</p>
                                <label htmlFor="civ-madame" className="pr-4 container-radio"><input type="radio" id="civ-madame" name="civ-madame" value="madame"
                                    checked={this.state.civilite === "madame"} onChange={this.handleCivilite}  ></input>
                                    <span className="checkmark"></span>
                            Madame</label>
                                <label htmlFor="civ-monsieur" className="container-radio"><input type="radio" id="civ-monsieur" name="civ-monsieur" value="monsieur"
                                    checked={this.state.civilite === "monsieur"} onChange={this.handleCivilite}
                                ></input>
                                    <span className="checkmark"></span>
                            Monsieur</label>
                            </div>

                            <div>
                                <Field name="customerName" type="text" value={this.state.customerName} onChange={this.handleChange} placeholder="Nom*" ></Field>
                                <Field name="customerSurname" type="text" value={this.state.customerSurname} onChange={this.handleChange} placeholder="Prénom*"></Field>
                                <Field name="birthDate" type="text" value={this.state.birthDate} onChange={this.handleChange} placeholder="Date de naissance*"></Field>
                                <Field name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Adresse email*"></Field>
                                <Field name="phoneNumber" type="tel" value={this.state.phoneNumber} onChange={this.handleChange} placeholder="Téléphone*"></Field>
                            </div>
                            <Checkbox name="inputCheckbox" value={this.state.inputCheckbox} onChange={this.handleChange} >J'accepte de recevoir les offres DISTINGO (notamment les offres de fidélisation réservées aux clients) ainsi que celles des sociétés du groupe PSA et de leur réseau de distribution par email.</Checkbox>
                            <div className="d-flex justify-content-center my-5"><input type="submit" value="VALIDER" className="button-validation"></input></div>


                        </form>
                    </div>

                </div>
                <footer id="footer">
                    <ul className="category-list-footer">
                        {sections.map((section, idx) => {
                            return <li key={idx} className="footer-section"><a href="#">{section}</a></li>
                        })}
                    </ul>
                </footer>
            </div >
        )
    }
} 
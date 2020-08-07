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
            inputCheckbox: false,
            isSubmit: false,
            isNameValid: false,
            isSurnameValid: false,
            isValidBirthDate: false,
            isEmail: false

        }
    }



    handleChange = (e) => {
        const name = e.target.name;
        const type = e.target.type;
        let value = type === "checkbox" ? e.target.checked : e.target.value;
        this.setState({
            [name]: value,
            isSubmit: false
        }, this.controlForm)
    }

    handleCivilite = (e) => {
        this.setState({ civilite: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isSubmit: true
        }, this.checkData);
    }

    checkData = () => {
        const data = JSON.stringify(this.state);
        const { isNameValid, isSurnameValid, isValidBirthDate, isEmail, phoneNumber } = this.state;
        if (isNameValid && isSurnameValid && isValidBirthDate && isEmail && phoneNumber.length > 0) {
            console.log(data);
        } else {
            console.log("le formulaire contient des erreurs");
        }
    }

    checkName = () => {
        const regexp = /^[a-zA-Z-'. ]+$/;
        let isNameValid = regexp.test(this.state.customerName);
        let isSurnameValid = regexp.test(this.state.customerSurname);
        this.setState({
            isNameValid: isNameValid,
            isSurnameValid: isSurnameValid
        })
    }

    checkBirth = (birthDate) => {
        const regexp = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;
        let isValidBirthDate = regexp.test(birthDate);
        this.setState({
            isValidBirthDate: isValidBirthDate
        })
    }

    checkEmail = (email) => {
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isEmail = regexp.test(email);
        this.setState({
            isEmail: isEmail
        })
    }

    controlForm = () => {
        this.checkName();
        this.checkBirth(this.state.birthDate);
        this.checkEmail(this.state.email);
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
                        <form className="p-3" onSubmit={this.handleSubmit} noValidate>

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
                                {this.state.isSubmit && (this.state.customerName.length === 0) && <div className="error" aria-live="polite">Veuillez remplir ce champ</div>}
                                {this.state.isSubmit && (this.state.customerName.length > 0) && !this.state.isNameValid && <div className="error" aria-live="polite">Nom invalide</div>}
                                <Field name="customerSurname" type="text" value={this.state.customerSurname} onChange={this.handleChange} placeholder="Prénom*"></Field>
                                {this.state.isSubmit && (this.state.customerSurname.length === 0) && <div className="error" aria-live="polite">Veuillez remplir ce champ</div>}
                                {this.state.isSubmit && (this.state.customerSurname.length > 0) && !this.state.isSurnameValid && <div className="error" aria-live="polite">Prénom invalide</div>}
                                <Field name="birthDate" type="text" value={this.state.birthDate} onChange={this.handleChange} placeholder="Date de naissance*"></Field>
                                {this.state.isSubmit && (this.state.birthDate.length > 0) && !this.state.isValidBirthDate && <div className="error" aria-live="polite">Date de naissance invalide.<br />Formats acceptés : JJ/MM/AAAA ou JJ-MM-AAAA</div>}
                                {this.state.isSubmit && (this.state.birthDate.length === 0) && <div className="error" aria-live="polite">Veuillez remplir ce champ</div>}
                                <Field name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="Adresse email*"></Field>
                                {this.state.isSubmit && (this.state.email.length === 0) && <div className="error" aria-live="polite">Veuillez remplir ce champ</div>}
                                {this.state.isSubmit && (this.state.email.length > 0) && !this.state.isEmail && <div className="error" aria-live="polite">Email invalide</div>}
                                <Field name="phoneNumber" type="tel" value={this.state.phoneNumber} onChange={this.handleChange} placeholder="Téléphone*"></Field>
                                {this.state.isSubmit && (this.state.phoneNumber.length === 0) && <div className="error" aria-live="polite">Veuillez remplir ce champ</div>}
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
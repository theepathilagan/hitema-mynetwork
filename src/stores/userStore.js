import { defineStore } from "pinia"

export const useUserStore = defineStore("userStore", {
    state : () => {
        return {
            user : {}
        }
    },
    actions : {
        login : function ({ email, password }) {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    email: email,
                    password: password
                })
            };
            fetch("http://localhost:3000/login", requestOptions)
                .then(response => response.json())
                .then((resjson) => {
                    this.user.isLogged = true
                    this.user.accessToken = resjson.accessToken
                    this.user.pseudo = resjson.user.pseudo
                    this.user.email = resjson.user.email
                    this.user.image = resjson.user.urlImgProfil
                })
        },

        register : function ({ pseudo, email, password, image }) {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    email: email,
                    password: password,
                    pseudo: pseudo,
                    urlImgProfil: image
                })
            };
            fetch("http://localhost:3000/register", requestOptions)
                .then(response => response.json())
                .then((resjson) => {
                    this.user.isLogged = true
                    this.user.accessToken = resjson.accessToken
                    this.user.pseudo = pseudo
                    this.user.email = email
                    this.user.image = image
                })
        },

        logout : function () {
            this.user = {}
        }
    }
})
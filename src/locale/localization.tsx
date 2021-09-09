import en from "./en.local.json";
import cz from "./cz.local.json";
import {useContext} from "react";
import {AppContext} from "../AppContext/app.context";

const languages: Ilanguages = {
    en,
    cz
}

     function handle(langcode: string, s: string) {
     return languages[langcode][s.toLowerCase()] || s;
 }

export default handle;

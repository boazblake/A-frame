// index.jsx

import m from "mithril"
const root = document.body

// Styles
import "./loader.scss"
import "./index.css"

const model = {}

import App from "./App.js"

m.mount(root, App(model))

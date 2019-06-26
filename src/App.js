import m from "mithril"

export const IsLoading = m(".holder", [
  m(".preloader", [
    m("div"),
    m("div"),
    m("div"),
    m("div"),
    m("div"),
    m("div"),
    m("div")
  ])
])

const App = (mdl) => {
  return {
    view: () =>
      m(".app", [
        mdl.isLoading && IsLoading,

        m("a-scene", [
          m("a-box", {
            position: "-1 0.5 -3",
            rotation: "0 45 0",
            color: "#4CC3D9"
          }),
          m("a-sphere", {
            position: "0 1.25 -5",
            radius: "1.25",
            color: "#EF2D5E"
          }),
          m("a-cylinder", {
            position: "1 0.75 -3",
            radius: 0.5,
            height: 1.5,
            color: "#FFC65D"
          }),
          m("a-plane", {
            position: "0 0 -4",
            rotation: "-90 0 0",
            width: 4,
            height: 4,
            color: "#7BC8A4"
          }),
          m("a-sky", { color: "#003863" })
        ])
      ])
  }
}

export default App

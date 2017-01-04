
const Color = require("color")

const primary = Color("#7d59c8");
const secondary = Color("#00c497");
const sidebar = Color("#FFFFFF");
const dark = Color("rgba(0,0,0,0.8)");
const light = Color("rgba(255,255,255,0.8)");

const darken = primary.darken(0).hex().toString();

module.exports = {
	brandPrimary : primary.hex().toString(),
	darker: darken,
	brandSecondary: secondary.hex().toString(),
	brandSidebar: sidebar.hex().toString(),
	dark: dark.hex().toString(),
	light: light.hex().toString()
}

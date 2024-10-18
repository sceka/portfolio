"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fiber_1 = require("@react-three/fiber");
var drei_1 = require("@react-three/drei");
require("./Avatar.scss");
function Avatar() {
    function Avatar3D() {
        var scene = drei_1.useGLTF("/images/marko.glb").scene;
        // Adjust the position to center the avatar properly
        return react_1["default"].createElement("primitive", { object: scene, scale: 7, position: [0, -8, 0] });
    }
    return (react_1["default"].createElement(fiber_1.Canvas, { camera: { fov: 45, position: [0, 0, 15] }, style: { width: "100%", height: "100%" } },
        react_1["default"].createElement("ambientLight", { intensity: 1 }),
        react_1["default"].createElement("directionalLight", { position: [10, 10, 5], intensity: 1 }),
        react_1["default"].createElement(react_1.Suspense, { fallback: null },
            react_1["default"].createElement(Avatar3D, null)),
        react_1["default"].createElement(drei_1.OrbitControls, null)));
}
exports["default"] = Avatar;
